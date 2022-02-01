import React from 'react';
import { Link } from 'react-router-dom';


const Setting = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main card-stack main--settings-page">
            <div className="card-stack">
            <div className="card__title-section">
                <h2 className="card__title">Appearance</h2>
            </div>
            <section className="card" id="appearance">
                <div className="card__first-pane">
                <div className="card__body card__body--no-title card__body--list">
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Homepage</p>
                        <p className="settings__row--subtitle">Tailor your experience.</p>
                    </div>
                    <div className="settings__row--value">
                        <fieldset-section className="">
                        <select id="homepage_select">
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                            <option value="es">Español</option>
                            <option value="de">Deutsch</option>
                            <option value="zh">中文</option>
                            <option value="ru">Русский</option>
                            <option value="pt-BR">Português (Brasil)</option>
                        </select>
                        </fieldset-section>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Language</p>
                        <p className="settings__row--subtitle">Multi-language support is brand new and incomplete. Switching your language may have unintended consequences, like glossolalia.</p>
                    </div>
                    <div className="settings__row--value">
                        <fieldset-section className="">
                        <select id="language_select">
                            <option value="af">Afrikaans</option>
                            <option value="id">Bahasa Indonesia</option>
                            <option value="ms">Bahasa Melayu</option>
                            <option value="jv">Basa Jawa</option>
                            <option value="ca">Català</option>
                            <option value="da">Dansk</option>
                            <option value="de">Deutsch</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="hr">Hrvatski</option>
                            <option value="it">Italiano</option>
                            <option value="nl">Nederlands</option>
                            <option value="no">Norsk (bokmål / riksmål)</option>
                            <option value="pl">Polski</option>
                            <option value="pt">Português</option>
                            <option value="pt-BR">Português (Brasil)</option>
                            <option value="ro">Română</option>
                            <option value="sk">Slovenčina</option>
                            <option value="fi">Suomi</option>
                            <option value="sv">Svenska</option>
                            <option value="tl">Tagalog</option>
                            <option value="vi">Tiếng Việt</option>
                            <option value="tr">Türkçe</option>
                            <option value="cs">Česky</option>
                            <option value="ru">Русский</option>
                            <option value="sr">Српски</option>
                            <option value="uk">Українська</option>
                            <option value="ur">اردو</option>
                            <option value="ar">العربية</option>
                            <option value="mr">मराठी</option>
                            <option value="hi">हिन्दी</option>
                            <option value="pa">ਪੰਜਾਬੀ / पंजाबी / پنجابي</option>
                            <option value="gu">ગુજરાતી</option>
                            <option value="kn">ಕನ್ನಡ</option>
                            <option value="ml">മലയാളം</option>
                            <option value="th">ไทย / Phasa Thai</option>
                            <option value="zh-Hans">中文 (简体)</option>
                            <option value="zh-Hant">中文 (繁體)</option>
                            <option value="ja">日本語</option>
                        </select>
                        </fieldset-section>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Search only in the selected language by default</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="search-in-language" type="checkbox"/>
                        <label for="search-in-language"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Theme</p>
                    </div>
                    <div className="settings__row--value">
                        <fieldset-section>
                        <fieldset-section className="">
                            <select id="theme_select">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            </select>
                        </fieldset-section>
                        </fieldset-section>
                        <fieldset-section>
                        <div className="checkbox">
                            <input id="automatic_dark_mode" type="checkbox"/>
                            <label for="automatic_dark_mode">Automatic dark mode</label>
                        </div>
                        </fieldset-section>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>24-hour clock</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="clock24h" type="checkbox"/>
                        <label for="clock24h"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Hide wallet balance in header</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="hide_balance" type="checkbox"/>
                        <label for="hide_balance"></label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="card__title-section">
                <h2 className="card__title">Account</h2>
            </div>
            <section className="card" id="account">
                <div className="card__first-pane">
                <div className="card__body card__body--no-title card__body--list">
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Password</p>
                    </div>
                    <div className="settings__row--value">
                        <Link className="button button--inverse" aria-label="Manage" to="/$/settings/update_password">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronRight" aria-hidden="true">
                            <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Manage</span>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Bank Accounts</p>
                        <p className="settings__row--subtitle">Connect a bank account to receive tips and compensation in your local currency.</p>
                    </div>
                    <div className="settings__row--value">
                        <Link className="button button--inverse" aria-label="Manage" to="/$/settings/tip_account">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronRight" aria-hidden="true">
                            <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Manage</span>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Payment Methods</p>
                        <p className="settings__row--subtitle">Add a credit card to tip creators in their local currency.</p>
                    </div>
                    <div className="settings__row--value">
                        <Link className="button button--inverse" aria-label="Manage" to="/$/settings/card">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronRight" aria-hidden="true">
                            <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Manage</span>
                        </span>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="card__title-section">
                <h2 className="card__title">Content settings</h2>
            </div>
            <section className="card" id="content">
                <div className="card__first-pane">
                <div className="card__body card__body--no-title card__body--list">
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Floating video player</p>
                        <p className="settings__row--subtitle">Keep content playing in the corner when navigating to a different page.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="floating_player" type="checkbox" checked=""/>
                        <label for="floating_player"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Autoplay media files</p>
                        <p className="settings__row--subtitle">Autoplay video and audio files when navigating to a file.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="autoplay media" type="checkbox" checked=""/>
                        <label for="autoplay media"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Autoplay next recommended content</p>
                        <p className="settings__row--subtitle">Autoplay the next related item when a file (video or audio) finishes playing.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="autoplay next" type="checkbox" checked=""/>
                        <label for="autoplay next"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Hide reposts</p>
                        <p className="settings__row--subtitle">You will not see reposts by people you follow or receive email notifying about them.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="hide_reposts" type="checkbox"/>
                        <label for="hide_reposts"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Hide Scheduled Livestreams</p>
                        <p className="settings__row--subtitle">You will not see scheduled livestreams by people you follow on the home or following page.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="hide_scheduled_livestreams" type="checkbox"/>
                        <label for="hide_scheduled_livestreams"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Notifications</p>
                    </div>
                    <div className="settings__row--value">
                        <Link className="button button--inverse" aria-label="Manage" to="/$/settings/notifications">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronRight" aria-hidden="true">
                            <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Manage</span>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Blocked and muted channels</p>
                    </div>
                    <div className="settings__row--value">
                        <Link className="button button--inverse" aria-label="Manage" to="/$/settings/block_and_mute">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronRight" aria-hidden="true">
                            <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Manage</span>
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Publish confirmation</p>
                        <p className="settings__row--subtitle">Show preview and confirmation dialog before publishing content.</p>
                    </div>
                    <div className="settings__row--value">
                        <div className="checkbox">
                        <input id="sync_toggle" type="checkbox" checked=""/>
                        <label for="sync_toggle"></label>
                        </div>
                    </div>
                    </div>
                    <div className="card__main-actions settings__row">
                    <div className="settings__row--title">
                        <p>Purchase and tip confirmations</p>
                    </div>
                    <div className="settings__row--value settings__row--value--multirow">
                        <fieldset-section className="radio">
                        <input id="confirm_all_purchases" type="radio" checked=""/>
                        <label for="confirm_all_purchases">Always confirm before purchasing content or tipping</label>
                        </fieldset-section>
                        <fieldset-section className="radio">
                        <input id="instant_purchases" type="radio"/>
                        <label for="instant_purchases">Only confirm purchases or tips over a certain amount</label>
                        </fieldset-section>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="card__title-section">
                <h2 className="card__title">System</h2>
            </div>
            <section className="card" id="system">
                <div className="card__first-pane">
                <div className="card__body card__body--no-title card__body--list">
                    <div className="card__main-actions settings__row section__actions--between">
                    <div className="settings__row--title">
                        <p>Clear application cache</p>
                        <p className="settings__row--subtitle">This might fix issues that you are having. Your wallet will not be affected.</p>
                    </div>
                    <div className="settings__row--value">
                        <button aria-label="Clear Cache" className="button button--secondary" type="button">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--AlertCircle" aria-hidden="true">
                            <g>
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12" y2="16"></line>
                            </g>
                            </svg>
                            <span dir="auto" className="button__label">Clear Cache</span>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </main>
        </div>
      </>
  )
};

export default Setting;
