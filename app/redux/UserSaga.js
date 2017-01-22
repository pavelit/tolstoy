import {fromJS, Set} from 'immutable'
import {takeLatest} from 'redux-saga'
import {call, put, select, fork} from 'redux-saga/effects'
import {accountAuthLookup} from 'app/redux/AuthSaga'
import {PrivateKey} from 'shared/ecc'
import user from 'app/redux/User'
import {getAccount} from 'app/redux/SagaShared'
import {browserHistory} from 'react-router'
import {serverApiLogin, serverApiLogout} from 'app/utils/ServerApiClient'
import {Apis} from 'shared/api_client'
import {serverApiRecordEvent} from 'app/utils/ServerApiClient'
import {loadFollows} from 'app/redux/FollowSaga'
import {translate} from 'app/Translator'
import {encrypt, decrypt} from 'app/utils/CryptoUtil'

export const userWatches = [
    watchRemoveHighSecurityKeys, // keep first to remove keys early when a page change happens
    loginWatch,
    saveLoginWatch,
    logoutWatch,
    // getCurrentAccountWatch,
    loginErrorWatch,
    lookupPreviousOwnerAuthorityWatch,
]

const highSecurityPages = Array(/\/market/, /\/@.+\/(transfers|permissions|password)/, /\/~witnesses/)

function* lookupPreviousOwnerAuthorityWatch() {
    yield* takeLatest('user/lookupPreviousOwnerAuthority', lookupPreviousOwnerAuthority);
}
function* loginWatch() {
    yield* takeLatest('user/USERNAME_PASSWORD_LOGIN', usernamePasswordLogin);
}
function* saveLoginWatch() {
    yield* takeLatest('user/SAVE_LOGIN', saveLogin_localStorage);
}
function* logoutWatch() {
    yield* takeLatest('user/LOGOUT', logout);
}

function* loginErrorWatch() {
    yield* takeLatest('user/LOGIN_ERROR', loginError);
}

export function* watchRemoveHighSecurityKeys() {
    yield* takeLatest('@@router/LOCATION_CHANGE', removeHighSecurityKeys);
}

// function* getCurrentAccountWatch() {
//     // yield* takeLatest('user/SHOW_TRANSFER', getCurrentAccount);
// }

function* removeHighSecurityKeys({payload: {pathname}}) {
    const highSecurityPage = highSecurityPages.find(p => p.test(pathname)) != null
    // Let the user keep the active key when going from one high security page to another.  This helps when
    // the user logins into the Wallet then the Permissions tab appears (it was hidden).  This keeps them
    // from getting logged out when they click on Permissions (which is really bad because that tab
    // disappears again).
    if(!highSecurityPage)
        yield put(user.actions.removeHighSecurityKeys())
}

/**
    @arg {object} action.username - Unless a WIF is provided, this is hashed with the password and key_type to create private keys.
    @arg {object} action.password - Password or WIF private key.  A WIF becomes the posting key, a password can create all three
        key_types: active, owner, posting keys.
*/
/* function createGolosAccount() {
    this.setState({server_error: '', loading: true});
    const {name, password, password_valid} = this.state;
    if (!name || !password || !password_valid) return;

    let public_keys;
    // try generating btc address via blockcypher
    // if no success - abort (redirect with try again)
    let icoAddress = ''
    try {
        const pk = PrivateKey.fromWif(password);
        public_keys = [1, 2, 3, 4].map(() => pk.toPublicKey().toString());
    } catch (error) {
        public_keys = ['owner', 'active', 'posting', 'memo'].map(role => {
            const pk = PrivateKey.fromSeed(`${name}${role}${password}`);
            return pk.toPublicKey().toString();
        });
    }

    fetch('/api/v1/accounts', {
        method: 'post',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            csrf: $STM_csrf,
            name,
            owner_key: public_keys[0],
            active_key: public_keys[1],
            posting_key: public_keys[2],
            memo_key: public_keys[3]//,
            //json_meta: JSON.stringify({"ico_address": icoAddress})
        })
    }).then(r => r.json()).then(res => {
        if (res.error || res.status !== 'ok') {
            console.error('CreateAccount server error', res.error);
            if (res.error === 'Unauthorized') {
                this.props.showSignUp();
            }
            this.setState({server_error: res.error || translate('unknown'), loading: false});
        } else {
            window.location = `/login.html#account=${name}&msg=accountcreated`;
            // this.props.loginUser(name, password);
            // const redirect_page = localStorage.getItem('redirect');
            // if (redirect_page) {
            //     localStorage.removeItem('redirect');
            //     browserHistory.push(redirect_page);
            // }
            // else {
            //     browserHistory.push('/@' + name);
            // }
        }
    }).catch(error => {
        console.error('Caught CreateAccount server error', error);
        this.setState({server_error: (error.message ? error.message : error), loading: false});
    });
} */

