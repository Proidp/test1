import React from 'react';
import { Link } from 'react-router-dom';


const Uploadinner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <div className="main--empty">
            <div className="yrbl__wrap">
                <img alt="Friendly gerbil" className="yrbl" src="https://spee.ch/spaceman-sad:d.png?quality=85&amp;height=457&amp;width=457"/>
                <div>
                <div className="yrbl__content">
                    <h2 className="section__title">Your wallet is empty</h2>
                    <div className="section__subtitle">
                    <div>
                        <p>You need <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc" aria-hidden="true">
                            <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                            <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear783c0905-580b-4421-974e-d378a45606de)"></path>
                            <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear783c0905-580b-4421-974e-d378a45606de)"></path>
                            <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear783c0905-580b-4421-974e-d378a45606de)"></path>
                            <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear783c0905-580b-4421-974e-d378a45606de)"></path>
                            <defs>
                            <linearGradient id="paint0_linear783c0905-580b-4421-974e-d378a45606de" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                <stop offset="0.2464" stop-color="#E700FF"></stop>
                                <stop offset="0.3166" stop-color="#E804F9"></stop>
                                <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                <stop offset="0.637" stop-color="#F037A5"></stop>
                                <stop offset="0.7635" stop-color="#F45672"></stop>
                                <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear783c0905-580b-4421-974e-d378a45606de" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                <stop offset="0.4233" stop-color="#FABD09"></stop>
                                <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear783c0905-580b-4421-974e-d378a45606de" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BAFF8E"></stop>
                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear783c0905-580b-4421-974e-d378a45606de" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
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
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linearfa198468-35ea-42a7-b4d8-a1349a49f061)"></path>
                            <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linearfa198468-35ea-42a7-b4d8-a1349a49f061)"></path>
                            <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linearfa198468-35ea-42a7-b4d8-a1349a49f061)"></path>
                            <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linearfa198468-35ea-42a7-b4d8-a1349a49f061)"></path>
                            <defs>
                            <linearGradient id="paint0_linearfa198468-35ea-42a7-b4d8-a1349a49f061" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                <stop offset="0.2464" stop-color="#E700FF"></stop>
                                <stop offset="0.3166" stop-color="#E804F9"></stop>
                                <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                <stop offset="0.637" stop-color="#F037A5"></stop>
                                <stop offset="0.7635" stop-color="#F45672"></stop>
                                <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linearfa198468-35ea-42a7-b4d8-a1349a49f061" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                <stop offset="0.4233" stop-color="#FABD09"></stop>
                                <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linearfa198468-35ea-42a7-b4d8-a1349a49f061" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BAFF8E"></stop>
                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linearfa198468-35ea-42a7-b4d8-a1349a49f061" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
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
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear67e0665d-4586-439c-93f2-9e62929c5923)"></path>
                            <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear67e0665d-4586-439c-93f2-9e62929c5923)"></path>
                            <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear67e0665d-4586-439c-93f2-9e62929c5923)"></path>
                            <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear67e0665d-4586-439c-93f2-9e62929c5923)"></path>
                            <defs>
                            <linearGradient id="paint0_linear67e0665d-4586-439c-93f2-9e62929c5923" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                <stop offset="0.2464" stop-color="#E700FF"></stop>
                                <stop offset="0.3166" stop-color="#E804F9"></stop>
                                <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                <stop offset="0.637" stop-color="#F037A5"></stop>
                                <stop offset="0.7635" stop-color="#F45672"></stop>
                                <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                <stop offset="1" stop-color="#FF9B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear67e0665d-4586-439c-93f2-9e62929c5923" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                <stop offset="0.4233" stop-color="#FABD09"></stop>
                                <stop offset="0.8292" stop-color="#FA6B00"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear67e0665d-4586-439c-93f2-9e62929c5923" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BAFF8E"></stop>
                                <stop offset="0.6287" stop-color="#008EBB"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear67e0665d-4586-439c-93f2-9e62929c5923" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
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
                </div>
                </div>
            </div>
            </div>
            <div className="card-stack">
            <div className="channel__selector">
                <button data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--1720">
                <div className="channel__list-item channel__list-item--selected">
                    <span className="icon__wrapper icon__wrapper--Anonymous">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Anonymous" aria-hidden="true">
                        <g>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </g>
                    </svg>
                    </span>
                    <h2 className="channel__list-text">Anonymous</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--ChevronDown" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                </button>
            </div>
            <section className="card--disabled card">
                <div className="card__first-pane">
                <div className="card__header--between">
                    <div className="card__title-section">
                    <div>
                        <h2 className="card__title">
                        <div>
                            <button aria-label="Video/Audio" className="button button--alt button-toggle button-toggle--active" type="button">
                            <span className="button__content">
                                <span dir="auto" className="button__label">Video/Audio</span>
                            </span>
                            </button>
                            <button aria-label="Post" className="button button--alt button-toggle" type="button">
                            <span className="button__content">
                                <span dir="auto" className="button__label">Post</span>
                            </span>
                            </button>
                        </div>
                        </h2>
                        <div className="card__subtitle">Upload that unlabeled video or cassette you found behind the TV in 1991</div>
                    </div>
                    </div>
                    <div className="card__title-actions-container"></div>
                </div>
                <div className="card__main-actions">
                    <fieldset-group className="fieldset-group--smushed fieldset-group--disabled-prefix">
                    <fieldset-section>
                        <label>Name</label>
                        <div className="form-field__prefix">odysee.com/</div>
                    </fieldset-section>
                    <fieldset-section>
                        <input type="text" id="content_name" value=""/>
                    </fieldset-section>
                    </fieldset-group>
                    <div className="form-field__help">
                    <span>Create a URL for this content. Simpler names are easier to find and remember.</span>
                    </div>
                    <fieldset-section>
                    <label for="content_title">Title</label>
                    <input type="text" id="content_title" placeholder="Descriptive titles work best" disabled="" value=""/>
                    </fieldset-section>
                    <fieldset-section>
                    <label>File</label>
                    <input-submit>
                        <input type="text" webkitdirectory="true" className="form-field--copyable" disabled="" readonly="" value="Select video or audio file to upload"/>
                        <button aria-label="Browse" className="button button--secondary button--disabled" disabled="" type="button">
                        <span className="button__content">
                            <span dir="auto" className="button__label">Browse</span>
                        </span>
                        </button>
                    </input-submit>
                    </fieldset-section>
                    <input type="file" accept="video/mp4,video/x-m4v,video/*,audio/*" style={{display: "none"}}/>
                    <p className="help">For video content, use MP4s in H264/AAC format and a friendly bitrate (under 5 Mbps) and resolution (720p) for more reliable streaming. Odysee uploads are restricted to 10 GB. <Link target="_blank" rel="noopener noreferrer" to="" className="button button--link" aria-label="Upload Guide">
                        <span className="button__content">
                        <span dir="auto" className="button__label">Upload Guide</span>
                        </span>
                    </Link>
                    </p>
                </div>
                </div>
            </section>
            <div className="card--disabled">
                <section className="card">
                <div className="card__first-pane">
                    <div className="card__main-actions">
                    <fieldset-section>
                        <div className="form-field__two-column">
                        <label for="content_description">Description</label>
                        </div>
                        <div className="MuiAutocomplete-root MuiAutocomplete-fullWidth css-1uvxhlw" aria-expanded="false">
                        <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                            <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-5mjz24">
                            <textarea aria-invalid="false" autocomplete="off" disabled="" id="content_description" placeholder="What is your content about? Use this space to include any other relevant details you may like to share about your content and channel." type="textarea" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline MuiInputBase-inputAdornedEnd css-v59wfm" aria-autocomplete="list" autocapitalize="none" spellcheck="false" maxlength="5000" style={{height: "80px", overflow: "hidden"}}></textarea>
                            <textarea aria-hidden="true" className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline MuiInputBase-inputAdornedEnd css-v59wfm" readonly="" tabindex="-1" style={{visibility: "hidden", position: "absolute", overflow: "hidden", height: "0px", top: "0px", left: "0px", transform: "translateZ(0px)", padding: "0px", width: "1222.69px"}}></textarea>
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
                    </div>
                </div>
                </section>
                <section className="card">
                <div className="card__first-pane">
                    <div className="card__main-actions">
                    <div className="column">
                        <div className="column__item thumbnail-picker__preview" style={{backgroundImage: "url(/public/img/thumbnail-missing.png)"}}>
                        <img src="" alt="Thumbnail Preview" style={{display: "none"}}/>
                        </div>
                        <div className="column__item">
                        <fieldset-section>
                            <label>Thumbnail</label>
                            <input-submit>
                            <input type="text" webkitdirectory="true" className="form-field--copyable" readonly="" value="Choose an enticing thumbnail"/>
                            <button aria-label="Browse" className="button button--secondary" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">Browse</span>
                                </span>
                            </button>
                            </input-submit>
                        </fieldset-section>
                        <input type="file" accept=".png, .jpg, .jpeg, .gif" style={{display: "none"}}/>
                        <div className="card__actions">
                            <button aria-label="Enter a thumbnail URL" className="button button--link" type="button">
                            <span className="button__content">
                                <span dir="auto" className="button__label">Enter a thumbnail URL</span>
                            </span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <p className="help">Upload your thumbnail to odysee.com. Recommended ratio is 16:9, 2MB max.</p>
                    </div>
                </div>
                </section>
                <section className="card">
                <div className="card__first-pane">
                    <div className="card__header--between">
                    <div className="card__title-section">
                        <span className="icon__wrapper icon__wrapper--Tag">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Tag" aria-hidden="true">
                            <g>
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7" y2="7"></line>
                            </g>
                        </svg>
                        </span>
                        <div>
                        {/* <h2 className="card__title"></h2> */}
                        <div className="card__subtitle">
                            <span>Add tags that are relevant to your content so those who're looking for it can find it more easily. If your content is best suited for mature audiences, ensure it is tagged 'mature'. <Link target="_blank" rel="noopener noreferrer" to="" className="button button--link" aria-label="Learn more">
                                <span className="button__content">
                                <span dir="auto" className="button__label">Learn more</span>
                                </span>
                            </Link>. </span>
                        </div>
                        </div>
                    </div>
                    <div className="card__title-actions-container"></div>
                    </div>
                    <div className="card__main-actions">
                    <form novalidate="" className="tags__input-wrapper">
                        <fieldset-section>
                        <label>Selected Tags (5 left)</label>
                        <ul className="tags--remove">
                            <Link className="button button--no-style tag tag--disabled tag--remove" title="View tag" disabled="" aria-label="example" to="">
                            <span className="button__content">
                                <span dir="auto" className="button__label">example</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--X" aria-hidden="true">
                                <g>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </g>
                                </svg>
                            </span>
                            </Link>
                        </ul>
                        <fieldset-section>
                            <label>Add Tags</label>
                            <input type="text" className="tag__input" placeholder="gaming, crypto" value=""/>
                        </fieldset-section>
                        <section>
                            <label>Known Tags</label>
                            <ul className="tags">
                            <button title="Add tag" aria-label="art" className="button button--no-style tag tag--add" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">art</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </g>
                                </svg>
                                </span>
                            </button>
                            <button title="Add tag" aria-label="automotive" className="button button--no-style tag tag--add" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">automotive</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </g>
                                </svg>
                                </span>
                            </button>
                            <button title="Add tag" aria-label="blockchain" className="button button--no-style tag tag--add" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">blockchain</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </g>
                                </svg>
                                </span>
                            </button>
                            <button title="Add tag" aria-label="comedy" className="button button--no-style tag tag--add" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">comedy</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </g>
                                </svg>
                                </span>
                            </button>
                            <button title="Add tag" aria-label="economics" className="button button--no-style tag tag--add" type="button">
                                <span className="button__content">
                                <span dir="auto" className="button__label">economics</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Plus" aria-hidden="true">
                                    <g>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </g>
                                </svg>
                                </span>
                            </button>
                            </ul>
                        </section>
                        </fieldset-section>
                    </form>
                    </div>
                </div>
                </section>
                <section className="card">
                <div className="card__first-pane">
                    <div className="card__main-actions">
                    <fieldset-section>
                        <label for="content_bid">
                        <span className="error__text">Deposit cannot be higher than your available balance: 0</span>
                        </label>
                        <input type="number" id="content_bid" min="0" step="any" placeholder="0.123" className="form-field--price-amount" disabled="" value="0.01"/>
                    </fieldset-section>
                    <div className="form-field__help">Any amount will give you the highest bid, but larger amounts help your content be trusted and discovered.</div>
                    </div>
                </div>
                </section>
                <section className="card">
                <div className="card__first-pane">
                    <div className="card__main-actions">
                    <fieldset-section className="radio">
                        <input id="content_free" type="radio" disabled="" checked=""/>
                        <label for="content_free">Free</label>
                    </fieldset-section>
                    <fieldset-section className="radio">
                        <input id="content_cost" type="radio" disabled=""/>
                        <label for="content_cost">Add a price to this file</label>
                    </fieldset-section>
                    </div>
                </div>
                </section>
                <section className="card--enable-overflow card">
                <div className="card__first-pane">
                    <div className="card__main-actions">
                    <div className="section__actions">
                        <button aria-label="Additional Options" className="button button--link" type="button">
                        <span className="button__content">
                            <span dir="auto" className="button__label">Additional Options</span>
                        </span>
                        </button>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            <section>
                <div className="section__actions">
                <button aria-label="Upload" className="button button--primary button--disabled" disabled="" type="button">
                    <span className="button__content">
                    <span dir="auto" className="button__label">Upload</span>
                    </span>
                </button>
                <button aria-label="New" className="button button--link" type="button">
                    <span className="button__content">
                    <span dir="auto" className="button__label">New</span>
                    </span>
                </button>
                </div>
                <p className="help">By continuing, you accept the <Link target="_blank" rel="noopener noreferrer" to="" className="button button--link" aria-label="Odysee Terms of Service">
                    <span className="button__content">
                    <span dir="auto" className="button__label">Odysee Terms of Service</span>
                    </span>
                </Link>. </p>
            </section>
            </div>
        </main>
        </div>
      </>
  )
};

export default Uploadinner;
