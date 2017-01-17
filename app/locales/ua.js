import { APP_NAME, APP_URL, LANDING_PAGE_URL, SUPPORT_EMAIL, LIQUID_TOKEN, DEBT_TOKEN, DEBT_TOKEN_SHORT, CURRENCY_SIGN, VESTING_TOKEN, LIQUID_TICKER } from 'config/client_config';
/**
 * see: app/locales/README.md
 */
export const ua = {
	// this variables mainly used in navigation section
	about: "Про проект",
	explore: "Досліджувати",
	APP_NAME_whitepaper: "Папір про " + APP_NAME,
	buy_LIQUID_TOKEN: 'Купити ' + LIQUID_TOKEN,
	sell_LIQUID_TOKEN: 'Продати ' + LIQUID_TOKEN,
	market: "Біржа",
	stolen_account_recovery: "Повернення вкраденого акаунта",
	change_account_password: "Змінити пароль акаунта",
	APP_NAME_chat: APP_NAME + " чат",
	witnesses: "Делегати",
	privacy_policy: "Політика Конфіденційності",
	terms_of_service: "Умови користування",
	sign_up: "Реєстрація",
	/* end navigation */
	buy: 'Купити',
	sell: 'Продати',
	buy_INVEST_TOKEN: 'Купити ' + VESTING_TOKEN,
	transaction_history: 'Історія транзакцій',
	submit_a_story: 'Додати пост',
	nothing_yet: 'Поки нічого немає',
	close: 'Закрити',
	// next 5 strings were supposed to be sinngle block of text, but due large size,
	// code erros they were splitted.
	authors_get_paid_when_people_like_you_upvote_their_post: 'В мережі Голос автори отримують винагороду, коли користувачі голосують за їх пости.',
	if_you_enjoyed_what_you_read_earn_amount: "Читачі, які проголосували, також отримують винагороду. Якщо вам сподобався цей пост Ви можете нагородити автора.",
	when_you: "Для цього",
	when_you_link_text: 'зареєструйтесь',
	and_vote_for_it: 'та проголосуйте за пост',
	// post_promo_text: "Автори отримують винагороду, коли користувачі голосують за їх пости<br />Люди, які проголосували,  також отримать винагороду. Якщо вам сподобалось те, що ви прочитали тут, заробіть{amount} в " + VESTING_TOKEN + "<br />. Для цього {link} і проголосуєте за пост.",
	read_only_mode: 'Через технічне обслуговування сервера ми працюємо в режимі читання. Вибачте за незручність.',
	membership_invitation_only: 'Стати користувачем Голоса зараз можливо тільки по запрошенню. Зверніться до ваших знайомих про запрошення.', // бажаючих зареєструватися ?
	submit_email_to_get_on_waiting_list: 'Додайте адресу вашої електронної пошти, щоб потрапити в список очікування',
	login: 'Увійти',
	logout: 'Вийти',
	show_less_low_value_posts: "Показати менше повідомлень низької вартості",
	show_more_low_value_posts: "Показати більше повідомлень низької вартості",
	select_topic: 'Вибрати топік',
	tags_and_topics: "Теги і топіки",
	filter: "Фільтр",
	show_more_topics: "Показати більше топікив",
	we_require_social_account: APP_NAME + ' спонсує кожен акаунт на суму близько {signup_bonus} в ' + VESTING_TOKEN + '; щоб запобігти зловживання, ми просимо нових користувачів реєструватися використовуючи соціальні мережі.',
	personal_info_will_be_private: 'Ваша персональна інформація буде залишатися',
	personal_info_will_be_private_link: 'приватною',
	continue_with_facebook: 'Продовжити з Facebook',
	continue_with_reddit: 'Продовжити з Reddit',
	continue_with_vk: 'Продовжити з Vk',
	requires_positive_karma: 'необхідна позитивна карма Reddit коментуваня',
	dont_have_facebook: 'Нема Facebook чи Reddit акаунта?',
	subscribe_to_get_sms_confirm: 'Підпишіться щоб отримати СМС коли підтвердження буде доступно',
	by_verifying_you_agree: 'Підтверджуючи ваш акаунт ви погоджуєтеся з умовами проекту ' + APP_NAME,
	by_verifying_you_agree_terms_and_conditions: 'умовами та угодами',
	terms_and_conditions: 'Умови та Угоди',
	// this is from top-right dropdown menu
	hot: 'Актуальне',
	trending: 'Популярне',
	payout_time: 'час виплати',
	active: 'Обговорення',
	responses: 'відповіді',
	popular: 'популярне',
	/* end dropdown menu */
	loading: 'Завантаження',
	cryptography_test_failed: 'Криптографічний тест провалений',
	unable_to_log_you_in: 'У нас не вийде авторизувати  вас в цьому браузері',
	// next 3 blocks will be used in conjunction
	/* this is how it will look like:
	'The latest versions of <a href="https://www.google.com/chrome/">Chrome</a> and <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> are well tested and known to work with steemit.com.' */
	the_latest_versions_of: 'Останні версії',
	and: 'і',
	are_well_tested_and_known_to_work_with: 'добре тестовані і працюють з ' + APP_URL + '.',
	account_creation_succes: 'Ваш акаунт успішно створений!',
	account_recovery_succes: 'Ваш акаунт успішно відновлено!',
	password_update_succes: 'Пароль для {accountName} був успішно оновлений',
	password_is_bound_to_your_accounts_owner_key: "Цей пароль прив'язаний до головного ключу акаунта і не може бути використаний для авторизації на сайті",
	however_you_can_use_it_to: "Проте його можна використовувати щоб",
	to_obtaion_a_more_secure_set_of_keys: "для отримання більш безпечного набору ключів",
	update_your_password: 'оновити свій пароль',
	enter_username: 'Введіть своє ім\'я користувача',
	password_or_wif: 'Пароль чи WIF',
	requires_auth_key: 'Ця операція вимагає ваш {authType} ключ (або використайте головний пароль)',
	keep_me_logged_in: 'Залишати мене авторизованим',
	// this are used mainly in "submit a story" form
	title: "Заголовок",
	write_your_story: 'Написати свою історію',
	editor: 'Редактор',
	reply: 'Відповісти',
	edit: 'Редагувати',
	delete: 'Видалити',
	cancel: 'Відміна',
	clear: 'Очистити',
	save: 'Зберегти',
	upvote_post: 'Проголосувати за пост',
	update_post: 'Оновити пост',
	markdown_is_supported: 'підтримується стилізація с Markdown',
	preview: 'Попередній перегляд',
	markdown_not_supported: 'Markdown тут не підтримується',
	welcome_to_the_blockchain: 'Ласкаво просимо в Blockchain!',
	your_voice_is_worth_something: 'Твій голос чогось вартий',
	learn_more: 'Дізнатися більше',
	get_INVEST_TOKEN_when_sign_up: 'Отримай {signupBonus} ' + VESTING_TOKEN + ' підписавшись сьогодні.',
	all_accounts_refunded: 'Всі втрати по відновленним акаунтам були повністью компенсовані',
	APP_URL_is_now_open_source: APP_URL + ' тепер Open Source',
	// this is mainly from ReplyEditor
	tag_your_story: 'Додай теги (до 5 штук), перший тег стане основною категорією.',
	select_a_tag: 'Вибрати тег',
	required: 'Обов\'язково',
	shorten_title: 'Скоротити заголовок',
	exceeds_maximum_length: 'Перевищує максимальну довжину ({maxKb}KB)',
	including_the_category: "(включаючи категорію '{rootCategory}')",
	use_limited_amount_of_tags: 'У вас {tagsLength} тегів, включаючи {includingCategory}. Будь ласка, використовуйте не більше 5 в пості і категорії.',
	// this is mainly used in CategorySelector
	maximum_tag_length_is_24_characters: 'Максимальна довжина категорії 24 знака',
	use_limitied_amount_of_categories: 'Будь ласка, використовуйте не більше {amount} категорій',
	use_only_lowercase_letters: 'Використовуйте тільки символи нижнього регістра',
	use_one_dash: 'Використовуйте тільки одне тире',
	use_spaces_to_separate_tags: 'Використовуйте пробіл щоб розділити теги',
	use_only_allowed_characters: 'Використовуйте тільки малі літери, цифри і одне тире',
	must_start_with_a_letter: 'Має починатися з літери',
	must_end_with_a_letter_or_number: 'Має закінчуватися з букви або номера',
	// tags page
	tag: 'Тег',
	replies: 'Відповіді',
	payouts: 'Виплати',
	need_password_or_key: 'Вам потрібен приватний пароль або ключ (не публічний ключ)',
	// BlocktradesDeposit
	change_deposit_address: 'Змінити адресу депозиту',
	get_deposit_address: 'Отримати адресу депозиту',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by', // NOTE this might be deleted in future
	send_amount_of_coins_to: 'Надіслати {value} {coinName} до',
	amount_is_in_form: 'Сума повинна бути в форматі 99999.999',
	insufficent_funds: 'Недостатньо коштів',
	update_estimate: 'Оновити оцінку',
	get_estimate: 'Отримати оцінку',
	memo: 'Замітка',
	must_include_memo: 'Необхідно увімкнути замітку',
	estimate_using: 'Підрахувати використовуючи',
	amount_to_send: 'Сума до відправки {estimateInputCoin}',
	deposit_using: 'Поповнити через', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: 'Передбачуваний ліміт {depositLimit}',
	internal_server_error: 'Внутрішня помилка сервера',
	enter_amount: 'Ввести кількість',
	processing: 'Обробляється',
	broadcasted: 'Транслюється',
	confirmed: 'Підтверджено',
	remove: 'Видалити',
	collapse_or_expand: "Згорнути/Розгорнути",
	reveal_comment: 'Показати коментар',
	are_you_sure: 'Ви впевнені?',
	// PostFull.jsx
	by: ' ', // тут спеціально нічого немає, приклад: "posted by 'Vitya'" > "додав 'Vitya'"
	in: 'у',
	share: 'Поділитися',
	in_reply_to: 'у відповідь на',
	replied_to: 'відповів', // теж що і 'by'
	transfer_amount_to_INVEST_TOKEN: "Перекласти {amount} у " + VESTING_TOKEN,
	transfer_amount_INVEST_TOKEN_to: "Переклад {amount} " + VESTING_TOKEN + " у",
	recieve_amount_INVEST_TOKEN_from: "Отримання {amount} " + VESTING_TOKEN + " від",
	transfer_amount_INVEST_TOKEN_from_to: "Передати{amount} " + VESTING_TOKEN + " від {from} до",
	transfer_amount_to: "Переклад {amount} на рахунок",
	recieve_amount_from: "Отримано {amount} від",
	transfer_amount_from: "Переклад {amount} з рахунку",
  transfer_amount_steem_power_to: "Переклад {amount} " + LIQUID_TICKER + " в Силу Голосу",
	stop_power_down: "Ослаблення Сили Голосу зупинено",
	start_power_down_of: "Ослаблення Сили Голосу розпочато з",
	curation_reward_of_INVEST_TOKEN_for: 'Кураторські винагороди {reward} ' + VESTING_TOKEN + ' за',
	author_reward_of_INVEST_TOKEN_for: 'Авторські винагороди {payout} і {reward} ' + VESTING_TOKEN + ' за',
	recieve_interest_of: 'Отримано відсотки в розмірі {interest}',
	// TODO find where this is used and write an example
	from: 'ві',
	to: 'до',
	account_not_found: 'Акаунт не знайдено',
	this_is_wrong_password: 'Це неправильний пароль',
	do_you_need_to: 'Вам потрібно',
	recover_your_account: 'відновити ваш аккаунт', // this probably will end with question mark
	reset_usernames_password: "Скинути пароль користувача {username}",
	this_will_update_usernames_authtype_key: 'Це оновить {username} {authType} ключ',

	the_rules_of_APP_NAME: "Перше правило мережі " + APP_NAME + ": не втрачайте свій пароль. <br /> Друге правило " + APP_NAME + ": <strong>Не</strong> втрачайте свій пароль. <br /> Третє правило " + APP_NAME + ": ми не можемо відновити ваш пароль. <br /> Четверте правило: якщо ви можете запам'ятати свій пароль, значить він не безпечний. <br /> П'яте правило: використовуйте тільки згенеровані випадковим чином паролі. <br /> Шосте правило: Нікому не кажіть свій пароль. <br /> Сьоме правило: Завжди надійно зберігайте свій пароль.",
	account_name: 'Ім\'я облікового запису',
	recover_password: 'Відновити акаунт',
	current_password: 'Поточний пароль',
	recent_password: 'Недавній пароль',
	generated_password: 'Згенерований пароль',
	recover_account: 'Відновити акаунт',
	new: 'Нове', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Зробіть резервну копію в менеджері паролів або текстовому файлі',
	click_to_generate_password: 'Натисніть щоб згенерувати пароль',
	re_enter_generate_password: 'Повторно введіть пароль',
	understand_that_APP_NAME_cannot_recover_password: 'Я розумію що ' + APP_NAME + ' не зможе відновити втрачений пароль',
	i_saved_password: 'Я надійно зберіг згенерований пароль',
	update_password: 'Оновити пароль',
	password_must_be_characters_or_more: 'Пароль повинен бути {amount} символів або більше',
	passwords_do_not_match: 'Паролі не співпадають',
	you_need_private_password_or_key_not_a_public_key: 'Вам потрібен приватний пароль або ключ (не публічний ключ)',
	account_updated: 'Акаунт оновлений',
	warning: 'увага',
	your_password_permissions_were_reduced: 'Ваш дозвіл  паролю був знижен',
	if_you_did_not_make_this_change: 'Якщо ви не робили цих змін, будь ласка',
	owhership_changed_on: 'Власність змінена на',
	deadline_for_recovery_is: 'Крайнім терміном для відновлення є',
	i_understand_dont_show_again: "Розумію, більше не показувати",
	ok: 'Ок', // Краще використовувати "добре" або "гаразд"?
	convert_to_INVEST_TOKEN: 'Перевести в ' + VESTING_TOKEN,
	DEBT_TOKEN_will_be_unavailable: 'Ця операція буде проходити через тиждень від справжнього моменту і її не можна скасувати. Ці ' + DEBT_TOKEN + ' миттєво стануть недоступні',
	amount: 'Кількість',
	convert: 'Конвертувати',
	invalid_amount: 'Неправильна кількість',
	insufficent_balance: 'Недостатній баланс',
	in_week_convert_DEBT_TOKEN_to_LIQUID_TOKEN: 'За тиждень перевести {amount} ' + DEBT_TOKEN + ' в ' + LIQUID_TOKEN,
	order_placed: 'Замовлення розміщенно', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Підписатися',
	unfollow: 'Відписатися',
	mute: 'Блокувати',
	unmute: 'Розблокувати',
	confirm_password: 'Підтвердити пароль',
	login_to_see_memo: 'увійти щоб побачити замітку',
	post: 'Пост', // places used: tooltip in MediumEditor
	unknown: 'Невідомий', // exp.: 'unknown error'
	account_name_is_not_available: 'Ім\'я облікового запису недоступно',
	type: 'Тип',
	price: 'Ціна',
	// Market.jsx
	last_price: 'Остання ціна',
	'24h_volume': 'Обсяг за 24 години',
	bid: 'Покупка',
	ask: 'Продаж',
	spread: 'Різниця',
	total: 'Разом',
	available: 'Доступно',
	lowest_ask: 'Краща ціна продажу',
	highest_bid: 'Краща ціна покупки',
	buy_orders: 'Замовлення на покупку',
	sell_orders: 'Замовлення на продаж',
	trade_history: 'Історія угод',
	open_orders: 'Відкриті угоди',
	sell_amount_for_atleast: 'Продати {amount_to_sell} за {min_to_receive} за ціною ({effectivePrice})',
	buy_atleast_amount_for: 'Купити {min_to_receive} за {amount_to_sell} ({effectivePrice})',
	higher: 'Дорожче', // context is about prices
	lower: 'Дешевше', // context is about prices
	total_DEBT_TOKEN_SHORT_CURRENCY_SIGN: "Сума " + DEBT_TOKEN_SHORT + ' (' + CURRENCY_SIGN + ')',
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'Недійсне',
	account_name_is_not_found: 'Ім\'я облікового запису не знайдено',
	unable_to_recover_account_not_change_ownership_recently: 'У нас не вийшло відновити цей акаунт, тому що він не змінював власника в недавні часи.',
	password_not_used_in_last_days: 'Цей пароль не використовувався в цьому акаунті за останні 30 днів.',
	request_already_submitted_contact_support: 'Ваш запит був відправлений, і ми працюємо над цим. Будь ласка, зв`яжіться з ' + SUPPORT_EMAIL + ' для отримання статусу вашого запиту.',
	recover_account_intro: "Іноді буває що ключ власника може бути скомпрометований. Відновлення вкраденого акаунта дає законному власнику 30 днів щоб повернути аккаунт з моменту зміни власного ключа шахраєм. Відновлення вкраденого акаунта в " + APP_URL + " можливо тільки якщо власник акаунта раніше вказав '" + APP_NAME + "' як довірена особа і погодився з Умовами Використання сайту " + APP_NAME + ".",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Будь ласка, увійдіть використовуючи Facebook або Reddit щоб підтвердити вашу особистість',
	login_with_social_media_to_verify_identity: 'Будь ласка, зайдіть за допомогою {show_social_login} щоб підтвердити вашу особистість',
	enter_email_toverify_identity: 'Нам потрібно підтвердити вашу особистість. Будь ласка вкажіть вашу електронну пошту нижче, щоб почати перевірку.',
	email: 'Електронна пошта',
	continue_with_email: "Продовжити",
	thanks_for_submitting_request_for_account_recovery: '<p>Дякуємо Вам за відправку запиту на відновлення акаунта використовуючи засновану на блокчейне мультифакторна аутентифікацію ' + APP_NAME + '’a.</p> <p>Ми відповімо Вам якнайшвидше, проте, будь ласка, очікуйте що може бути деяка затримка через великий обсяг листів.</p> <p>Будь ласка, будьте готові підтвердити свою особистість.</p>',
	recovering_account: 'Відновлюємо аккаунт',
	checking_account_owner: 'Перевіряємо власника акаунта',
	sending_recovery_request: 'Відправляємо запит відновлення',
	cant_confirm_account_ownership: 'Ми не можемо підтвердити володіння акаунтом. Перевірте ваш пароль.',
	account_recovery_request_not_confirmed: "Запит відновлення акаунта ще не підтверджений, будь ласка перевірте пізніше. Дякуємо за ваше терпіння.",
	vote: 'Проголосувати', // context: to vote? (title attribute on voting button)
	witness: 'Делегати',
	top_witnesses: 'Топ делегатів',
	// user's navigational menu
	feed: 'Стрічка',
	wallet: 'Гаманець',
	blog: 'Блог',
	change_password: 'Змінити пароль',
	// UserProfile
	unknown_account: 'Невідомий акаунт',
	user_hasnt_made_any_posts_yet: "Схоже що {name} ще не написав постів!",
	user_hasnt_started_bloggin_yet: "Схоже що {name} ще не завів блог!",
	user_hasnt_followed_anything_yet: "Схоже що {name} ще ні на кого не підписаний !",
	user_hasnt_had_any_replies_yet: "{name} ще не отримав відповідей",
	users_blog: "блог {name}",
	users_posts: "пости {name}",
	users_wallet: "гаманець {name}",
	users_curation_rewards: "Кураторські винагороди {name}",
	users_author_rewards: "Авторські винагороди {name}",
	users_permissions: "Дозволи {name}",
	recent_replies_to_users_posts: "Недавні відповіді до постів користувача {name}",
	print: 'Роздрукувати',
	curation_rewards: "Кураторські винагороди",
	author_rewards: 'Авторські винагороди',
	feeds: 'Стрічка',
	rewards: 'Нагороди',
	permissions: 'Дозволи',
	password: 'Пароль',
	posts: 'Пости',
	// PLURALS
	// see locales/README.md on how to properly use them
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 постів}
		one {# пост}
		few {# поста}
		many {# постів}
	}`,
	follower_count: `{followerCount, plural,
		zero {0 підписників}
		one {# підписник}
		few {# підписника}
		many {# підписників}
	}`,
	followed_count: `{followingCount, plural,
		zero {0 підписок}
		one {# підписка}
		few {# підписки}
		many {# підписок}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 голосів}
		one {# голос}
		few {# голоса}
		many {# голосів}
	}`,
	response_count: `{responseCount, plural,
		zero {0 відповідей}
		one {# відповідь}
		few {# відповіді}
		many {# відповідей}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 відповідей}
		one {# відповідь}
		few {# відповіді}
		many {# відповідей}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "Це кількість очок репутації користувача {name}.\n\nКількість очок підраховується на основі історії отриманих голосів і на його голосах проти контенту.",
	newer: 'Новіше',
	older: 'Старіше',
	author_rewards_last_24_hours: 'Авторські винагороди за останні 24 години',
	daily_average_author_rewards: 'Середньодобові авторські винагороди',
	author_rewards_history: 'Історія авторських нагород',
	balance: 'Баланс',
	balances: 'Баланси',
	estimate_account_value: 'Оцінка вартості акаунта',
	next_power_down_is_scheduled_to_happen_at: 'Наступне зниження Сили Голосу заплановано на',
	transfers_are_temporary_disabled: 'Переклади тимчасово відключені',
	history: 'Історія',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Кураторські нагороди за останні 24 години',
	daily_average_curation_rewards: 'Середньодобові кураторські нагороди',
	estimated_curation_rewards_last_week: "Оціночні кураторські нагороди за останній тиждень",
	curation_rewards_last_week: "Кураторські нагороди за останній тиждень",
	curation_rewards_history: 'Історія кураторських нагород',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Відобразити коментарі з низьким рейтингом',
	hide: 'Приховати',
	show: 'Показати',
	sort_order: 'Порядок сортування',
	comments_were_hidden_due_to_low_ratings: 'Коментарі були закриті через низький рейтинг',
	we_will_be_unable_to_create_account_with_this_browser: 'У нас не виходить створити акаунт використовуючи цей браузер',
	you_need_to_logout_before_creating_account: 'Вам потрібно {logoutLink} перш ніж ви можете створити інший акаунт',
	APP_NAME_can_only_register_one_account_per_verified_user: 'Будь ласка, майте на увазі що ' + APP_NAME + ' може реєструвати тільки один акаунт для кожного підтвердженого користувача',
	username: 'Ім\'я користувача',
	couldnt_create_account_server_returned_error: "Не вийшло створити акаунт. Сервер повернув цю помилку",
	form_requires_javascript_to_be_enabled: 'Ця форма вимагає активований в браузері javascript',
	our_records_indicate_you_already_have_account: 'Наші записи показують що у вас вже є ' + APP_NAME + ' акаунт',
	// TODO
	to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user: 'Щоб запобігти зловживанню (кожен зареєстрований акаунт варто{amount} в ' + LIQUID_TOKEN + ') ' + APP_NAME + ' може реєструвати тільки один акаунт для кожного підтвердженого користувача.',
	// next 3 blocks are meant to be used together
	you_can_either: 'Ви можете або', // context 'you can either login'
	to_your_existing_account_or: 'в ваш існуючий акаунт або', // context: 'to your existing account or send us email'
	if_you_need_a_new_account: 'якщо вам потрібен новий акаунт',
	send_us_email: 'надішліть нам електронну пошту',
	connection_lost_reconnecting: 'Зв\'язок втрачений, перепідключитися',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Перестати бачити контент від цього користувача',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Голос проти може зняти винагороди і зробити пост менш видимим. Голосування проти повинно ґрунтуватися на',
	fraud_or_plagiarism: 'Шахрайство або плагіат',
	hate_speech_or_internet_trolling: 'Розпалювання ненависті або інтернет тролінг',
	intentional_miss_categorized_content_or_spam: 'Навмисна неправильна категоризація контенту або спам',
	downvote: 'голосувати проти',
	pending_payout: 'Очікувана виплата',
	past_payouts: 'Минулі виплати',
	more: 'більше',
	remove_vote: 'Прибрати голос',
	upvote: 'Голосувати за',
	we_will_reset_curation_rewards_for_this_post: 'скине ваші кураторські винагороди за цей пост',
	removing_your_vote: 'Видалення голосу',
	changing_to_an_upvote: 'Зміна на голос за',
	changing_to_a_downvote: 'Зміна на голос проти',
	confirm_flag: 'Підтвердити голос проти',
	date_created: 'Дата створення',
	search: 'Пошук',
	begin_recovery: 'Почати відновлення',
	post_as: 'Запостить як', // 'Post as Misha'
	action: 'Дія',
	APP_NAME_app_center: 'Центр додатків ' + APP_NAME,
	witness_thread: 'пост делегата',
	you_have_votes_remaining: 'У вас залишилося {votesCount} голосів',
	you_can_vote_for_maximum_of_witnesses: 'Ви можете голосувати максимум за 30 делегатів',
	information: 'Інформація',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'Якщо ви хочете проголосувати за делегата поза top 50, введіть ім\'я облікового запису нижче',
	view_the_direct_parent: 'Перегляд прямого батька',
	you_are_viewing_single_comments_thread_from: 'Ви читаєте одну нитку коментарів від',
	view_the_full_context: 'Показати повний контекст',
	this_is_a_price_feed_conversion: 'Це котування ціни. Тиждень відстрочки необхідна щоб запобігти зловживанню від гри на середньої цінової катировки.',
	your_existing_DEBT_TOKEN_are_liquid_and_transferable: 'Ваші існуючі ' + DEBT_TOKEN + ' ліквідні і переміщувані. Можливо, ви хочете торгувати' + DEBT_TOKEN + ' безпосередньо на цьому сайті в розділі {link} або перевести на зовнішній ринок.',
	buy_or_sell: 'Купити або Продати',
	trending_30_day: 'Популярне (30 дней)',
	promoted: 'Прогресивне',
	comments: 'Коментарі',
	topics: 'Топіки',
	this_password_is_bound_to_your_accounts_private_key: 'Цей пароль прив\'язаний до активного ключу вашого облікового запису і не може бути використаний для входу на цю сторінку. Ви можете використовувати його для входу на інші більш захищені сторінки як "гаманець" або "маркет".',
	potential_payout: 'Потенційна виплата',
	boost_payments: 'Платіж за просування',
	authors: 'Автори',
	curators: 'Куратори',
	date: 'Дата',
	no_responses_yet_click_to_respond: 'Відповідей поки немає. Натисніть щоб відповісти.',
	click_to_respond: 'Натисніть щоб відповісти',
	new_password: 'Новий пароль',
	paste_a_youtube_or_vimeo_and_press_enter: 'Вставте YouTube или Vimeo посилання та натисніть Enter',
	there_was_an_error_uploading_your_image: 'Виникла помилка під час завантаження зображення',
	raw_html: 'HTML код',
	please_remove_following_html_elements: 'Будь ласка видаліть ці HTML елементи з вашого поста:',
	reputation: "Репутація",
	remember_voting_and_posting_key: "Запам'ятати голос і постинг ключ",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Входити автоматично?',
	yes: 'Так',
	no: 'Ні',
	hide_private_key: 'Приховати приватний ключ',
	show_private_key: 'Показати приватний ключ',
	login_to_show: 'Увійти щоб показати',
	APP_NAME_cannot_recover_passwords_keep_this_page_in_a_secure_location: APP_NAME + ' не може відновити паролі. Збережіть цю сторінку в безпечному місці, наприклад, в вогнестійкому сейфі або в депозитарному сховищі.',
	APP_NAME_password_backup: APP_NAME + ' резервне копіювання пароля',
	APP_NAME_password_backup_required: APP_NAME + ' резервне копіювання пароля (обов\'язково)',
	after_printing_write_down_your_user_name: 'Після друку напишіть ваше ім\'я користувача',
	public: 'Публічне',
	private: 'Приватне',
	public_something_key: 'Публічний {key} ключ',
	private_something_key: 'Приватний {key} ключ',
	// UserProfile > Permissions
	posting_key_is_required_it_should_be_different: 'Постинг ключ використовується для постінгу і голосування. Він повинен відрізнятися від активного і ключа власника.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'Активний ключ використовується для переказів і розміщення замовлень на внутрішньому ринку.',
	the_owner_key_is_required_to_change_other_keys: 'Ключ власника це головний ключ до всього акаунта, він необхідний для зміни інших ключів.',
	the_private_key_or_password_should_be_kept_offline: 'Приватний ключ або пароль повинен зберігатися в офлайні так швидко наскільки можливо.',
	the_memo_key_is_used_to_create_and_read_memos: 'Ключ заміток використовується для створення та читання заміток.',
	previous: 'Попередній',
	next: 'Наступний',
	browse: 'Подивитися',
	not_valid_email: 'Недійсна адреса',
	thank_you_for_being_an_early_visitor_to_APP_NAME: 'Дякуємо вам за те що є раннім відвідувачем ' + APP_NAME + '. Ми зв\'яжемося з вами при першій же можливості.',
	estimated_author_rewards_last_week: "Оціночні авторські винагороди за минулий тиждень",
	author_rewards_last_week: "Оціночні авторські винагороди за минулий тиждень",
	confirm: 'Підтвердити',
	asset: 'Актив',
	this_memo_is_private: 'Ця замітка є приватною',
	this_memo_is_public: 'Ця замітка є публічною',
	power_up: 'Посилити силу голосу',
	power_down: 'Зменшити силу голосу',
	cancel_power_down: 'Скасувати зниження сили голосу',
	transfer: 'Передати',
	deposit: 'Купити',
	basic: 'Базовий',
	advanced: 'Високий рівень',
	convert_to_LIQUID_TOKEN: 'Перевести в ' + LIQUID_TOKEN,
	transfer_to_account: 'Передати користувачу',
	buy_LIQUID_TOKEN_or_INVEST_TOKEN: 'Купити ' + LIQUID_TOKEN + ' чи ' + VESTING_TOKEN,
	version: 'Версія',
	about_APP_NAME: 'О ' + APP_NAME,
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: APP_NAME + ' це соціальна медіа платформа в якій<strong>всі</strong>&nbsp;отримують <strong>гроші</strong> за створення і курирування контенту',
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid: APP_NAME + ' це соціальна медіа платформа в якій кожен заробляє за створення і курирування контенту. Він використовує надійну систему цифрових очок під назвою' + LIQUID_TOKEN + ', який підтримує реальну цінність для цифрових нагород через виявлення ринкової ціни і ліквідності.',
	learn_more_at_LANDING_PAGE_URL: 'Дізнатись більше в ' + LANDING_PAGE_URL,
	resources: 'Ресурси',
	join_our_slack: 'Приєднуйтесь до нашого Slack',
	APP_NAME_support: APP_NAME + ' підтримка',
	please_email_questions_to: 'Будь ласка, надішліть ваші запитання на електронну пошту',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Вибачте, у вашого Reddit акаунта недостатньо Reddit карми щоб мати можливість безкоштовної реєстрації. Будь ласка, додайте вашу електронну пошту щоб записатися в лист очікування",
	register_with_facebook: 'Реєстрація з Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Або натисніть кнопку, щоб зареєструватися з Facebook',
	trending_24_hour: 'популярне (24 години)',
	home: 'Стрічка',
	'24_hour': '24 години',
	'30_day': '30 днів',
	flag: "Голосувати проти",
	promote: 'Просунути',
	// Tips.js
	tradeable_tokens_that_may_be_transferred_anywhere_at_anytime: 'Переміщувані цифрові токени, які можуть бути передані куди завгодно в будь-який момент.',
	LIQUID_TOKEN_can_be_converted_to_INVEST_TOKEN_in_a_process_called_powering_up: LIQUID_TOKEN + ' може бути конвертований в ' + VESTING_TOKEN + ', цей процес називається "посилення голосу".',
	tokens_worth_about_AMOUNT_of_LIQUID_TOKEN: 'Переміщувані цифрові токени, ціна яких завжди дорівнює ~1 мг золота в ' + LIQUID_TOKEN + '.',
	influence_tokens_which_earn_more_power_by_holding_long_term: 'Непереміщуваними цифрові токени, їх кількість збільшується при довгостроковому зберіганні.',
	the_more_you_hold_the_more_you_influence_post_rewards: 'Чим їх більше, тим сильніше ви впливаєте на винагороди за пост і тим більше заробляєте за голосування.',
	the_estimated_value_is_based_on_a_7_day_average_value_of_LIQUID_TOKEN_in_currency: 'Оціночна вартість розраховується з 7-ми денної середньої вартості ' + LIQUID_TOKEN + '.',
	INVEST_TOKEN_is_non_transferrable_and_will_require_2_years_and_104_payments_to_convert_back_to_LIQUID_TOKEN: VESTING_TOKEN + ' не можна передавати і буде потрібно 2 роки і 104 виплати щоб перевести назад в ' + LIQUID_TOKEN + '.',
	// TODO
	converted_INVEST_TOKEN_can_be_sent_to_yourself_but_can_not_transfer_again: 'Конвертированная ' + VESTING_TOKEN + ' може бути відправлена собі або комусь  ще, але не може бути передана знову без конвертації назад в ' + LIQUID_TOKEN + '.',
	profile: 'Профіль',
	send_to_account: 'Надіслати акаунту',
	confirm_email: 'Підтвердити електронну пошту',
	authenticate_for_this_transaction: 'Авторизуйтесь для цієї транзакції',
	login_to_your_APP_NAME_account: 'Зайдіть в ваш ' + APP_NAME + ' акаунт',
	// UserProfile > Permissions
	posting: 'Постинг',
	owner: 'Власник',
	active_or_owner: 'активний або власника',
	sign: 'Увійти',
	dismiss: 'Приховати',
	// next 3 strings are used conditionally together
	show_more: 'Показати більше',
	show_less: 'Показати менше',
	value_posts: 'повідомлень низької вартості',
	// PormotePost.jsx
	leave_this_unchecked_to_receive_half_your_reward: 'не намагайтеся покинути Омськ',
	promote_post: 'Просунути пост',
	spend_your_DEBT_TOKEN_to_advertise_this_post: 'Використовуйте ваші ' + DEBT_TOKEN + ' щоб прорекламувати цей пост  в секції  просуваємого контенту',
	you_successdully_promoted_this_post: 'Ви успішно просунули цей пост',
	pay_me_100_in_INVEST_TOKEN: 'Заплатіть мені 100% в ' + VESTING_TOKEN,
	requires_5_or_more_reddit_comment_karma: 'необхідно 5 або більше Reddit карми коментування',
	this_post_was_hidden_due_to_low_ratings: 'Цей пост був закритий через низький рейтинг',
	reblogged_by: 'Поділився',
	reblog: 'Поділитися',
	updated: 'Оновлене',
	created: 'Нове',
	settings: 'Налаштування',
	incorrect_password: 'Неправильний пароль',
	username_does_not_exist: 'Такого імені не існує',
	// string with a '.'(dot) is returned from the server, so you should add it too, despite rules
	account_name_should_be_longer: 'Ім\'я облікового запису має бути довшим.',
	account_name_should_be_shorter: 'Ім\'я облікового запису має бути коротше.',
	account_name_should_start_with_a_letter: 'Ім\'я облікового запису має починатися з літери.',
	account_name_should_have_only_letters_digits_or_dashes: 'Имя акаунта должно должно состоять только из букв, цифр или дефисов.',
	choose_language: 'Виберіть мову',
	choose_currency: 'Виберіть валюту',
	crowdsale: 'Краудсейл',
	followers: 'Подписчики',
	// errors
	cannot_increase_reward_of_post_within_the_last_minute_before_payout: 'Нагорода за пост не може бути збільшена після закінчення 24 годин з моменту публікації',
	vote_currently_exists_user_must_be_indicate_a_to_reject_witness: 'Голос вже існує, користувач повинен позначити бажання прибрати делегата',
	only_one_APP_NAME_account_allowed_per_ip_address_every_10_minutes: 'Тільки один Голос аккаунт дозволений з одного IP адресу кожні десять хвилин ',
	// enter_confirm_email.jsx
	thank_you_for_providing_your_email_address: 'Дякуємо вам за надання вашої електронної пошти ',
	to_continue_please_click_on_the_link_in_the_email_weve_sent_you: 'Для продовження, натисніть на заслання в листі, яке ми вам надіслали',
	user_not_found: 'користувач не знайдений',
	please_provide_your_email_address_to_continue_the_registration_process: 'Будь ласка, вкажіть адресу вашої електронної пошти, щоб продовжити процес реєстрації',
	this_information_allows_steemit_to_assist_with_account_recovery_in_case_your_account_is_ever_compormised: 'Ця інформація дозволяє Голосу допомогти вам відновити акаунт, якщо він коли-небудь буде вкрадений ',
	email_address_cannot_be_changed_at_this_moment_sorry_for_inconvenience: 'Адреса електронної пошти на данний момент не може бути змінена, вибачте за незручності',
	continue: 'продовжити',
	email_address: 'Адреса електронної пошти',
	please_prove_an_email_address: 'Будь ласка вкажіть адресу електронної пошти',
	failed_captcha_verification_please_try_again: 'Помилка перевірки капчі, спробуйте ще раз',
	re_send_email: 'Повторна відправка електронної пошти',
	email_confirmation: 'Підтвердження електронної пошти',
	add_image_url: 'Додайте URL вашого зображення',
	like: 'Подобатися',
}