function* baseLogin(action) {
    yield call(usernamePasswordLogin2, action)
    const current = yield select(state => state.user.get('current'))
    if(current) {
        const username = current.get('username')
        yield fork(loadFollows, "get_following", username, 'blog')
        yield fork(loadFollows, "get_following", username, 'ignore')
    }
}

function* usernamePasswordLogin(action) {
    // Sets 'loading' while the login is taking place.  The key generation can take a while on slow computers.
    // Проверка наличия пользователя по email
    yield call(usernamePasswordLogin2, action)
    const current = yield select(state => state.user.get('current'))
    if(current) {
        const username = current.get('username')
        yield fork(loadFollows, "get_following", username, 'blog')
        yield fork(loadFollows, "get_following", username, 'ignore')
    }
}

// const isHighSecurityOperations = ['transfer', 'transfer_to_vesting', 'withdraw_vesting',
//     'limit_order_create', 'limit_order_cancel', 'account_update', 'account_witness_vote']


const clean = (value) => value == null || value === '' || /null|undefined/.test(value) ? undefined : value

function* usernamePasswordLogin2({payload: {username, password, saveLogin,
        operationType /*high security*/, afterLoginRedirectToAccount
}}) {
    // login, using saved password
    let autopost, memoWif, login_owner_pubkey, login_wif_owner_pubkey
    if (!username && !password) {
        const data = localStorage.getItem('autopost2')
        if (data) { // auto-login with a low security key (like a posting key)
            autopost = true; // must use simi-colon
            // The 'password' in this case must be the posting private wif .. See setItme('autopost')
            [username, password, memoWif, login_owner_pubkey] = new Buffer(data, 'hex').toString().split('\t');
            memoWif = clean(memoWif);
            login_owner_pubkey = clean(login_owner_pubkey);
        }
    }
    // no saved password
    if (!username || !password) {
        const offchain_account = yield select(state => state.offchain.get('account'))
        if (offchain_account) serverApiLogout()
        return
    }

    let userProvidedRole // login via:  username/owner
    if (username.indexOf('/') > -1) {
        // "alice/active" will login only with Alices active key
        [username, userProvidedRole] = username.split('/')
    }

    const pathname = yield select(state => state.global.get('pathname'))
    const highSecurityLogin =
        // /owner|active/.test(userProvidedRole) ||
        // isHighSecurityOperations.indexOf(operationType) !== -1 ||
        highSecurityPages.find(p => p.test(pathname)) != null

    const isRole = (role, fn) => (!userProvidedRole || role === userProvidedRole ? fn() : undefined)

    const account = yield call(getAccount, username)
    //if (!account) {
    //     yield put(user.actions.loginError({ error: translate('username_does_not_exist') }))
    //     return
    //}

    // const BMResponse = yield call(getBMAccessToken, username, password)
    // console.log(access_token)

    // -------------------------------------------------
    // Авторизация в golos.io через аккаунт molodost.bz

    // Если username найден в vip_accounts
    // необходимо пропустить шаг авторизации
    // через molodost.bz и не модифицировать
    // поле password, передав его напрямую
    // в обработчик авторизации golos.io.

    // let isVipAccount = false
    // if (_.filter(vip_accounts, username)) isVipAccount = true
    // else if (!isVipAccount) {
    // Получить токен авторизации на feed.molodost.bz
    try {
        const { access_token } = yield call(getBMAccessToken, username, password)
        console.log('Token', access_token);
        // Если пользователь авторизован и мы получили токен,
        // выполняем запрос к mysql DB и получаем private_key
        // от аккаунта golos.io. Заменяем введенный пользователем
        // пароль для аккаунта molodost.bz на private_key
        // и продолжаем выполнение функции авторизации
        // в блок-чейн golos.io.
        if (access_token) {
        //    console.log('Usssrrname: ' + username)
            const { private_key } = yield call(serverApiGetAccountPrivateKey, username /* , password */)

            // Необходимо дешифровать хэш публичного ключа
            // и использовать его в чистом виде
            password = private_key

         //   console.log('Pure: ' + private_key + "\n")
            //let encryptedPrivateKey = encrypt(private_key)
            //console.log('Encrypted: ' + encryptedPrivateKey + "\n")
            //let decryptedKey = decrypt(encryptedPrivateKey)
            //console.log('Decrypted: ' + decryptedKey + "\n")

            // Далее необходимо максимально
            // безопасно (шифрование)
            // поместить private_key в
            // state чтобы можно было
            // получать его при необходимости
            // для обновления профиля и прочего.

            // Если serverApiGetAccountPrivateKey
            // не вернул private_key, значит
            // владелец аккаунта на molodost.bz
            // еще не зарегистрирован в golos.io

       }
        // api.molodost.bz возвратило ошибку,
        // это означает, что либо данные не
        // корректны, либо пользователь не
        // зарегистрирован в системе.
        else {
            console.log('User not found from BM');
        }
        // Продолжить авторизацию в golos.io
        // не подменяя введенный пароль на private_key
    }
    // Возникла ошибка при подключении к api.molodost.bz
    catch(e) {
        console.log(e);
    }
    // } // end if (isVpAccount)
    // } // end if (filterVipAccounts)

    let private_keys
    try {
        const private_key = PrivateKey.fromWif(password)
        login_wif_owner_pubkey = private_key.toPublicKey().toString()
        private_keys = fromJS({
            posting_private: isRole('posting', () => private_key),
            active_private: isRole('active', () => private_key),
            memo_private: private_key,
        })
    } catch (e) {
        // Password (non wif)
        login_owner_pubkey = PrivateKey.fromSeed(username + 'owner' + password).toPublicKey().toString()
        private_keys = fromJS({
            posting_private: isRole('posting', () => PrivateKey.fromSeed(username + 'posting' + password)),
            active_private: isRole('active', () => PrivateKey.fromSeed(username + 'active' + password)),
            memo_private: PrivateKey.fromSeed(username + 'memo' + password),
        })
    }
    if (memoWif)
        private_keys = private_keys.set('memo_private', PrivateKey.fromWif(memoWif))

    yield call(accountAuthLookup, {payload: {account, private_keys, highSecurityLogin, login_owner_pubkey}})
    let authority = yield select(state => state.user.getIn(['authority', username]))
    const hasActiveAuth = authority.get('active') === 'full'
    if(!highSecurityLogin) {
        const accountName = account.get('name')
        authority = authority.set('active', 'none')
        yield put(user.actions.setAuthority({accountName, auth: authority}))
    }
    const fullAuths = authority.reduce((r, auth, type) => (auth === 'full' ? r.add(type) : r), Set())
    if (!fullAuths.size) {
        localStorage.removeItem('autopost2')
        const owner_pub_key = account.getIn(['owner', 'key_auths', 0, 0]);
        // const pub_keys = yield select(state => state.user.get('pub_keys_used'))
        // serverApiRecordEvent('login_attempt', JSON.stringify({name: username, ...pub_keys, cur_owner: owner_pub_key}))
        if (owner_pub_key === 'STM7sw22HqsXbz7D2CmJfmMwt9rimtk518dRzsR1f8Cgw52dQR1pR') {
            yield put(user.actions.loginError({ error: translate('hello_your_account_may_have_been_compromised_we_are_working_on_restoring_an_access') }))
            return
        }
        if(login_owner_pubkey === owner_pub_key || login_wif_owner_pubkey === owner_pub_key) {
            yield put(user.actions.loginError({ error: 'owner_login_blocked' }))
        } else if(!highSecurityLogin && hasActiveAuth) {
            yield put(user.actions.loginError({ error: 'active_login_blocked' }))
        } else {
            const generated_type = password[0] === 'P' && password.length > 40;
            serverApiRecordEvent('login_attempt', JSON.stringify({name: username, login_owner_pubkey, owner_pub_key, generated_type}))
            yield put(user.actions.loginError({ error: translate('incorrect_password') }))
        }
        return
    }
    if (authority.get('posting') !== 'full')
        private_keys = private_keys.remove('posting_private')

    if(!highSecurityLogin || authority.get('active') !== 'full')
        private_keys = private_keys.remove('active_private')

    const owner_pubkey = account.getIn(['owner', 'key_auths', 0, 0])
    const active_pubkey = account.getIn(['active', 'key_auths', 0, 0])
    const posting_pubkey = account.getIn(['posting', 'key_auths', 0, 0])

    if (private_keys.get('memo_private') &&
        account.get('memo_key') !== private_keys.get('memo_private').toPublicKey().toString()
    )
        // provided password did not yield memo key
        private_keys = private_keys.remove('memo_private')

    if(!highSecurityLogin) {
        if(
            posting_pubkey === owner_pubkey ||
            posting_pubkey === active_pubkey
        ) {
            yield put(user.actions.loginError({ error: translate('this_login_gives_owner_or_active_permissions_and_should_not_be_used_here') }))
            localStorage.removeItem('autopost2')
            return
        }
    }
    const memo_pubkey = private_keys.has('memo_private') ?
        private_keys.get('memo_private').toPublicKey().toString() : null

    if(
        memo_pubkey === owner_pubkey ||
        memo_pubkey === active_pubkey
    )
        // Memo key could be saved in local storage.. In RAM it is not purged upon LOCATION_CHANGE
        private_keys = private_keys.remove('memo_private')

    // If user is signing operation by operaion and has no saved login, don't save to RAM
    if(!operationType || saveLogin) {
        // Keep the posting key in RAM but only when not signing an operation.
        // No operation or the user has checked: Keep me logged in...
        yield put(user.actions.setUser({username, private_keys, login_owner_pubkey, vesting_shares: account.get('vesting_shares')}))
    } else {
        yield put(user.actions.setUser({username, vesting_shares: account.get('vesting_shares')}))
    }

    if (!autopost && saveLogin)
        yield put(user.actions.saveLogin());

    serverApiLogin(username);
    if (afterLoginRedirectToAccount) browserHistory.push('/@' + username);
}

