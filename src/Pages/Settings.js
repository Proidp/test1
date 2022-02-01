import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Setting from '../Components/Setting';


const Settings = () => {
    const [switchToggled, setSwitchToggled] = useState(true);
    const ToggleSwitch = () => {
          switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    }
  return (
      <>
      <div className='main-wrapper'>
        <header className="header">
            <div className="card__actions--between header__contents">
                <div className="header__menu--left">
                <button aria-label="Save" className="button button--link" type="button">
                    <span className="button__content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronLeft" aria-hidden="true">
                        <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                        </g>
                    </svg>
                    <span dir="auto" className="button__label">Save</span>
                    </span>
                </button>
                </div>
                <h1 className="header__authTitle">Settings</h1>
                <div className="header__menu--right">
                <div aria-label="Your Wallet" className="">
                    <Link className="button button--no-style button--file-action header__navigationItem--balance" aria-label="Your Wallet" to="/wallet">
                    <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC" aria-hidden="true">
                        <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear4631a073-7167-49cb-b699-5b58371f1434)"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear4631a073-7167-49cb-b699-5b58371f1434)"></path>
                        <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear4631a073-7167-49cb-b699-5b58371f1434)"></path>
                        <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear4631a073-7167-49cb-b699-5b58371f1434)"></path>
                        <defs>
                            <linearGradient id="paint0_linear4631a073-7167-49cb-b699-5b58371f1434" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2464" stop-color="#E700FF"></stop>
                            <stop offset="0.3166" stop-color="#E804F9"></stop>
                            <stop offset="0.4108" stop-color="#E90EE8"></stop>
                            <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                            <stop offset="0.637" stop-color="#F037A5"></stop>
                            <stop offset="0.7635" stop-color="#F45672"></stop>
                            <stop offset="0.8949" stop-color="#FA7A36"></stop>
                            <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear4631a073-7167-49cb-b699-5b58371f1434" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                            <stop offset="0.4233" stop-color="#FABD09"></stop>
                            <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear4631a073-7167-49cb-b699-5b58371f1434" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear4631a073-7167-49cb-b699-5b58371f1434" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                        <span dir="auto" className="button__label">Your Wallet</span>
                    </span>
                    </Link>
                </div>
                <div className="header__buttons" style={{position: "relaytive"}}>
                    <button onClick={ToggleSwitch} aria-label="Your account" title="Your account" className="header__navigationItem header__navigationItem--icon" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--87">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--User" aria-hidden="true">
                        <g>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    </button>
                    {/* Dropdown menu start */}
                    <div className={switchToggled ? "dropdown-submenu" : "dropdown-show"} data-reach-popover="" data-reach-menu="" data-reach-menu-popover="" style={{position: "absolute", right: "0", top: "58px"}}>
                        <div className="menu__list--header" data-reach-menu-list="" data-reach-menu-items="" aria-labelledby="menu-button--87" role="menu" tabindex="-1">
                            <div role="none" tabindex="-1">
                            <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Uploads" role="menuitem" tabindex="-1" to="/uploads">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--UploadCloud" aria-hidden="true">
                                <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <path d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18" stroke-linejoin="round"></path>
                                    <path d="M12, 13 L12, 21"></path>
                                    <polyline stroke-linejoin="round" transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)" points="15 11 12 14 9 11"></polyline>
                                </g>
                                </svg>Uploads </Link>
                            </div>
                            <div role="none" tabindex="-1">
                            <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Channels" role="menuitem" tabindex="-1" to="/channels">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--AtSign" aria-hidden="true">
                                <g>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                </g>
                                </svg>Channels </Link>
                            </div>
                            <div role="none" tabindex="-1">
                            <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Creator Analytics" role="menuitem" tabindex="-1" to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--BarChart2" aria-hidden="true">
                                <g>
                                    <path d="M 8.4312337,1.6285136 V 9.4232264 L 2.2367584,22.725564 H 22.030217 L 15.773797,9.2902071 V 1.6285136 Z"></path>
                                    <path d="M 4.2426407,18.166369 H 12.197591"></path>
                                    <path d="m 6.363961,14.188893 h 5.701048"></path>
                                </g>
                                </svg>Creator Analytics </Link>
                            </div>
                            <div role="none" tabindex="-1">
                            <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Rewards" role="menuitem" tabindex="-1" to="/rewards">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Award" aria-hidden="true">
                                <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </g>
                                </svg>Rewards </Link>
                            </div>
                            <div role="none" tabindex="-1">
                            <Link className="menu__link" data-reach-menu-link="" data-reach-menu-item="" data-valuetext="Invites" role="menuitem" tabindex="-1" to="/invite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Users" aria-hidden="true">
                                <g>
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </g>
                                </svg>Invites </Link>
                            </div>
                            <div data-reach-menu-item="" data-valuetext="Sign Outcenid49740@mxclip.com" role="menuitem" tabindex="-1">
                            <div className="menu__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--SignOut" aria-hidden="true">
                                <g>
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </g>
                                </svg>Sign Out
                            </div>
                            <span className="menu__link-help">cenid49740@mxclip.com</span>
                            </div>
                        </div>
                        </div>
                    {/* Dropdown menu end */}
                </div>
                </div>
            </div>
        </header>
        <div className='main-wrapper__inner'>
            <div className="navigation__wrapper">
            <nav aria-label="Sidebar" className="navigation">
                <div>
                    <ul className="navigation-links">
                        <li>
                        <button title="Appearance" aria-label="Appearance" className="button button--no-style navigation-link" type="button" section="appearance">
                            <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Appearance" aria-hidden="true">
                                <g>
                                <path d="M16.022,15.624c.3,3.856,6.014,1.2,5.562,2.54-2.525,7.481-12.648,5.685-16.966,1.165A10.9,10.9,0,0,1,4.64,4.04C8.868-.188,16.032-.495,19.928,4.018,27.56,12.858,15.758,12.183,16.022,15.624Z"></path>
                                <path d="M5.670 13.309 A1.520 1.520 0 1 0 8.710 13.309 A1.520 1.520 0 1 0 5.670 13.309 Z"></path>
                                <path d="M9.430 18.144 A1.520 1.520 0 1 0 12.470 18.144 A1.520 1.520 0 1 0 9.430 18.144 Z"></path>
                                <path d="M13.066 5.912 A1.520 1.520 0 1 0 16.106 5.912 A1.520 1.520 0 1 0 13.066 5.912 Z"></path>
                                <path d="M6.620 7.524 A1.520 1.520 0 1 0 9.660 7.524 A1.520 1.520 0 1 0 6.620 7.524 Z"></path>
                                </g>
                            </svg>
                            <span dir="auto" className="button__label">Appearance</span>
                            </span>
                        </button>
                        </li>
                        <li>
                        <button title="Account" aria-label="Account" className="button button--no-style navigation-link" type="button" section="account">
                            <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--User" aria-hidden="true">
                                <g>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <span dir="auto" className="button__label">Account</span>
                            </span>
                        </button>
                        </li>
                        <li>
                        <button title="Content settings" aria-label="Content settings" className="button button--no-style navigation-link" type="button" section="content">
                            <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Content" aria-hidden="true">
                                <g>
                                <path d="M15.750 16.500 A1.500 1.500 0 1 0 18.750 16.500 A1.500 1.500 0 1 0 15.750 16.500 Z"></path>
                                <path d="M18.524,10.7l.442,1.453a.994.994,0,0,0,1.174.681l1.472-.341a1.339,1.339,0,0,1,1.275,2.218l-1.031,1.111a1,1,0,0,0,0,1.362l1.031,1.111a1.339,1.339,0,0,1-1.275,2.218l-1.472-.341a.994.994,0,0,0-1.174.681L18.524,22.3a1.33,1.33,0,0,1-2.548,0l-.442-1.453a.994.994,0,0,0-1.174-.681l-1.472.341a1.339,1.339,0,0,1-1.275-2.218l1.031-1.111a1,1,0,0,0,0-1.362l-1.031-1.111a1.339,1.339,0,0,1,1.275-2.218l1.472.341a.994.994,0,0,0,1.174-.681l.442-1.453A1.33,1.33,0,0,1,18.524,10.7Z"></path>
                                <path d="M8.25,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V6.75"></path>
                                <path d="M6.241,12.678a.685.685,0,0,1-.991-.613V7.435a.685.685,0,0,1,.991-.613l4.631,2.316a.684.684,0,0,1,0,1.224Z"></path>
                                </g>
                            </svg>
                            <span dir="auto" className="button__label">Content settings</span>
                            </span>
                        </button>
                        </li>
                        <li>
                        <button title="System" aria-label="System" className="button button--no-style navigation-link" type="button" section="system">
                            <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Settings" aria-hidden="true">
                                <g>
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </g>
                            </svg>
                            <span dir="auto" className="button__label">System</span>
                            </span>
                        </button>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            <Setting/>
        </div>
      </div>
      </>
  )
};

export default Settings;
