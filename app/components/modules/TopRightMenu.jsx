import Immutable from 'immutable';
import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import Icon from 'app/components/elements/Icon';
import user from 'app/redux/User';
import Userpic from 'app/components/elements/Userpic';
import { browserHistory } from 'react-router';
import { LinkWithDropdown } from 'react-foundation-components/lib/global/dropdown';
import VerticalMenu from 'app/components/elements/VerticalMenu';
import LoadingIndicator from 'app/components/elements/LoadingIndicator';
import { translate } from 'app/Translator';

const defaultNavigate = (e) => {
    // do not navigate if middle mouse button is clicked
    if (e && (e.which == 2 || e.button == 4)) return

    e.preventDefault();
    const a = e.target.nodeName.toLowerCase() === 'a' ? e.target : e.target.parentNode;
    browserHistory.push(a.pathname + a.search + a.hash);
};

function TopRightMenu({username, showLogin, logout, loggedIn, showSignUp, userpic, vertical, navigate, toggleOffCanvasMenu, probablyLoggedIn, location}) {
    const mcn = 'menu' + (vertical ? ' vertical show-for-small-only' : '');
    const mcl = vertical ? '' : ' sub-menu';
    const lcn = vertical ? '' : 'show-for-medium';
    const nav = navigate || defaultNavigate;
    const submit_story = $STM_Config.read_only_mode ? null : <li className={lcn + ' submit-story'}><a href="/submit.html" onClick={nav}>{translate("submit_a_story")}</a></li>;
    const userpic_src = userpic || '/images/user.png';
    const feed_link = `/@${username}/feed`;
    const replies_link = `/@${username}/recent-replies`;
    const wallet_link = `/@${username}/transfers`;
    const settings_link = `/@${username}/settings`;
    const account_link = `/@${username}`;
    const posts_link = `/@${username}/posts`;
    const reset_password_link = `/@${username}/password`;
    function trackAnalytics(eventType) {
        console.log(eventType)
        analytics.track(eventType)
    }
    if (loggedIn) { // change back to if(username) after bug fix:  Clicking on Login does not cause drop-down to close #TEMP!
        const user_menu = [
            {link: feed_link, value: translate('feed')},
            {link: account_link, value: translate('blog')},
            {link: posts_link, value: translate('comments')},
            {link: replies_link, value: translate('replies')},
            {link: wallet_link, value: translate('wallet')},
            {link: reset_password_link, value: translate('change_password')},
            {link: settings_link, value: translate('settings')},
            loggedIn ?
                {link: '#', onClick: logout, value: translate('logout')} :
                {link: '#', onClick: showLogin, value: translate('login')}
        ];
        const search = translate('search')
        if (location && location.pathname.indexOf("/ico") != -1) {
            return (
                <ul className={mcn + ' landing'}>
                    <li className={lcn}>
                        <a href="#what-is-golos">Видео</a>
                    </li>
                    <li className={lcn}>
                        <a href="#docs">Документация</a>
                    </li>
                    <li className={lcn}>
                        <a href="#faq">FAQ</a>
                    </li>
                    <li className={lcn}>
                        <a href="#team">Команда</a>
                    </li>
                    <LinkWithDropdown
                        closeOnClickOutside
                        dropdownPosition="bottom"
                        dropdownAlignment="right"
                        dropdownContent={<VerticalMenu items={user_menu} title={username} />}
                        onClick={trackAnalytics.bind(this, 'user dropdown menu clicked')}
                    >
                        {!vertical && <li className={'Header__userpic '}>
                            <a href={account_link} title={username} onClick={e => e.preventDefault()}>
                                <Userpic account={username} width="36" height="36" />
                            </a>
                        </li>}
                    </LinkWithDropdown>
                    {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                        <span className="hamburger" />
                    </a></li>}
                </ul>
            );
            return      <ul className={mcn + mcl + ' landing'}>
                            <li className={lcn}>
                                <a href="#what-is-golos">Видео</a>
                            </li>
                            <li className={lcn}>
                                <a href="#docs">Документация</a>
                            </li>
                            <li className={lcn}>
                                <a href="#faq">FAQ</a>
                            </li>
                            <li className={lcn}>
                                <a href="#team">Команда</a>
                            </li>
                            <li className={lcn + ' image-wrapper'}>
                                <a href="/login.html">
                                    <img src="images/user.png" width="36" height="36" />
                                    <span>Вход</span>
                                </a>
                            </li>
                            <li className={lcn}><LoadingIndicator type="circle" inline /></li>
                            {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                                <span className="hamburger" />
                            </a></li>}
                        </ul>
        }

/*
                <li><a href={`/@${username}/transfers#buy_golos`} className="button alert">купить голоса</a></li>
                   move down on ICO start....
*/
        return (
            <ul className={mcn}>
                <li className={lcn + ' buttons'}>
                    <Link to="/ico" className="button success">Информация для пользователя</Link>
                </li>
                <li className={lcn}><a href="/static/search.html" title={search}>{vertical ? <span>{search}</span> : <Icon name="search" />}</a></li>
                {submit_story}
                <LinkWithDropdown
                    closeOnClickOutside
                    dropdownPosition="bottom"
                    dropdownAlignment="right"
                    dropdownContent={<VerticalMenu items={user_menu} title={username} />}
                    onClick={trackAnalytics.bind(this, 'user dropdown menu clicked')}
                >
                    {!vertical && <li className={'Header__userpic '}>
                        <a href={account_link} title={username} onClick={e => e.preventDefault()}>
                            <Userpic account={username} width="36" height="36" />
                        </a>
                    </li>}
                </LinkWithDropdown>
                {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                    <span className="hamburger" />
                </a></li>}
            </ul>
        );
    }
    if (probablyLoggedIn) {
        if (location && location.pathname.indexOf("/ico") != -1) {
            return      <ul className={mcn + mcl + ' landing'}>
                            <li className={lcn}>
                                <a href="#what-is-golos">Видео</a>
                            </li>
                            <li className={lcn}>
                                <a href="#docs">Документация</a>
                            </li>
                            <li className={lcn}>
                                <a href="#faq">FAQ</a>
                            </li>
                            <li className={lcn}>
                                <a href="#team">Команда</a>
                            </li>
                            <li className={lcn + ' image-wrapper'}>
                                <a href="/login.html">
                                    <img src="images/user.png" width="36" height="36" />
                                    <span>Вход</span>
                                </a>
                            </li>
                            <li className={lcn}><LoadingIndicator type="circle" inline /></li>
                            {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                                <span className="hamburger" />
                            </a></li>}
                        </ul>
        }

        return (
            <ul className={mcn + mcl}>
                <li className={lcn + ' buttons'}>
                    <Link to="/ico" className="button success">Информация для пользователя</Link>
                </li>
                {!vertical && <li><a href="/static/search.html" title="Поиск"><Icon name="search" /></a></li>}
                <li className={lcn}><LoadingIndicator type="circle" inline /></li>
                {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                    <span className="hamburger" />
                </a></li>}
            </ul>
        );
    }

    if (location && location.pathname.indexOf("/ico") != -1) {
        return  <ul className={mcn + mcl + ' landing'}>
                    <li className={lcn}>
                        <a href="#what-is-golos">Видео</a>
                    </li>
                    <li className={lcn}>
                        <a href="#docs">Документация</a>
                    </li>
                    <li className={lcn}>
                        <a href="#faq">FAQ</a>
                    </li>
                    <li className={lcn}>
                        <a href="#team">Команда</a>
                    </li>
                    <li className={'image-wrapper'}>
                        <a href="/login.html">
                            <img src="images/user.png" width="36" height="36" />
                            <span>Вход</span>
                        </a>
                    </li>
                    {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                        <span className="hamburger" />
                    </a></li>}
                </ul>
    }
    return (
            <ul className={mcn + mcl}>
                <li className={lcn + ' buttons'}>
                    <Link to="/ico" className="button success">Информация для пользователя</Link>
                </li>
                {!vertical && <li><a href="/static/search.html" title="Поиск"><Icon name="search" /></a></li>}
                <li className={lcn}><a href="/create_account" onClick={showSignUp}>{translate('sign_up')}</a></li>
                <li className={lcn}><a href="/login.html" onClick={showLogin}>{translate('login')}</a></li>
                {submit_story}
                {toggleOffCanvasMenu && <li className="toggle-menu"><a href="#" onClick={toggleOffCanvasMenu}>
                    <span className="hamburger" />
                </a></li>}
            </ul>
        );
}

