import React from 'react';
import { Link } from 'react-router-dom';



const Singlecontent = () => {
  return (
      <>
      <div className='sidebar--pusher--filepage'>
             <main id='main-content' className='main file-page main--file-page'>
                <div className='section card-stack file-page__video'>
                   <div className='file-page__video-container'>
                      <div className='file-page__video-container'>
                        <div className="content__cover" style={{backgroundImage: "url(https://thumbnails.odycdn.com/optimize/s:1236:1236/quality:85/plain/https://thumbnails.lbry.com/tLfMiJjFRz8)"}}>
                           <button title="Play" aria-label="Play" className="button button--no-style button--icon button--play" type="button">
                              <span className="button__content"></span>
                           </button>
                        </div>
                      </div>
                   </div>
                   <div className='file-page__secondary-content'>
                      {/* file-page content start */}
                      <div>
                        <section className="card">
                           <div className="card__first-pane">
                              <div className="card__header--between card__header--nowrap">
                              <div className="card__title-section">
                                 <div>
                                    <h1 className="card__title">Why THIS is the Most Important New Graphics Card</h1>
                                 </div>
                              </div>
                              <div className="card__title-actions-container">
                                 <div className="card__title-actions"></div>
                              </div>
                              </div>
                              <div className="card__body">
                              <div className="media__subtitle--between">
                                 <div className="file__viewdate">
                                    <span className="date_time">January 30th, 2022</span>
                                    <span className="media__subtitle--centered" aria-label="320">320 views</span>
                                 </div>
                                 <div className="media__actions">
                                    <div className="section__actions section__actions--no-margin">
                                    <Link className="button button--no-style button--file-action" title="I like this" aria-label="I like this" to="/signup&amp;src=filereaction_like">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                          <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                          </svg>
                                          <span dir="auto" className="button__label">13</span>
                                       </span>
                                    </Link>
                                    <Link className="button button--no-style button--file-action" title="I dislike this" aria-label="I dislike this" to="/signup&amp;src=filereaction_dislike">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                          <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                          </svg>
                                          <span dir="auto" className="button__label">1</span>
                                       </span>
                                    </Link>
                                    <Link className="button button--no-style button--file-action" title="Support this claim" aria-label="Support" to="/signup">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC" aria-hidden="true">
                                          <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                          <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                          <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                          <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear9c05b445-add1-433d-ab50-2cc06c6e8d66)"></path>
                                          <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear9c05b445-add1-433d-ab50-2cc06c6e8d66)"></path>
                                          <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear9c05b445-add1-433d-ab50-2cc06c6e8d66)"></path>
                                          <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear9c05b445-add1-433d-ab50-2cc06c6e8d66)"></path>
                                          <defs>
                                             <linearGradient id="paint0_linear9c05b445-add1-433d-ab50-2cc06c6e8d66" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.2464" stop-color="#E700FF"></stop>
                                                <stop offset="0.3166" stop-color="#E804F9"></stop>
                                                <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                                <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                                <stop offset="0.637" stop-color="#F037A5"></stop>
                                                <stop offset="0.7635" stop-color="#F45672"></stop>
                                                <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                                <stop offset="1" stop-color="#FF9B00"></stop>
                                             </linearGradient>
                                             <linearGradient id="paint1_linear9c05b445-add1-433d-ab50-2cc06c6e8d66" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.4233" stop-color="#FABD09"></stop>
                                                <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                             </linearGradient>
                                             <linearGradient id="paint2_linear9c05b445-add1-433d-ab50-2cc06c6e8d66" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#BAFF8E"></stop>
                                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                                             </linearGradient>
                                             <linearGradient id="paint3_linear9c05b445-add1-433d-ab50-2cc06c6e8d66" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
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
                                    <Link className="button button--no-style button--file-action" title="Add this claim to a list" aria-label="Save" to="/signup">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                          <g>
                                             <line x1="12" y1="5" x2="12" y2="19"></line>
                                             <line x1="5" y1="12" x2="19" y2="12"></line>
                                          </g>
                                          </svg>
                                          <span dir="auto" className="button__label">Save</span>
                                       </span>
                                    </Link>
                                    <Link className="button button--alt button--file-action" title="Repost" aria-label="Repost" to="/signup">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Repeat" aria-hidden="true">
                                          <g>
                                             <polyline points="17 1 21 5 17 9"></polyline>
                                             <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                                             <polyline points="7 23 3 19 7 15"></polyline>
                                             <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                                          </g>
                                          </svg>
                                          <span dir="auto" className="button__label">Repost</span>
                                       </span>
                                    </Link>
                                    <button title="Share" aria-label="Share" className="button button--no-style button--file-action" type="button">
                                       <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Share2" aria-hidden="true">
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
                                    <button className="button--file-action" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--5">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--More" aria-hidden="true">
                                          <g transform="rotate(90 12 12)">
                                          <circle cx="12" cy="5" r="1"></circle>
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="12" cy="19" r="1"></circle>
                                          </g>
                                       </svg>
                                    </button>
                                    </div>
                                 </div>
                              </div>
                              </div>
                              <div className="card__main-actions">
                              <div className="section">
                                 <li role="link" className="claim-preview__wrapper claim-preview__wrapper--inline">
                                    <div className="claim-preview claim-preview--inline claim-preview--channel">
                                    <Link className="button button--no-style" aria-hidden="true" tabindex="-1" to="/@2kliksphilip:4">
                                       <span className="button__content">
                                          <div className="channel-thumbnail channel-thumbnail--small">
                                          <img alt="" className="channel-thumbnail__custom" loading="lazy" src='https://lbry2.vanwanet.com/speech/f3fb7d1189b6b354:a.png' style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                             <svg size="14" className="icon icon--ChannelLevel4 channel-staked__indicator channel-staked__indicator--controlling" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M4.5 6.375L5.64 8.46C5.89614 8.92861 6.28139 9.31386 6.75 9.57L8.835 10.71L6.75 11.85C6.28139 12.1061 5.89614 12.4914 5.64 12.96L4.5 15L3.285 12.96C3.02886 12.4914 2.64361 12.1061 2.175 11.85L0.0899963 10.71L2.175 9.57C2.64361 9.31386 3.02886 8.92861 3.285 8.46L4.5 6.375ZM17.67 10.125C17.3718 10.6692 16.9242 11.1168 16.38 11.415L13.875 12.75L16.32 14.085C16.8642 14.3832 17.3118 14.8308 17.61 15.375L18.945 17.82L20.28 15.375C20.5782 14.8308 21.0258 14.3832 21.57 14.085L24 12.75L21.555 11.415C21.0108 11.1168 20.5632 10.6692 20.265 10.125L18.93 7.68L17.67 10.125ZM8.49 21C8.93984 21.2454 9.30955 21.6152 9.555 22.065L10.65 24L11.745 21.99C11.9975 21.5699 12.3608 21.2274 12.795 21L14.805 19.905L12.795 18.75C12.3451 18.5046 11.9754 18.1348 11.73 17.685L10.65 15.69L9.555 17.7C9.30955 18.1498 8.93984 18.5196 8.49 18.765L6.48 19.86L8.49 21ZM12.9 4.68C13.2986 4.8985 13.6265 5.22638 13.845 5.625L14.82 7.41L15.795 5.625C16.0135 5.22638 16.3414 4.8985 16.74 4.68L18.525 3.705L16.74 2.73C16.3414 2.5115 16.0135 2.18362 15.795 1.785L14.82 0L13.845 1.785C13.6265 2.18362 13.2986 2.5115 12.9 2.73L11.115 3.705L12.9 4.68Z"></path>
                                             </svg>
                                          </div>
                                          </div>
                                       </span>
                                    </Link>
                                    <div className="claim-preview__text">
                                       <div className="claim-preview-metadata">
                                          <div className="claim-preview-info">
                                          <Link className="active" aria-label="2kliksphilip" to="/@2kliksphilip:4">
                                             <div className="claim-preview__title">
                                                <span title="2kliksphilip" className="truncated-text">2kliksphilip</span>
                                             </div>
                                          </Link>
                                          </div>
                                          <div className="media__subtitle">
                                          <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/@2kliksphilip:4">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@2kliksphilip</span>
                                             </span>
                                          </Link>
                                          </div>
                                          <span className="claim-preview__channel-sub-count" aria-label="6,315">6,315 Followers</span>
                                       </div>
                                       <div className="claim-preview__actions">
                                          <div className="claim-preview__primary-actions">
                                          <div className="button-group">
                                             <Link className="button button--alt" title="Follow this channel" aria-label="Follow" to="/signup">
                                                <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e2495e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Heart color-override" aria-hidden="true">
                                                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                <div dir="auto" className="button__label" style={{position: "relative"}}>
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
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                                 <div>
                                    <div className="media__info-text--contracted media__info-text--fade">
                                    <div dir="auto" className="markdown-preview markdown-preview--description">
                                       <p>The GPU shortage has left PC gamers starving the 6500 XT isn't tasty, but it is necessary. It's our $200 Graphics Card Hero, to weather out the storm. Sit back, and let me play Devil's Advocate while you enjoy all these spicy memes <br/> ... <br/>
                                          <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/watch?v=tLfMiJjFRz8" className="button button--link button--external-link" title="https://www.youtube.com/watch?v=tLfMiJjFRz8" aria-label="https://www.youtube.com/watch?v=tLfMiJjFRz8">
                                          <span className="button__content">
                                             <span dir="auto" className="button__label">https://www.youtube.com/watch?v=tLfMiJjFRz8</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ExternalLink" aria-hidden="true">
                                                <g>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </g>
                                             </svg>
                                          </span>
                                          </Link>
                                       </p>
                                    </div>
                                    <div className="claim__tags claim__tags--large">
                                       <Link className="button button--no-style tag" title="View tag" aria-label="2022" to="/discover?t=2022">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">2022</span>
                                          </span>
                                       </Link>
                                       <Link className="button button--no-style tag" title="View tag" aria-label="6500 xt" to="/discover?t=6500%20xt">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">6500 xt</span>
                                          </span>
                                       </Link>
                                       <Link className="button button--no-style tag" title="View tag" aria-label="amd" to="/discover?t=amd">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">amd</span>
                                          </span>
                                       </Link>
                                       <Link className="button button--no-style tag" title="View tag" aria-label="blockchain" to="/discover?t=blockchain">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">blockchain</span>
                                          </span>
                                       </Link>
                                       <Link className="button button--no-style tag" title="View tag" aria-label="crypto" to="/discover?t=crypto">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">crypto</span>
                                          </span>
                                       </Link>
                                       <Link className="button button--no-style tag" title="View tag" aria-label="graphics card" to="/discover?t=graphics%20card">
                                          <span className="button__content">
                                          <span dir="auto" className="button__label">graphics card</span>
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="media__details">
                                       <span>LBRY URL</span>
                                       <span>lbry://@2kliksphilip#4/why-this-is-the-most-important-new#e</span>
                                    </div>
                                    <div className="media__details">
                                       <span>Claim ID</span>
                                       <span>ea965934b99906f9bdf95a4ab36e168529447afe</span>
                                    </div>
                                    <div className="media__details">
                                       <span>192.22 MB</span>
                                    </div>
                                    </div>
                                    <div className="card__bottom-actions">
                                    <button aria-label="More" className="button button--link" type="button">
                                       <span className="button__content">
                                          <span dir="auto" className="button__label">More</span>
                                       </span>
                                    </button>
                                    <div className="section__actions--no-margin">
                                       <button className="button button--link" type="button">
                                          <span className="button__content">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc icon__lbc--after-text" aria-hidden="true">
                                             <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                             <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                             <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                             <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_lineare629b6c8-b7e7-4604-8989-70bb7acbe477)"></path>
                                             <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_lineare629b6c8-b7e7-4604-8989-70bb7acbe477)"></path>
                                             <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_lineare629b6c8-b7e7-4604-8989-70bb7acbe477)"></path>
                                             <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_lineare629b6c8-b7e7-4604-8989-70bb7acbe477)"></path>
                                             <defs>
                                                <linearGradient id="paint0_lineare629b6c8-b7e7-4604-8989-70bb7acbe477" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.2464" stop-color="#E700FF"></stop>
                                                <stop offset="0.3166" stop-color="#E804F9"></stop>
                                                <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                                <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                                <stop offset="0.637" stop-color="#F037A5"></stop>
                                                <stop offset="0.7635" stop-color="#F45672"></stop>
                                                <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                                <stop offset="1" stop-color="#FF9B00"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_lineare629b6c8-b7e7-4604-8989-70bb7acbe477" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.4233" stop-color="#FABD09"></stop>
                                                <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint2_lineare629b6c8-b7e7-4604-8989-70bb7acbe477" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#BAFF8E"></stop>
                                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint3_lineare629b6c8-b7e7-4604-8989-70bb7acbe477" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#BAFF8E"></stop>
                                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                                                </linearGradient>
                                                <clipPath id="clip0">
                                                <rect width="24" height="24" fill="white"></rect>
                                                </clipPath>
                                             </defs>
                                          </svg>25.8 </span>
                                       </button>
                                    </div>
                                    </div>
                                 </div>
                              </div>
                              </div>
                           </div>
                        </section>
                        <section className="card--enable-overflow card">
                           <div className="card__first-pane">
                              <div className="card__header--between">
                              <div className="card__title-section">
                                 <div>
                                    <h2 className="card__title">7 comments</h2>
                                 </div>
                              </div>
                              <div className="card__title-actions-container">
                                 <div className="card__title-actions">
                                    <span className="comment__sort">
                                    <button aria-label="Best" className="button button--alt button-toggle button-toggle--active" type="button">
                                       <span className="button__content">
                                          <svg size="18" className="icon icon--Best" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                          <polygon points="10.05 3 11.5 5.94 14.75 6.42 12.4 8.71 12.96 11.95 10.05 10.42 7.14 11.95 7.7 8.71 5.34 6.42 8.6 5.94 10.05 3"></polygon>
                                          <circle cx="10" cy="7.66" r="7"></circle>
                                          <polyline points="8.6 15.08 6.43 19.33 5.18 17.17 2.63 17.39 4.87 13"></polyline>
                                          <polyline points="14.94 12.98 17.37 17.09 14.88 16.99 13.7 19.26 11.19 15.03"></polyline>
                                          </svg>
                                          <span dir="auto" className="button__label">Best</span>
                                       </span>
                                    </button>
                                    <button aria-label="Controversial" className="button button--alt button-toggle" type="button">
                                       <span className="button__content">
                                          <svg size="18" className="icon icon--Controversial" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 26 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M11.52,11.55s1-1.64,4.28-2.27A4.19,4.19,0,0,0,18,2.13l0,0a4.19,4.19,0,0,0-7.15,2.17C10.13,7.55,8.5,8.53,8.5,8.53"></path>
                                          <path d="M14.74,15.33,4.62,5.21a1.64,1.64,0,0,0-2.32,0h0a1.64,1.64,0,0,0,0,2.32L12.42,17.65a1.64,1.64,0,0,0,2.32,0h0A1.64,1.64,0,0,0,14.74,15.33Z"></path>
                                          <line x1="6.75" y1="11.98" x2="7.97" y2="13.2"></line>
                                          <line x1="10.24" y1="15.46" x2="7.97" y2="13.2"></line>
                                          <line x1="6.75" y1="11.98" x2="4.49" y2="9.71"></line>
                                          <path d="M10.24,15.46A4.81,4.81,0,1,1,4.49,9.71L6.75,12A2.71,2.71,0,1,0,8,13.2Z"></path>
                                          <path d="M17.1,4.58a1.4,1.4,0,0,1-.28,1.77"></path>
                                          </svg>
                                          <span dir="auto" className="button__label">Controversial</span>
                                       </span>
                                    </button>
                                    <button aria-label="New" className="button button--alt button-toggle" type="button">
                                       <span className="button__content">
                                          <svg size="18" className="icon icon--New" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
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
                                    </span>
                                    <button title="Refresh" aria-label="Refresh" className="button button--alt" type="button">
                                    <span className="button__content">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--RefreshCw" aria-hidden="true">
                                          <g>
                                          <polyline points="23 4 23 10 17 10"></polyline>
                                          <polyline points="1 20 1 14 7 14"></polyline>
                                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                          </g>
                                       </svg>
                                    </span>
                                    </button>
                                 </div>
                              </div>
                              </div>
                              <div className="card__main-actions">
                              <div role="button">
                                 <fieldset-section>
                                    <div className="MuiAutocomplete-root MuiAutocomplete-fullWidth css-1uvxhlw" aria-expanded="false">
                                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                                       <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-5mjz24">
                                          <textarea aria-invalid="false" autocomplete="off" id="comment_signup_prompt" placeholder="Say something about this..." type="textarea" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline MuiInputBase-inputAdornedEnd css-v59wfm" aria-autocomplete="list" autocapitalize="none" spellcheck="false" maxlength="2000" style={{height: "80px", overflow: "hidden"}}></textarea>
                                          <textarea aria-hidden="true" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline MuiInputBase-inputAdornedEnd css-v59wfm" readonly="" tabindex="-1" style={{visibility: "hidden", position: "absolute", overflow: "hidden", height: "0px", top: "0px", left: "0px", transform: "translateZ(0px)", padding: "0px", width: "1179.08px"}}></textarea>
                                          <div className="MuiAutocomplete-endAdornment css-2iz2x6"></div>
                                          <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                          <legend className="css-nnbavb">
                                             <span className="notranslate">&ZeroWidthSpace;</span>
                                          </legend>
                                          </fieldset>
                                       </div>
                                    </div>
                                    </div>
                                    <div className="form-field__textarea-info"></div>
                                 </fieldset-section>
                                 <div className="section__actions--no-margin">
                                    <Link className="button button--primary button--disabled" disabled="" aria-label="Post" to="/signup">
                                    <span className="button__content">
                                       <span dir="auto" className="button__label">Post</span>
                                    </span>
                                    </Link>
                                 </div>
                              </div>
                              <ul className="comments">
                                 <li className="comment comment--top-level" id="00f7aca533ac1c94a6e2711a3aa616c8988a18d1c398433191fb2a6907a033ca">
                                    <div className="comment__content comment--slimed">
                                    <div className="comment__thumbnail-wrapper">
                                       <div className="channel-thumbnail comment__author-thumbnail channel-thumbnail__default--2 channel-thumbnail--xsmall">
                                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/spaceman-png:2.png?quality=85&amp;height=180&amp;width=180" style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                          <svg size="14" className="icon icon--ChannelLevel1 channel-staked__indicator channel-staked__indicator--controlling" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                             <path d="M12 4.32001L14.025 8.02501C14.4776 8.85522 15.1598 9.53744 15.99 9.99001L19.68 12L15.975 14.025C15.1448 14.4776 14.4626 15.1598 14.01 15.99L12 19.68L9.97501 15.975C9.52419 15.1524 8.84761 14.4758 8.02501 14.025L4.32001 12L8.02501 9.97501C8.84761 9.52419 9.52419 8.84761 9.97501 8.02501L12 4.32001Z"></path>
                                          </svg>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="comment__body-container">
                                       <div className="comment__meta">
                                          <div className="comment__meta-information">
                                          <Link className="button button--no-style comment__author button--uri-indicator"  tabindex="0" to="/@CliffD:0">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@CliffD</span>
                                             </span>
                                          </Link>
                                          <button className="button button--no-style comment__time" type="button">
                                             <span className="button__content">
                                                <span dir="auto" className="button__label">
                                                <span className="date_time" title="January 30th, 2022 10:32 AM">5 hours ago</span>
                                                </span>
                                             </span>
                                          </button>
                                          </div>
                                          <div className="comment__menu">
                                          <button className="menu__button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--11">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                                <g>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                </g>
                                             </svg>
                                          </button>
                                          </div>
                                       </div>
                                       <div>
                                          <div className="comment__message">
                                          <div className="comment__dead">This comment was slimed to death. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--SlimeActive" aria-hidden="true">
                                                <path d="M13.065 4.18508C12.5638 4.47334 11.9699 4.5547 11.4096 4.41183C10.8494 4.26896 10.367 3.91315 10.065 3.42008C9.70126 2.96799 9.52899 2.39146 9.58506 1.81392C9.64113 1.23639 9.92109 0.703759 10.365 0.330081C10.8662 0.0418164 11.4601 -0.0395341 12.0204 0.103332C12.5806 0.246199 13.063 0.602008 13.365 1.09508C13.7287 1.54717 13.901 2.12371 13.8449 2.70124C13.7889 3.27877 13.5089 3.8114 13.065 4.18508ZM2.565 6.76508C1.98518 6.6732 1.39241 6.81157 0.913189 7.15066C0.433971 7.48976 0.106262 8.00272 0 8.58008C0.0118186 9.17159 0.256137 9.73464 0.680058 10.1473C1.10398 10.56 1.67339 10.7891 2.265 10.7851C2.84509 10.8863 3.44175 10.7561 3.92691 10.4224C4.41207 10.0886 4.74707 9.57801 4.86 9.00008C4.85804 8.7046 4.79789 8.41241 4.683 8.14018C4.56811 7.86794 4.40072 7.62101 4.1904 7.41347C3.98007 7.20593 3.73093 7.04185 3.45719 6.9306C3.18345 6.81935 2.89048 6.7631 2.595 6.76508H2.565ZM22.2 15.1951C21.9286 15.0703 21.635 15.0008 21.3364 14.9907C21.0379 14.9806 20.7403 15.0301 20.461 15.1362C20.1818 15.2423 19.9264 15.403 19.7099 15.6088C19.4934 15.8146 19.3201 16.0615 19.2 16.3351C19.1369 16.6299 19.1337 16.9345 19.1906 17.2306C19.2475 17.5267 19.3634 17.8084 19.5313 18.0588C19.6992 18.3093 19.9157 18.5235 20.168 18.6886C20.4203 18.8537 20.7033 18.9665 21 19.0201C21.2714 19.1449 21.565 19.2143 21.8636 19.2244C22.1621 19.2346 22.4597 19.1851 22.739 19.079C23.0182 18.9729 23.2736 18.8122 23.4901 18.6064C23.7066 18.4005 23.8799 18.1536 24 17.8801C24.0634 17.5873 24.0677 17.2849 24.0127 16.9904C23.9577 16.696 23.8444 16.4155 23.6795 16.1654C23.5147 15.9153 23.3015 15.7007 23.0526 15.5341C22.8037 15.3674 22.524 15.2522 22.23 15.1951H22.2ZM20.34 10.2451C20.0073 9.99542 19.6009 9.86349 19.185 9.87008C18.4572 9.93018 17.7485 10.1341 17.1 10.4701C16.7447 10.6341 16.3789 10.7744 16.005 10.8901H15.69C15.5961 10.9108 15.4989 10.9108 15.405 10.8901C15 9.97508 16.5 9.00008 18.285 7.93508C18.8914 7.60883 19.4599 7.21644 19.98 6.76508C20.3961 6.30667 20.646 5.72169 20.6895 5.10413C20.733 4.48658 20.5677 3.87232 20.22 3.36008C19.9329 2.89588 19.5307 2.51381 19.0523 2.25098C18.574 1.98815 18.0358 1.85349 17.49 1.86008C17.2067 1.85969 16.9245 1.89496 16.65 1.96508C16.1585 2.08101 15.7042 2.31914 15.3293 2.65739C14.9543 2.99565 14.6708 3.42308 14.505 3.90008C14.16 4.75508 13.14 7.30508 12.135 7.71008C12.0359 7.72949 11.9341 7.72949 11.835 7.71008C11.6138 7.70259 11.3956 7.65692 11.19 7.57508C9.96 7.12508 9.6 5.62508 9.225 4.03508C9.06457 3.15891 8.79234 2.30695 8.415 1.50008C8.17043 1.04181 7.80465 0.659541 7.3576 0.395014C6.91055 0.130487 6.39941 -0.00612938 5.88 8.05856e-05C5.30686 0.011692 4.74338 0.149999 4.23 0.405081C3.872 0.589131 3.5547 0.843345 3.297 1.15258C3.03931 1.46182 2.84648 1.81976 2.73 2.20508C2.58357 2.66415 2.532 3.1482 2.57841 3.62781C2.62483 4.10743 2.76826 4.57261 3 4.99508C3.63898 5.99088 4.39988 6.90294 5.265 7.71008C5.59239 8.0233 5.90283 8.35377 6.195 8.70008C6.41249 8.94283 6.57687 9.22833 6.67761 9.5383C6.77835 9.84826 6.81322 10.1759 6.78 10.5001C6.68279 10.762 6.52008 10.9947 6.30737 11.1759C6.09467 11.3571 5.83908 11.4808 5.565 11.5351H5.19C4.89755 11.5247 4.60651 11.4896 4.32 11.4301C3.94485 11.3508 3.56329 11.3056 3.18 11.2951H3C2.50224 11.3269 2.02675 11.513 1.63964 11.8275C1.25253 12.142 0.973032 12.5694 0.84 13.0501C0.685221 13.5092 0.678705 14.0053 0.821373 14.4683C0.964041 14.9313 1.24867 15.3377 1.635 15.6301C1.97288 15.8809 2.38429 16.0127 2.805 16.0051C3.4891 15.9504 4.15377 15.751 4.755 15.4201C5.18104 15.1991 5.64344 15.0568 6.12 15.0001H6.285C6.32317 15.0086 6.35846 15.0269 6.38739 15.0532C6.41632 15.0795 6.4379 15.1129 6.45 15.1501C6.52858 15.4213 6.49621 15.7127 6.36 15.9601C5.80418 16.8088 4.95508 17.4229 3.975 17.6851C3.38444 17.8608 2.85799 18.205 2.46025 18.6756C2.06252 19.1462 1.81078 19.7226 1.73592 20.3342C1.66107 20.9458 1.76635 21.5659 2.03886 22.1185C2.31136 22.6711 2.73924 23.1321 3.27 23.4451C3.81477 23.8292 4.46349 24.0384 5.13 24.0451C6.1389 23.9485 7.08103 23.4979 7.7894 22.773C8.49778 22.0482 8.92665 21.0959 9 20.0851V19.9501C9.135 19.0351 9.33 17.7751 10.05 17.3401C10.2442 17.2216 10.4675 17.1593 10.695 17.1601C11.0828 17.1781 11.4558 17.3142 11.7641 17.5501C12.0724 17.786 12.3012 18.1105 12.42 18.4801C13.155 21.2251 13.725 23.4001 16.14 23.4001C16.4527 23.3961 16.7643 23.361 17.07 23.2951C17.8256 23.2158 18.5231 22.8527 19.0214 22.2792C19.5198 21.7057 19.7819 20.9644 19.755 20.2051C19.6664 19.6213 19.4389 19.0673 19.0918 18.5896C18.7446 18.112 18.2879 17.7246 17.76 17.4601C17.4534 17.2574 17.1625 17.0317 16.89 16.7851C16.005 15.9301 15.855 15.4051 15.885 15.1051C15.9198 14.8698 16.0313 14.6526 16.2021 14.4871C16.373 14.3217 16.5937 14.2173 16.83 14.1901H17.055C17.31 14.1901 17.61 14.1901 17.895 14.1901C18.18 14.1901 18.57 14.1901 18.84 14.1901H19.14C19.6172 14.1642 20.0748 13.9919 20.4505 13.6967C20.8263 13.4014 21.102 12.9976 21.24 12.5401C21.3316 12.1166 21.2981 11.6757 21.1436 11.2709C20.9892 10.8661 20.7204 10.5149 20.37 10.2601L20.34 10.2451Z" fill="#81C554" stroke-width="0"></path>
                                             </svg>
                                          </div>
                                          </div>
                                          <div className="comment__actions">
                                          <Link className="button button--no-style comment__action" aria-label="Log in to reply" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Reply" aria-hidden="true">
                                                <g>
                                                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </g>
                                                </svg>
                                                <span dir="auto" className="button__label">Log in to reply</span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Upvote" aria-label="Upvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                                <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Downvote" aria-label="Downvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                                <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">5</span>
                                                </span>
                                             </span>
                                          </Link>
                                          </div>
                                          <div className="comment__actions">
                                          <button aria-label="Show 2 replies" className="button button--link" type="button">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronDown" aria-hidden="true">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                                <span dir="auto" className="button__label">Show 2 replies</span>
                                             </span>
                                          </button>
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                                 <li className="comment comment--top-level" id="9c466815b4f3ca1b681fee179e64134b0897328f3113df35854fc3882c6651f4">
                                    <div className="comment__content">
                                    <div className="comment__thumbnail-wrapper">
                                       <div className="channel-thumbnail comment__author-thumbnail channel-thumbnail__default--1 channel-thumbnail--xsmall">
                                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/spaceman-png:2.png?quality=85&amp;height=180&amp;width=180" style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                          <svg size="14" className="icon icon--ChannelLevel1 channel-staked__indicator channel-staked__indicator--controlling" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                             <path d="M12 4.32001L14.025 8.02501C14.4776 8.85522 15.1598 9.53744 15.99 9.99001L19.68 12L15.975 14.025C15.1448 14.4776 14.4626 15.1598 14.01 15.99L12 19.68L9.97501 15.975C9.52419 15.1524 8.84761 14.4758 8.02501 14.025L4.32001 12L8.02501 9.97501C8.84761 9.52419 9.52419 8.84761 9.97501 8.02501L12 4.32001Z"></path>
                                          </svg>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="comment__body-container">
                                       <div className="comment__meta">
                                          <div className="comment__meta-information">
                                          <Link className="button button--no-style comment__author button--uri-indicator"  tabindex="0" to="/@nSpyer:1">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@nSpyer</span>
                                             </span>
                                          </Link>
                                          <button className="button button--no-style comment__time" type="button">
                                             <span className="button__content">
                                                <span dir="auto" className="button__label">
                                                <span className="date_time" title="January 30th, 2022 03:44 PM">5 minutes ago</span>
                                                </span>
                                             </span>
                                          </button>
                                          </div>
                                          <div className="comment__menu">
                                          <button className="menu__button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--12">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                                <g>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                </g>
                                             </svg>
                                          </button>
                                          </div>
                                       </div>
                                       <div>
                                          <div className="comment__message">
                                          <div dir="auto" className="markdown-preview">
                                             <p>Get a TI-82 you losers</p>
                                          </div>
                                          </div>
                                          <div className="comment__actions">
                                          <Link className="button button--no-style comment__action" aria-label="Log in to reply" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Reply" aria-hidden="true">
                                                <g>
                                                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </g>
                                                </svg>
                                                <span dir="auto" className="button__label">Log in to reply</span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Upvote" aria-label="Upvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                                <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Downvote" aria-label="Downvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                                <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                                 <li className="comment comment--top-level" id="a66c7b9a700e597c8bb5675339f7c8120b2006218d5de549c300c18d36eeb6d9">
                                    <div className="comment__content">
                                    <div className="comment__thumbnail-wrapper">
                                       <div className="channel-thumbnail comment__author-thumbnail channel-thumbnail--xsmall">
                                          <img alt='' className="channel-thumbnail__custom" loading="lazy" src="https://thumbnails.odycdn.com/optimize/s:0:100/quality:85/plain/https://thumbs.odycdn.com/e00b3119b3cd09e364af94be2b7b8f1a.jpeg" style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                          <svg size="14" className="icon icon--ChannelLevel2 channel-staked__indicator channel-staked__indicator--controlling" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                             <path d="M15.705 7.31999L17.625 10.845C18.0591 11.6316 18.7099 12.2772 19.5 12.705L23.025 14.625L19.5 16.5C18.7154 16.9301 18.0701 17.5754 17.64 18.36L15.72 21.885L13.785 18.435C13.3625 17.6207 12.7106 16.9479 11.91 16.5L8.38499 14.64L11.91 12.705C12.7001 12.2772 13.3508 11.6316 13.785 10.845L15.705 7.31999ZM4.37999 4.31999C4.10558 4.81954 3.69454 5.23058 3.19499 5.50499L0.974991 6.67499L3.19499 7.88999C3.68451 8.14404 4.09453 8.5281 4.37999 8.99999L5.59499 11.22L6.80999 8.99999C7.0844 8.50045 7.49544 8.08941 7.99499 7.81499L10.215 6.59999L7.99499 5.44499C7.49544 5.17058 7.0844 4.75954 6.80999 4.25999L5.59499 2.05499L4.37999 4.31999Z"></path>
                                          </svg>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="comment__body-container">
                                       <div className="comment__meta">
                                          <div className="comment__meta-information">
                                          <Link className="button button--no-style comment__author button--uri-indicator"  tabindex="0" to="/@shibadev:7">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@shibadev</span>
                                             </span>
                                          </Link>
                                          <button className="button button--no-style comment__time" type="button">
                                             <span className="button__content">
                                                <span dir="auto" className="button__label">
                                                <span className="date_time" title="January 30th, 2022 02:15 PM">1 hour ago</span>
                                                </span>
                                             </span>
                                          </button>
                                          </div>
                                          <div className="comment__menu">
                                          <button className="menu__button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--13">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                                <g>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                </g>
                                             </svg>
                                          </button>
                                          </div>
                                       </div>
                                       <div>
                                          <div className="comment__message">
                                          <div dir="auto" className="markdown-preview">
                                             <p>just buy laptop, i havent have any desktop for more than 10 years lol </p>
                                          </div>
                                          </div>
                                          <div className="comment__actions">
                                          <Link className="button button--no-style comment__action" aria-label="Log in to reply" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Reply" aria-hidden="true">
                                                <g>
                                                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </g>
                                                </svg>
                                                <span dir="auto" className="button__label">Log in to reply</span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Upvote" aria-label="Upvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                                <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Downvote" aria-label="Downvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                                <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                                 <li className="comment comment--top-level" id="9e45605a9e930d81fa1155790d77f3823a673ba4f723a30e7760fc78032af450">
                                    <div className="comment__content">
                                    <div className="comment__thumbnail-wrapper">
                                       <div className="channel-thumbnail comment__author-thumbnail channel-thumbnail__default--0 channel-thumbnail--xsmall">
                                          <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/spaceman-png:2.png?quality=85&amp;height=180&amp;width=180" style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                          <svg size="14" className="icon icon--ChannelLevel1 channel-staked__indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                             <path d="M12 4.32001L14.025 8.02501C14.4776 8.85522 15.1598 9.53744 15.99 9.99001L19.68 12L15.975 14.025C15.1448 14.4776 14.4626 15.1598 14.01 15.99L12 19.68L9.97501 15.975C9.52419 15.1524 8.84761 14.4758 8.02501 14.025L4.32001 12L8.02501 9.97501C8.84761 9.52419 9.52419 8.84761 9.97501 8.02501L12 4.32001Z"></path>
                                          </svg>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="comment__body-container">
                                       <div className="comment__meta">
                                          <div className="comment__meta-information">
                                          <Link className="button button--no-style comment__author button--uri-indicator"  tabindex="0" to="/@EndUser:5">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@EndUser</span>
                                             </span>
                                          </Link>
                                          <button className="button button--no-style comment__time" type="button">
                                             <span className="button__content">
                                                <span dir="auto" className="button__label">
                                                <span className="date_time" title="January 30th, 2022 01:30 PM">2 hours ago</span>
                                                </span>
                                             </span>
                                          </button>
                                          </div>
                                          <div className="comment__menu">
                                          <button className="menu__button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--14">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                                <g>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                </g>
                                             </svg>
                                          </button>
                                          </div>
                                       </div>
                                       <div>
                                          <div className="comment__message">
                                          <div>
                                             <div>
                                                <div className="expandable--closed">
                                                <div dir="auto" className="markdown-preview">
                                                   <p>The problem is, this card already has some games it just won't play at all. First, VR you have super hot, rec room, and beat saber. Basically everything else is not possible at all. 2nd Cyber punk 2077 is unplayable at any resolution because the lowest texture details fully saturates the 4G VRAM buffer, and due to the 64 bit memory bus, and 4x PCIE, if you have a PCIE gen 3 setup (Budget builders will be the primary target for this card) fetching textures from system memory will cause serious stuttering. <br/> All AMD needed to do was give it more VRAM, but now a card exists that struggles with any level of textures because of that stuttering issue. <br/> NOT ACCEPTABLE. Buy Used cards if making a budget gaming system, buy a laptop with an entry level GPU if you need new. laptops are less affected by crypto. </p>
                                                </div>
                                                </div>
                                                <button aria-label="More" className="button button--link expandable__button" type="button">
                                                <span className="button__content">
                                                   <span dir="auto" className="button__label">More</span>
                                                </span>
                                                </button>
                                             </div>
                                          </div>
                                          </div>
                                          <div className="comment__actions">
                                          <Link className="button button--no-style comment__action" aria-label="Log in to reply" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Reply" aria-hidden="true">
                                                <g>
                                                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </g>
                                                </svg>
                                                <span dir="auto" className="button__label">Log in to reply</span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Upvote" aria-label="Upvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                                <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Downvote" aria-label="Downvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                                <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                                 <li className="comment comment--top-level" id="b6f11adec837973efb10168c8dfdb082ce6bcd5cf1bd669d838f6e63ff974138">
                                    <div className="comment__content">
                                    <div className="comment__thumbnail-wrapper">
                                       <div className="channel-thumbnail comment__author-thumbnail channel-thumbnail__default--1 channel-thumbnail--xsmall">
                                          <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/spaceman-png:2.png?quality=85&amp;height=180&amp;width=180" style={{visibility: "visible"}}/>
                                          <div className="channel-staked__wrapper">
                                          <svg size="14" className="icon icon--ChannelLevel1 channel-staked__indicator channel-staked__indicator--controlling" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                                             <path d="M12 4.32001L14.025 8.02501C14.4776 8.85522 15.1598 9.53744 15.99 9.99001L19.68 12L15.975 14.025C15.1448 14.4776 14.4626 15.1598 14.01 15.99L12 19.68L9.97501 15.975C9.52419 15.1524 8.84761 14.4758 8.02501 14.025L4.32001 12L8.02501 9.97501C8.84761 9.52419 9.52419 8.84761 9.97501 8.02501L12 4.32001Z"></path>
                                          </svg>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="comment__body-container">
                                       <div className="comment__meta">
                                          <div className="comment__meta-information">
                                          <Link className="button button--no-style comment__author button--uri-indicator"  tabindex="0" to="/@Nighteyes:b">
                                             <span className="button__content">
                                                <span dir="auto" className="channel-name">@Nighteyes</span>
                                             </span>
                                          </Link>
                                          <button className="button button--no-style comment__time" type="button">
                                             <span className="button__content">
                                                <span dir="auto" className="button__label">
                                                <span className="date_time" title="January 30th, 2022 08:00 AM">7 hours ago</span>
                                                </span>
                                             </span>
                                          </button>
                                          </div>
                                          <div className="comment__menu">
                                          <button className="menu__button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--15">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                                <g>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                </g>
                                             </svg>
                                          </button>
                                          </div>
                                       </div>
                                       <div>
                                          <div className="comment__message">
                                          <div dir="auto" className="markdown-preview">
                                             <p>I sadly have to agree.</p>
                                          </div>
                                          </div>
                                          <div className="comment__actions">
                                          <Link className="button button--no-style comment__action" aria-label="Log in to reply" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Reply" aria-hidden="true">
                                                <g>
                                                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                                </g>
                                                </svg>
                                                <span dir="auto" className="button__label">Log in to reply</span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Upvote" aria-label="Upvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Fire" aria-hidden="true">
                                                <path d="M15.45 22.65C17.25 16.65 12.15 12.75 12.15 12.75C12.15 12.75 9.00001 18.15 9.60001 22.65C7.20001 21.45 5.55001 19.8 4.80001 17.7C3.60001 14.55 4.50001 11.1 5.25001 9C5.85001 10.2 7.80001 12.15 7.80001 12.15L7.95001 10.5C8.55001 2.25 12.6 0.9 14.4 0.75C14.4 1.8 14.7 4.8 17.1 7.95C18.75 10.05 20.55 12.45 20.4 16.5C20.1 20.1 17.4 21.9 15.45 22.65Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          <Link className="button button--no-style comment__action" title="Downvote" aria-label="Downvote" to="/signup">
                                             <span className="button__content">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Slime" aria-hidden="true">
                                                <path d="M5.09998 23.25C2.84998 23.25 1.64998 20.55 3.14998 18.9C4.19998 17.85 8.24998 17.1 7.04998 14.7C6.14998 12.9 3.59998 15.75 2.09998 15C1.34998 14.7 1.19998 13.5 1.79998 12.75C2.39998 11.85 3.29998 12 4.19998 12.15C5.84998 12.45 7.94998 11.7 7.49998 9.60003C6.89998 7.35003 4.34998 6.45003 3.44998 4.35003C2.69998 2.25003 4.64998 -0.299968 6.89998 1.05003C8.69998 2.10003 8.39997 5.25003 9.29997 6.90003C10.2 8.40003 12 9.00003 13.2 7.65003C14.55 6.30003 14.55 3.15003 16.65 2.70003C18.45 2.25003 20.4 4.05003 19.5 5.85003C18.45 7.80003 15.15 7.80003 14.55 10.05C14.1 11.7 15.45 11.85 16.65 11.4C17.4 11.1 18.6 10.35 19.5 10.65C20.55 11.1 20.7 12.45 19.95 13.2C18.6 14.25 16.65 12.6 15.45 14.25C13.95 16.35 17.1 17.7 18.15 18.9C19.8 20.7 18.3 22.8 16.05 22.8C14.1 22.8 13.65 20.7 13.2 19.05C12.6 16.95 9.89997 15.3 8.54997 18C7.79997 19.8 8.24998 23.25 5.09998 23.25Z" stroke-miterlimit="10"></path>
                                                </svg>
                                                <span dir="auto" className="button__label">
                                                <span className="comment__reaction-count">0</span>
                                                </span>
                                             </span>
                                          </Link>
                                          </div>
                                       </div>
                                    </div>
                                    </div>
                                 </li>
                              </ul>
                              </div>
                           </div>
                        </section>
                        </div>
                      {/* file-page content end */}
                   </div>
                </div>
                <section className='file-page__recommended card'>
                   <div className='card__first-pane'>
                   <div className="card__header--between">
                     <div className="card__title-section card__title-section--body-list card__title-section--small">
                        <div>
                           <h2 className="card__title card__title--small">Related</h2>
                        </div>
                     </div>
                     <div className="card__title-actions-container">
                        <div className="card__title-actions card__title-actions--small">
                           <div className="recommended-content__toggles">
                           <button aria-label="All" className="button button--no-style button-toggle button-toggle--active" type="button">
                              <span className="button__content">
                                 <span dir="auto" className="button__label">All</span>
                              </span>
                           </button>
                           <button aria-label="More from @2kliksphilip" className="button button--no-style button-toggle" type="button">
                              <span className="button__content">
                                 <span dir="auto" className="button__label">More from @2kliksphilip</span>
                              </span>
                           </button>
                           </div>
                        </div>
                     </div>
                     </div>
                      <div className='card__body card__body--list'>
                         <div>
                            <section className='claim-list claim-list--small'>
                               <ul className='ul--no-style'>
                               <li role="link" className="claim-preview__wrapper claim-preview__wrapper--small">
                                 <div className="claim-preview claim-preview--small">
                                    <Link aria-hidden="true" tabindex="-1" to="/@BitBoyCrypto:8/bitcoin-most-important-move-(this-is:f">
                                       <div data-background-image="https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/8udBSPQIDeo" className="media__thumb" style={{backgroundImage: "url(&quot;https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/8udBSPQIDeo)"}}>
                                       <div className="claim-preview__hover-actions">
                                          <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/signup">
                                             <span className="button__content">
                                             <svg size="16" className="icon icon--time" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
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
                                          <div className="claim-preview__overlay-properties .claim-preview__overlay-properties--small">
                                             <span>07:05</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Video" aria-hidden="true">
                                             <g>
                                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                             </g>
                                             </svg>
                                          </div>
                                       </div>
                                       </div>
                                    </Link>
                                    <div className="claim-preview__text">
                                       <div className="claim-preview-metadata">
                                       <div className="claim-preview-info">
                                          <Link aria-label="Bitcoin Most Important Move (This is Huge) by BitBoy Crypto 1 month ago, 00:07:05" to="/@BitBoyCrypto:8/bitcoin-most-important-move-(this-is:f">
                                             <div className="claim-preview__title">
                                             <span title="Bitcoin Most Important Move (This is Huge)" className="truncated-text">Bitcoin Most Important Move (This is Huge)</span>
                                             </div>
                                          </Link>
                                       </div>
                                       <div className="media__subtitle">
                                          <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/@BitBoyCrypto:8">
                                             <span className="button__content">
                                             <span dir="auto" className="channel-name">@BitBoyCrypto</span>
                                             </span>
                                          </Link>
                                          <span className="date_time" title="December 29th, 2021 08:05 PM">1 month ago</span>
                                       </div>
                                       <span></span>
                                       </div>
                                    </div>
                                 </div>
                                 <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--21">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MoreVertical" aria-hidden="true">
                                       <g>
                                       <circle cx="12" cy="5" r="1"></circle>
                                       <circle cx="12" cy="12" r="1"></circle>
                                       <circle cx="12" cy="19" r="1"></circle>
                                       </g>
                                    </svg>
                                 </button>
                                 </li>
                               </ul>
                            </section>
                         </div>
                      </div>
                   </div>
                </section>
             </main>
          </div>
      </>
  )
};

export default Singlecontent;