function* saveLogin_localStorage() {
    if (!process.env.BROWSER) {
        console.error('Non-browser environment, skipping localstorage')
        return
    }
    localStorage.removeItem('autopost2')
    const [username, private_keys, login_owner_pubkey] = yield select(state => ([
        state.user.getIn(['current', 'username']),
        state.user.getIn(['current', 'private_keys']),
        state.user.getIn(['current', 'login_owner_pubkey']),
    ]))
    if (!username) {
        console.error('Not logged in')
        return
    }
    // Save the lowest security key
    const posting_private = private_keys.get('posting_private')
    if (!posting_private) {
        console.error('No posting key to save?')
        return
    }
    const account = yield select(state => state.global.getIn(['accounts', username]))
    if(!account) {
        console.error('Missing global.accounts[' + username + ']')
        return
    }
    const postingPubkey = posting_private.toPublicKey().toString()
    try {
        account.getIn(['active', 'key_auths']).forEach(auth => {
            if(auth.get(0) === postingPubkey)
                throw 'Login will not be saved, posting key is the same as active key'
        })
        account.getIn(['owner', 'key_auths']).forEach(auth => {
            if(auth.get(0) === postingPubkey)
                throw 'Login will not be saved, posting key is the same as owner key'
        })
    } catch(e) {
        console.error(e)
        return
    }
    const memoKey = private_keys.get('memo_private')
    const memoWif = memoKey && memoKey.toWif()
    const data = new Buffer(`${username}\t${posting_private.toWif()}\t${memoWif || ''}\t${login_owner_pubkey || ''}`).toString('hex')
    // autopost is a auto login for a low security key (like the posting key)
    localStorage.setItem('autopost2', data)
}