TopRightMenu.propTypes = {
    username: React.PropTypes.string,
    loggedIn: React.PropTypes.bool,
    probablyLoggedIn: React.PropTypes.bool,
    userpic: React.PropTypes.string,
    showLogin: React.PropTypes.func.isRequired,
    showSignUp: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired,
    vertical: React.PropTypes.bool,
    navigate: React.PropTypes.func,
    toggleOffCanvasMenu: React.PropTypes.func
};

export default connect(
    state => {
        if (!process.env.BROWSER) {
            return {
                username: null,
                userpic: null,
                loggedIn: false,
                probablyLoggedIn: !!state.offchain.get('account')
            }
        }
        const username = state.user.getIn(['current', 'username']);
        const loggedIn = !!username;
        return {
            username,
            userpic: null, // state.offchain.getIn(['user', 'picture']),
            loggedIn,
            probablyLoggedIn: false
        }
    },
    dispatch => ({
        showLogin: e => {
            if (e) e.preventDefault();
            dispatch(user.actions.showLogin())
        },
        logout: e => {
            if (e) e.preventDefault();
            dispatch(user.actions.logout())
        },
        showSignUp: e => {
            if (e) e.preventDefault();
            dispatch(user.actions.showSignUp())
        }
    })
)(TopRightMenu);
