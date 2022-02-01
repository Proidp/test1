import React from 'react';
import { Link } from 'react-router-dom';


const Walletinner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <div data-reach-tabs="" className="tabs">
            <div data-reach-tab-list="" role="tablist" className="tabs__list tabs__list--collection-edit-page">
                <button data-reach-tab="" role="tab" id="tab:1:0" tabindex="0" aria-selected="true" aria-controls="panel:1:0" className="tab" data-selected="">Balance</button>
                <button data-reach-tab="" role="tab" id="tab:1:1" tabindex="-1" aria-selected="false" aria-controls="panel:1:1" className="tab">Transactions</button>
            </div>
            <div className="tab__divider" style={{left: "49px", width: "60.6719px"}}></div>
            <div data-reach-tab-panels="">
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:0" id="panel:1:0" className="tab__panel">
                <div className="columns">
                    <div className="column">
                    <section className="card">
                        <div className="card__first-pane">
                        <div className="card__header--between">
                            <div className="card__title-section">
                            <div>
                                <h2 className="card__title">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc icon__lbc--after-text icon__lbc--title" aria-hidden="true">
                                    <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c)"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c)"></path>
                                    <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c)"></path>
                                    <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c)"></path>
                                    <defs>
                                    <linearGradient id="paint0_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.2464" stop-color="#E700FF"></stop>
                                        <stop offset="0.3166" stop-color="#E804F9"></stop>
                                        <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                        <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                        <stop offset="0.637" stop-color="#F037A5"></stop>
                                        <stop offset="0.7635" stop-color="#F45672"></stop>
                                        <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                        <stop offset="1" stop-color="#FF9B00"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.4233" stop-color="#FABD09"></stop>
                                        <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linearb9b6b5e2-8cfa-4f77-a393-584351bd0c5c" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>0.00000000
                                </h2>
                                <div className="card__subtitle">
                                <span>Your total balance.</span>
                                </div>
                            </div>
                            </div>
                            <div className="card__title-actions-container"></div>
                        </div>
                        <div className="card__main-actions">
                            <h2 className="section__title--small">
                            <span title="" className="">0</span> immediately spendable
                            </h2>
                            <h2 className="section__title--small">
                            <span title="" className="">0</span> boosting content <button aria-label="View more" className="button button--link" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">View more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronDown" aria-hidden="true">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                </span>
                            </button>
                            </h2>
                            <div className="section__actions">
                            <Link className="button button--primary" aria-label="Buy" to="/buy">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Buy" aria-hidden="true">
                                    <g>
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Buy</span>
                                </span>
                            </Link>
                            <Link className="button button--secondary" aria-label="Receive" to="/receive">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Receive" aria-hidden="true">
                                    <g>
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Receive</span>
                                </span>
                            </Link>
                            <Link className="button button--secondary" aria-label="Send" to="/send">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Send" aria-hidden="true">
                                    <g>
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Send</span>
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                    <div className="column">
                    <section className="card">
                        <div className="card__first-pane">
                        <div className="card__header--between">
                            <div className="card__title-section">
                            <div>
                                <h2 className="card__title">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--DollarSign" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </g>
                                </svg>0 USD
                                </h2>
                                <div className="card__subtitle">When you begin to receive tips your balance will be updated here.</div>
                            </div>
                            </div>
                            <div className="card__title-actions-container"></div>
                        </div>
                        <div className="card__main-actions">
                            <h2 className="section__title--small">$0 Total Received Tips</h2>
                            <h2 className="section__title--small">$0 Withdrawn</h2>
                            <div className="section__actions">
                            <Link className="button button--secondary" aria-label="Bank Accounts" to="/settings/tip_account">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Settings" aria-hidden="true">
                                    <g>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Bank Accounts</span>
                                </span>
                            </Link>
                            <Link className="button button--secondary" aria-label="Payment Methods" to="/settings/card">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Settings" aria-hidden="true">
                                    <g>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Payment Methods</span>
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:1" id="panel:1:1" className="tab__panel" hidden="">
                <div className="section card-stack">
                    <div className="lbc-transactions">
                    <div className="main--empty">
                        <div className="yrbl__wrap">
                        <img alt="Friendly gerbil" className="yrbl" src="https://lbry2.vanwanet.com/speech/spaceman-sad:d.png"/>
                        <div>
                            <div className="yrbl__content">
                            <h2 className="section__title">Your wallet is empty</h2>
                            <div className="section__subtitle">
                                <div>
                                <p>You need <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc" aria-hidden="true">
                                    <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6)"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6)"></path>
                                    <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6)"></path>
                                    <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.2464" stop-color="#E700FF"></stop>
                                        <stop offset="0.3166" stop-color="#E804F9"></stop>
                                        <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                        <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                        <stop offset="0.637" stop-color="#F037A5"></stop>
                                        <stop offset="0.7635" stop-color="#F45672"></stop>
                                        <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                        <stop offset="1" stop-color="#FF9B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.4233" stop-color="#FABD09"></stop>
                                        <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear02ff013e-7b7d-47fd-b351-cfd7d1e618e6" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                    </svg> to create a channel and upload content. </p>
                                <p>Never fear though, there are tons of ways to earn <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc" aria-hidden="true">
                                    <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear36cb8584-25e0-4120-8af1-127061615308)"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear36cb8584-25e0-4120-8af1-127061615308)"></path>
                                    <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear36cb8584-25e0-4120-8af1-127061615308)"></path>
                                    <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear36cb8584-25e0-4120-8af1-127061615308)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear36cb8584-25e0-4120-8af1-127061615308" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.2464" stop-color="#E700FF"></stop>
                                        <stop offset="0.3166" stop-color="#E804F9"></stop>
                                        <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                        <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                        <stop offset="0.637" stop-color="#F037A5"></stop>
                                        <stop offset="0.7635" stop-color="#F45672"></stop>
                                        <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                        <stop offset="1" stop-color="#FF9B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear36cb8584-25e0-4120-8af1-127061615308" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.4233" stop-color="#FABD09"></stop>
                                        <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear36cb8584-25e0-4120-8af1-127061615308" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear36cb8584-25e0-4120-8af1-127061615308" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                    </svg>. You can earn or purchase <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc" aria-hidden="true">
                                    <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear8b7e8355-f652-4bbd-a925-a39ca73b1187)"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear8b7e8355-f652-4bbd-a925-a39ca73b1187)"></path>
                                    <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear8b7e8355-f652-4bbd-a925-a39ca73b1187)"></path>
                                    <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear8b7e8355-f652-4bbd-a925-a39ca73b1187)"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear8b7e8355-f652-4bbd-a925-a39ca73b1187" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.2464" stop-color="#E700FF"></stop>
                                        <stop offset="0.3166" stop-color="#E804F9"></stop>
                                        <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                        <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                        <stop offset="0.637" stop-color="#F037A5"></stop>
                                        <stop offset="0.7635" stop-color="#F45672"></stop>
                                        <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                        <stop offset="1" stop-color="#FF9B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear8b7e8355-f652-4bbd-a925-a39ca73b1187" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.4233" stop-color="#FABD09"></stop>
                                        <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear8b7e8355-f652-4bbd-a925-a39ca73b1187" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear8b7e8355-f652-4bbd-a925-a39ca73b1187" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                    </svg>, or you can have your friends send you some. </p>
                                </div>
                            </div>
                            </div>
                            <div className="section__actions">
                            <Link className="button button--primary" aria-label="Earn Rewards" to="/rewards">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Award" aria-hidden="true">
                                    <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Earn Rewards</span>
                                </span>
                            </Link>
                            <Link className="button button--secondary" aria-label="Buy/Swap Credits" to="/buy">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Buy" aria-hidden="true">
                                    <g>
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Buy/Swap Credits</span>
                                </span>
                            </Link>
                            <Link className="button button--secondary" aria-label="Your Address" to="/receive">
                                <span className="button__content">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Receive" aria-hidden="true">
                                    <g>
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                    </g>
                                </svg>
                                <span dir="auto" className="button__label">Your Address</span>
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
        <footer className="footer">
            <ul className="navigation__tertiary footer__links">
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Community Guidelines">
                <span className="button__content">
                    <span dir="auto" className="button__label">Community Guidelines</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="FAQ">
                <span className="button__content">
                    <span dir="auto" className="button__label">FAQ</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="https://odysee.com/@OdyseeHelp:b" className="button button--no-style" aria-label="Support">
                <span className="button__content">
                    <span dir="auto" className="button__label">Support</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="https://odysee.com/$/tos" className="button button--no-style" aria-label="Terms">
                <span className="button__content">
                    <span dir="auto" className="button__label">Terms</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Privacy Policy">
                <span className="button__content">
                    <span dir="auto" className="button__label">Privacy Policy</span>
                </span>
                </Link>
            </li>
            <li className="footer__link" id="gdprPrivacyFooter">
                <button aria-label="Cookie Settings" className="button button--no-style" type="button">
                <span className="button__content">
                    <span dir="auto" className="button__label">Cookie Settings</span>
                </span>
                </button>
            </li>
            </ul>
        </footer>
        </div>
      </>
  )
};

export default Walletinner;