function* logout() {
    yield put(user.actions.saveLoginConfirm(false)) // Just incase it is still showing
    if (process.env.BROWSER)
        localStorage.removeItem('autopost2')
    serverApiLogout();
}

function* loginError({payload: {/*error*/}}) {
    serverApiLogout();
}

/**
    If the owner key was changed after the login owner key, this function will find the next owner key history record after the change and store it under user.previous_owner_authority.
*/
function* lookupPreviousOwnerAuthority({payload: {}}) {
    const current = yield select(state => state.user.get('current'))
    if(!current) return

    const login_owner_pubkey = current.get('login_owner_pubkey')
    if(!login_owner_pubkey) return

    const username = current.get('username')
    const key_auths = yield select(state => state.global.getIn(['accounts', username, 'owner', 'key_auths']))
    if(key_auths.find(key => key.get(0) === login_owner_pubkey)) {
        // console.log('UserSaga ---> Login matches current account owner');
        return
    }
    // Owner history since this index was installed July 14
    let owner_history = fromJS(yield call(Apis.db_api, 'get_owner_history', username))
    if(owner_history.count() === 0) return
    owner_history = owner_history.sort((b, a) => {//sort decending
        const aa = a.get('last_valid_time')
        const bb = b.get('last_valid_time')
        return aa < bb ? -1 : aa > bb ? 1 : 0
    })
    console.log('UserSaga ---> owner_history', owner_history.toJS())
    const previous_owner_authority = owner_history.find(o => {
        const auth = o.get('previous_owner_authority')
        const weight_threshold = auth.get('weight_threshold')
        const key3 = auth.get('key_auths').find(key2 => key2.get(0) === login_owner_pubkey && key2.get(1) >= weight_threshold)
        return key3 ? auth : null
    })
    if(!previous_owner_authority) {
        console.log('UserSaga ---> Login owner does not match owner history');
        return
    }
    console.log('UserSage ---> previous_owner_authority', previous_owner_authority.toJS())
    yield put(user.actions.setUser({previous_owner_authority}))
}

// function* getCurrentAccount() {
//     const current = yield select(state => state.user.get('current'))
//     if (!current) return
//     const [account] = yield call(Apis.db_api, 'get_accounts', [current.get('username')])
//     yield put(g.actions.receiveAccount({ account }))
// }

function getBMAccessToken (username, password) {
    return fetch('http://test2.api.molodost.bz/oauth/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: 'renat.biktagirov',
            client_secret: '6NbQvMElYMcBbOVWie7a1Bs4rfVt9FpNY4V4Fl6EEGt4xTEUa1K0ugMohlemqFQ5',
            grant_type: 'client_credentials',
            username,
            password
        })
    }).then(res => res.json())
}

function serverApiGetAccountPrivateKey(username /* , password */) {
    return fetch('/api/v1/get_account_private_key', {
        method: 'post',
        mode: 'no-cros',
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({csrf: $STM_csrf, username})
    }).then(res => res.json()).catch(e => console.error(e));
}
