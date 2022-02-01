import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
      <>
        <div className='sidebar--pusher--filepage'>
            <main id='main-content' className='main'>
            <header className="channel-cover">
                <div className="channel__quick-actions">
                    <button title="Share this channel" aria-label="Share" className="button button--alt" type="button">
                    <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Share2" >
                        <g>
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </g>
                        </svg>
                        <span dir="auto" className="button__label">Share</span>
                    </span>
                    </button>
                    <Link className="button button--alt" title="Support this claim" aria-label="Support" to="/signup">
                    <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC" >
                        <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                        <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear53ec1fc2-68f9-444a-a36c-4dc02b926448)"></path>
                        <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear53ec1fc2-68f9-444a-a36c-4dc02b926448)"></path>
                        <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear53ec1fc2-68f9-444a-a36c-4dc02b926448)"></path>
                        <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear53ec1fc2-68f9-444a-a36c-4dc02b926448)"></path>
                        <defs>
                            <linearGradient id="paint0_linear53ec1fc2-68f9-444a-a36c-4dc02b926448" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2464" stop-color="#E700FF"></stop>
                            <stop offset="0.3166" stop-color="#E804F9"></stop>
                            <stop offset="0.4108" stop-color="#E90EE8"></stop>
                            <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                            <stop offset="0.637" stop-color="#F037A5"></stop>
                            <stop offset="0.7635" stop-color="#F45672"></stop>
                            <stop offset="0.8949" stop-color="#FA7A36"></stop>
                            <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear53ec1fc2-68f9-444a-a36c-4dc02b926448" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                            <stop offset="0.4233" stop-color="#FABD09"></stop>
                            <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear53ec1fc2-68f9-444a-a36c-4dc02b926448" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear53ec1fc2-68f9-444a-a36c-4dc02b926448" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#BAFF8E"></stop>
                            <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                        </svg>
                        <span dir="auto" className="button__label">Support</span>
                    </span>
                    </Link>
                    <div className="button-group">
                    <Link className="button button--alt" title="Follow this channel" aria-label="Follow" to="/signup">
                        <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e2495e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart color-override" >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <div dir="auto" className="button__label" style={{position: "relative;"}}>
                            <div style={{position: "relative", left: "50%", top: "50%", transform: "translate(-50%, 0%)"}}>
                            <span style={{visibility: "hidden"}}>Follow <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                <span style={{visibility: "visible"}}>Follow</span>
                                </div>
                            </span>
                            </div>
                        </div>
                        </span>
                    </Link>
                    </div>
                    <button className="menu__button claim__menu-button--inline" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" >
                        <g>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                        </g>
                    </svg>
                    </button>
                </div>
                <img alt='test' className="channel-cover__custom" src="/public/img/placeholderTx.gif"/>
                <img alt='test' className="channel-cover__custom" src="https://thumbnails.odycdn.com/optimize/s:0:300/quality:85/plain/https://thumbnails.lbry.com/banner-UCialsmUlTRABKPw31VDx1eQ" style={{visibility: "visible"}}/>
                <div className="channel__primary-info">
                    <div className="channel-thumbnail channel__thumbnail--channel-page">
                    <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/f/150e72c3174a428e.png?quality=85&amp;height=200&amp;width=0" style={{visibility: "visible"}}/>
                    </div>
                    <h1 className="channel__title">
                    <span title="Out of Frame" className="truncated-text">Out of Frame</span>
                    <div className="channel-staked__wrapper channel-staked__wrapper--large">
                        <svg size="36" className="icon icon--ChannelLevel3 channel-staked__indicator channel-staked__indicator--large channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 7.95L13.92 11.475C14.3519 12.2672 15.0028 12.9181 15.795 13.35L19.32 15.27L15.795 17.19C15.0104 17.6201 14.3651 18.2654 13.935 19.05L12 22.59L10.08 19.065C9.64989 18.2804 9.00456 17.6351 8.22 17.205L4.68 15.27L8.205 13.35C8.99718 12.9181 9.64814 12.2672 10.08 11.475L12 7.95ZM3.57 3.705C3.29213 4.2198 2.8698 4.64213 2.355 4.92L0 6.18L2.34 7.5C2.8548 7.77788 3.27713 8.2002 3.555 8.715L4.815 10.95L6.075 8.655C6.36202 8.16237 6.78348 7.76173 7.29 7.5L9.585 6.24L7.29 4.92C6.7752 4.64213 6.35287 4.2198 6.075 3.705L4.815 1.41L3.57 3.705ZM17.625 3.825C17.3305 4.36309 16.8881 4.80555 16.35 5.1L13.935 6.42L16.35 7.74C16.8881 8.03446 17.3305 8.47692 17.625 9.015L18.945 11.43L20.265 9C20.5595 8.46191 21.0019 8.01946 21.54 7.725L24 6.42L21.54 5.1C21.0019 4.80555 20.5595 4.36309 20.265 3.825L18.945 1.41L17.625 3.825Z"></path>
                        </svg>
                    </div>
                    </h1>
                    <div className="channel__meta">
                    <span aria-label="910" className="">910 Followers <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style icon--help" aria-label="Help">
                        <span className="button__content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--HelpCircle" >
                            <g>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12" y2="17"></line>
                            </g>
                            </svg>
                        </span>
                        </Link>
                    </span>
                    </div>
                </div>
                <div className="channel-cover__gradient"></div>
            </header>

            <div className='tabs'>
                <div data-reach-tab-list="" role="tablist" className="tabs__list tabs__list--channel-page">
                    <button data-reach-tab="" role="tab" id="tab:1:0" tabindex="0" aria-selected="true" aria-controls="panel:1:0" data-selected="" className="tab">Content</button>
                    <button data-reach-tab="" role="tab" id="tab:1:1" tabindex="-1" aria-selected="false" aria-controls="panel:1:1" className="tab">Playlists</button>
                    <button data-reach-tab="" role="tab" id="tab:1:2" tabindex="-1" aria-selected="false" aria-controls="panel:1:2" className="tab">About</button>
                    <button data-reach-tab="" role="tab" id="tab:1:3" tabindex="-1" aria-selected="false" aria-controls="panel:1:3" className="tab">Community</button>
                </div>
                <div className="tab__divider" style={{left: "209px", width: "61.7031px"}}></div>
                    <div data-reach-tab-panels>
                        <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:0" id="panel:1:0" className="tab__panel">
                            <div className="mb-m mt-m md:mb-xl" style={{display: "none"}}><div><div className="section__header--actions"><div>Upcoming Livestreams</div></div><section className="claim-grid"><div className="empty main--empty">No results</div></section></div></div>
                            <div className="section__header--actions">
                            <div className="claim-search__wrapper">
                                <div className="claim-search__top">
                                <div className="claim-search__menu-group">
                                    <button aria-label="Trending" className="button button--alt button-toggle button-toggle--trending" type="button">
                                    <span className="button__content">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Trending" >
                                        <g>
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                            <polyline points="17 6 23 6 23 12"></polyline>
                                        </g>
                                        </svg>
                                        <span dir="auto" className="button__label">Trending</span>
                                    </span>
                                    </button>
                                    <button aria-label="New" className="button button--alt button-toggle button-toggle--new button-toggle--active" type="button">
                                    <span className="button__content">
                                        <svg size="20" className="icon icon--New"  xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="6.65" cy="14.71" r="0.34" transform="translate(-0.5 0.24) rotate(-1.96)"></circle>
                                        <circle cx="4.28" cy="16.8" r="0.43" transform="translate(-0.57 0.16) rotate(-1.96)"></circle>
                                        <circle cx="3.5" cy="13.91" r="0.43" transform="translate(-0.47 0.13) rotate(-1.96)"></circle>
                                        <path d="M14.12,2.43c.39-.35,1-.75,1.37-1.1"></path>
                                        <path d="M.83,15.17c.07,2.12,1.83,4.27,3.95,4.08,3.39-.31,6.09-4.7,6.09-4.7s-2.35,1.75-2.41.25a3.59,3.59,0,0,1,1.31-3,14.73,14.73,0,0,0,2.47-3.76c.11-.24-4.49,3.11-5.23,3.52-1.17.66-1.73-.85-1-1.68.48-.51,6.38-6,6.38-6L3.2,11S.76,13,.83,15.17Z"></path>
                                        <path d="M7.51,4.57l-.18-.51a1.54,1.54,0,0,0-1.15-1L5.64,3l.51-.18a1.54,1.54,0,0,0,1-1.15l.1-.53.18.51a1.54,1.54,0,0,0,1.15,1l.53.1-.51.18A1.54,1.54,0,0,0,7.61,4Z"></path>
                                        <path d="M15.48,17.56l-.15-.4a1.21,1.21,0,0,0-.91-.78L14,16.3l.4-.15a1.21,1.21,0,0,0,.78-.91l.08-.42.15.4a1.21,1.21,0,0,0,.91.78l.42.08-.4.15a1.21,1.21,0,0,0-.78.91Z"></path>
                                        <path d="M3.08,8.07,3,7.77a.87.87,0,0,0-.66-.56L2,7.15,2.31,7a.87.87,0,0,0,.56-.66l.06-.3.1.29a.87.87,0,0,0,.66.56L4,7l-.29.1a.87.87,0,0,0-.56.66Z"></path>
                                        <line x1="17.73" y1="6.78" x2="12.48" y2="12.52"></line>
                                        <line x1="14.55" y1="6.03" x2="19.13" y2="1.86"></line>
                                        </svg>
                                        <span dir="auto" className="button__label">New</span>
                                    </span>
                                    </button>
                                    <button aria-label="Top" className="button button--alt button-toggle button-toggle--top" type="button">
                                    <span className="button__content">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Top" >
                                        <g>
                                            <line x1="12" y1="20" x2="12" y2="10"></line>
                                            <line x1="18" y1="20" x2="18" y2="4"></line>
                                            <line x1="6" y1="20" x2="6" y2="16"></line>
                                        </g>
                                        </svg>
                                        <span dir="auto" className="button__label">Top</span>
                                    </span>
                                    </button>
                                </div>
                                <div className="claim-search__menu-group">
                                    <button title="More" aria-label="More" className="button button--alt button-toggle button-toggle--top button-toggle--more" type="button">
                                    <span className="button__content">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Sliders" >
                                        <g>
                                            <line x1="4" y1="21" x2="4" y2="14"></line>
                                            <line x1="4" y1="10" x2="4" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12" y2="3"></line>
                                            <line x1="20" y1="21" x2="20" y2="16"></line>
                                            <line x1="20" y1="12" x2="20" y2="3"></line>
                                            <line x1="1" y1="14" x2="7" y2="14"></line>
                                            <line x1="9" y1="8" x2="15" y2="8"></line>
                                            <line x1="17" y1="16" x2="23" y2="16"></line>
                                        </g>
                                        </svg>
                                    </span>
                                    </button>
                                    <button title="Change to list layout" aria-label="Change to list layout" className="button button--alt button-toggle" type="button">
                                    <span className="button__content">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Layout" >
                                        <g>
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="9" y1="21" x2="9" y2="9"></line>
                                        </g>
                                        </svg>
                                    </span>
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="section__actions--no-margin">
                                <form novalidate="" className="wunderbar--inline">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Search" >
                                    <g>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </g>
                                </svg>
                                <fieldset-section>
                                    <input type="text" className="wunderbar__input--inline" placeholder="Search" value=""/>
                                </fieldset-section>
                                </form>
                            </div>
                        </div>
                        <section className='claim-grid'>
                            <li className="card claim-preview--tile">
                                <Link role="none" tabindex="-1"  to="">
                                    <div data-background-image="https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/TmJIiDz7OCc" className="media__thumb" style={{backgroundImage: "url(https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/TmJIiDz7OCc)"}}>
                                    <div className="claim-preview__hover-actions">
                                        <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/signup?redirect=/@outofframe:9">
                                        <span className="button__content">
                                            <svg size="16" className="icon icon--time"  viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                                            <g transform="matrix(1,0,0,1,0,0)">
                                                <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                                                <path d="M12 12L12 8.25"></path>
                                                <path d="M12 12L16.687 16.688"></path>
                                            </g>
                                            </svg>
                                            <span dir="auto" className="button__label">Add</span>
                                        </span>
                                        </Link>
                                    </div>
                                    <div className="claim-preview__file-property-overlay">
                                        <div className="claim-preview__overlay-properties">
                                        <span>00:59</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video" >
                                            <g>
                                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                            </g>
                                        </svg>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                                <div className="claim-tile__header">
                                    <Link aria-label="China Won't Talk about Fight Club #shorts by Out of Frame 1 day ago, 00:00:59" to="">
                                    <h2 className="claim-tile__title">
                                        <span title="China Won't Talk about Fight Club #shorts" className="truncated-text">China Won't Talk about Fight Club #shorts</span>
                                    </h2>
                                    </Link>
                                    <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" >
                                        <g>
                                        <circle cx="12" cy="5" r="1"></circle>
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                        </g>
                                    </svg>
                                    </button>
                                </div>
                                <div>
                                    <div className="claim-tile__info contains_view_count">
                                    <Link aria-current="page" className="button button--no-style active"  tabindex="-1" to="/@outofframe:9">
                                        <span className="button__content">
                                        <div className="channel-thumbnail channel-thumbnail--xsmall">
                                            <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/f/150e72c3174a428e.png?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                                            <div className="channel-staked__wrapper">
                                            <svg size="14" className="icon icon--ChannelLevel3 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M12 7.95L13.92 11.475C14.3519 12.2672 15.0028 12.9181 15.795 13.35L19.32 15.27L15.795 17.19C15.0104 17.6201 14.3651 18.2654 13.935 19.05L12 22.59L10.08 19.065C9.64989 18.2804 9.00456 17.6351 8.22 17.205L4.68 15.27L8.205 13.35C8.99718 12.9181 9.64814 12.2672 10.08 11.475L12 7.95ZM3.57 3.705C3.29213 4.2198 2.8698 4.64213 2.355 4.92L0 6.18L2.34 7.5C2.8548 7.77788 3.27713 8.2002 3.555 8.715L4.815 10.95L6.075 8.655C6.36202 8.16237 6.78348 7.76173 7.29 7.5L9.585 6.24L7.29 4.92C6.7752 4.64213 6.35287 4.2198 6.075 3.705L4.815 1.41L3.57 3.705ZM17.625 3.825C17.3305 4.36309 16.8881 4.80555 16.35 5.1L13.935 6.42L16.35 7.74C16.8881 8.03446 17.3305 8.47692 17.625 9.015L18.945 11.43L20.265 9C20.5595 8.46191 21.0019 8.01946 21.54 7.725L24 6.42L21.54 5.1C21.0019 4.80555 20.5595 4.36309 20.265 3.825L18.945 1.41L17.625 3.825Z"></path>
                                            </svg>
                                            </div>
                                        </div>
                                        </span>
                                    </Link>
                                    <div className="claim-tile__about">
                                        <Link aria-current="page" className="button button--no-style button--uri-indicator active"  tabindex="0" to="/@outofframe:9">
                                        <span className="button__content">
                                            <span dir="auto" className="channel-name">@outofframe</span>
                                        </span>
                                        </Link>
                                        <div className="claim-tile__about--counts">
                                        <span className="view_count">1,093 views</span>
                                        <span className="date_time" title="January 28th, 2022 11:51 PM">1 day ago</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </li>
                        </section>
                    </div>
                </div>
            </div>



            </main>
        </div>
      </>
  )
};

export default Profile;
