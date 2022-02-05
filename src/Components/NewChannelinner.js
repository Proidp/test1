import React from 'react';
import { Link } from 'react-router-dom';


const NewChannelinner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <div className="main--contained">
            <header className="channel-cover">
                <div className="channel__quick-actions">
                <button title="Cover" aria-label="Cover" className="button button--alt" type="button">
                    <span className="button__content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Camera" aria-hidden="true">
                        <g>
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                        </g>
                    </svg>
                    </span>
                </button>
                </div>
                <div className="channel__primary-info">
                <div className="channel__edit-thumb">
                    <button title="Edit" aria-label="Edit" className="button button--alt" type="button">
                    <span className="button__content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Camera" aria-hidden="true">
                        <g>
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                            <circle cx="12" cy="13" r="4"></circle>
                        </g>
                        </svg>
                    </span>
                    </button>
                </div>
                <div className="channel-thumbnail channel__thumbnail--channel-page">
                    <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://odysee.com/public/img/gerbil.png" style={{visibility: "visible"}}/>
                </div>
                
                </div>
                <div className="channel-cover__gradient"></div>
            </header>
            <div data-reach-tabs="" className="tabs">
                <div data-reach-tab-list="" role="tablist" className="tabs__list tabs__list--channel-page">
                <button data-reach-tab="" role="tab" id="tab:1:0" tabindex="0" aria-selected="true" aria-controls="panel:1:0" className="tab" data-selected="">General</button>
                <button data-reach-tab="" role="tab" id="tab:1:1" tabindex="-1" aria-selected="false" aria-controls="panel:1:1" className="tab">Credit Details</button>
                <button data-reach-tab="" role="tab" id="tab:1:2" tabindex="-1" aria-selected="false" aria-controls="panel:1:2" className="tab">Tags</button>
                <button data-reach-tab="" role="tab" id="tab:1:3" tabindex="-1" aria-selected="false" aria-controls="panel:1:3" className="tab">Other</button>
                </div>
                <div className="tab__divider" style={{left: "209px", width: "59.4531px"}}></div>
                <div data-reach-tab-panels="">
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:0" id="panel:1:0" className="tab__panel">
                    <section className="card">
                    <div className="card__first-pane">
                        <div className="card__body card__body--no-title">
                        <fieldset-group className="fieldset-group--smushed fieldset-group--disabled-prefix">
                            <fieldset-section>
                            <label for="channel_name">Name</label>
                            <div className="form-field__prefix" style={{paddingTop: "10px", textAlign: "center"}}>@</div>
                            </fieldset-section>
                            <fieldset-section style={{width: "100%", marginTop: "1.5rem"}}>
                            <input type="text" id="channel_name" placeholder="MyAwesomeChannel" value=""/>
                            </fieldset-section>
                        </fieldset-group>
                        <fieldset-section>
                            <label for="channel_title2">Title</label>
                            <input type="text" id="channel_title2" placeholder="My Awesome Channel" value=""/>
                        </fieldset-section>
                        <div className="form-field--SimpleMDE">
                            <fieldset-section>
                            <div className="form-field__two-column">
                                <div>
                                <label for="content_description2">Description</label>
                                </div>
                            </div>
                            <div id="content_description2-wrapper" placeholder="Description of your content" type="textarea">
                                <textarea id="content_description2" style={{display: "none"}}></textarea>
                                <div className="EasyMDEContainer">
                                <div className="editor-toolbar">
                                    <button className="bold" type="button" title="Bold (Ctrl-B)" tabindex="-1">
                                    <i className="fa fa-bold"></i>
                                    </button>
                                    <button className="italic" type="button" title="Italic (Ctrl-I)" tabindex="-1">
                                    <i className="fa fa-italic"></i>
                                    </button>
                                    <i className="separator">|</i>
                                    <button className="quote" type="button" title="Quote (Ctrl-')" tabindex="-1">
                                    <i className="fa fa-quote-left"></i>
                                    </button>
                                    <button className="unordered-list" type="button" title="Generic List (Ctrl-L)" tabindex="-1">
                                    <i className="fa fa-list-ul"></i>
                                    </button>
                                    <button className="ordered-list" type="button" title="Numbered List (Ctrl-Alt-L)" tabindex="-1">
                                    <i className="fa fa-list-ol"></i>
                                    </button>
                                    <i className="separator">|</i>
                                    <button className="link" type="button" title="Create Link (Ctrl-K)" tabindex="-1">
                                    <i className="fa fa-link"></i>
                                    </button>
                                    <i className="separator">|</i>
                                    <button className="preview no-disable" type="button" title="Toggle Preview (Ctrl-P)" tabindex="-1">
                                    <i className="fa fa-eye"></i>
                                    </button>
                                    <i className="separator">|</i>
                                    <button className="guide no-disable" type="button" title="Markdown Guide" tabindex="-1">
                                    <i className="fa fa-question-circle"></i>
                                    </button>
                                </div>
                                <div className="CodeMirror cm-s-easymde CodeMirror-wrap" translate="no">
                                    <div style={{overflow: "hidden", position: "relative", width: "3px", height: "0px", top: "15px", left: "15px"}}>
                                    <textarea autocorrect="off" autocapitalize="off" spellcheck="false" style={{position: "absolute", bottom: "-1em", padding: "0px", width: "1000px", height: "1em", minHeight: "1em", outline: "none"}} tabindex="0"></textarea>
                                    </div>
                                    <div className="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true">
                                    <div style={{minWidth: "1px", height: "0px"}}></div>
                                    </div>
                                    <div className="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true">
                                    <div style={{height: "100%", minHeight: "1px", width: "0px"}}></div>
                                    </div>
                                    <div className="CodeMirror-scrollbar-filler" cm-not-content="true"></div>
                                    <div className="CodeMirror-gutter-filler" cm-not-content="true"></div>
                                    <div className="CodeMirror-scroll" tabindex="-1" style={{minHeight: "300px"}}>
                                    <div className="CodeMirror-sizer" style={{marginLeft: "0px", marginBottom: "-12px", borderRightWidth: "38px", minHeight: "32px", paddingRight: "0px", paddingBottom: "0px"}}>
                                        <div style={{position: "relative", top: "0px"}}>
                                        <div className="CodeMirror-lines" role="presentation">
                                            <div role="presentation" style={{position: "relative", outline: "none"}}>
                                            <div className="CodeMirror-measure">
                                                <pre className="CodeMirror-line-like">
                                                                                                        <span>xxxxxxxxxx</span>
                                                                                                    </pre>
                                            </div>
                                            <div className="CodeMirror-measure"></div>
                                            <div style={{position: "relative", zIndex: "1"}}></div>
                                            <div className="CodeMirror-cursors">
                                                <div className="CodeMirror-cursor" style={{left: "4px", top: "0px", height: "24px"}}>&nbsp;</div>
                                            </div>
                                            <div className="CodeMirror-code" role="presentation" style={{textRendering: "auto"}}>
                                                <pre className=" CodeMirror-line " role="presentation">
                                                                                                        <span role="presentation" style={{paddingRight: "0.1px"}}>
                                                                                                            <span cm-text="">&ZeroWidthSpace;</span>
                                                                                                        </span>
                                                                                                    </pre>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div style={{position: "absolute", height: "38px", width: "1px", borderBottom: "0px solid transparent", top: "32px"}}></div>
                                    <div className="CodeMirror-gutters" style={{display: "none", height: "70px"}}></div>
                                    </div>
                                </div>
                                <div className="editor-preview-side editor-preview"></div>
                                <div className="editor-statusbar">
                                    <span className="autosave"></span>
                                    <span className="lines">1</span>
                                    <span className="words">0</span>
                                    <span className="cursor">0:0</span>
                                </div>
                                </div>
                            </div>
                            </fieldset-section>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:1" id="panel:1:1" className="tab__panel" hidden="">
                    <section className="card">
                    <div className="card__first-pane">
                        <div className="card__body card__body--no-title">
                        <fieldset-section>
                            <label for="content_bid2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc icon__lbc--after-text" aria-hidden="true">
                                <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7)"></path>
                                <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7)"></path>
                                <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7)"></path>
                                <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7)"></path>
                                <defs>
                                <linearGradient id="paint0_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.2464" stop-color="#E700FF"></stop>
                                    <stop offset="0.3166" stop-color="#E804F9"></stop>
                                    <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                    <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                    <stop offset="0.637" stop-color="#F037A5"></stop>
                                    <stop offset="0.7635" stop-color="#F45672"></stop>
                                    <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                    <stop offset="1" stop-color="#FF9B00"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.4233" stop-color="#FABD09"></stop>
                                    <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                </linearGradient>
                                <linearGradient id="paint2_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BAFF8E"></stop>
                                    <stop offset="0.6287" stop-color="#008EBB"></stop>
                                </linearGradient>
                                <linearGradient id="paint3_lineara507a8e6-39c5-4fe9-818e-40f148bc59e7" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BAFF8E"></stop>
                                    <stop offset="0.6287" stop-color="#008EBB"></stop>
                                </linearGradient>
                                <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                                </defs>
                            </svg>Deposit </label>
                            <input type="number" id="content_bid2" className="form-field--price-amount" step="any" min="0.0" placeholder="0.1" value="0.001"/>
                        </fieldset-section>
                        <div className="form-field__help">Increasing your deposit can help your channel be discovered more easily. <span className="help--spendable">
                            <span title="0.15" className="">
                                <span className="credit-amount">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="icon icon--LBC icon__lbc icon__lbc--after-text" aria-hidden="true">
                                    <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="black"></path>
                                    <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z" fill="url(#paint0_linear8c6095a0-5315-442a-bd63-849449584c0b)"></path>
                                    <path d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z" fill="url(#paint1_linear8c6095a0-5315-442a-bd63-849449584c0b)"></path>
                                    <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z" fill="url(#paint2_linear8c6095a0-5315-442a-bd63-849449584c0b)"></path>
                                    <path d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z" fill="url(#paint3_linear8c6095a0-5315-442a-bd63-849449584c0b)"></path>
                                    <defs>
                                    <linearGradient id="paint0_linear8c6095a0-5315-442a-bd63-849449584c0b" x1="3.7206" y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.2464" stop-color="#E700FF"></stop>
                                        <stop offset="0.3166" stop-color="#E804F9"></stop>
                                        <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                        <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                        <stop offset="0.637" stop-color="#F037A5"></stop>
                                        <stop offset="0.7635" stop-color="#F45672"></stop>
                                        <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                        <stop offset="1" stop-color="#FF9B00"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear8c6095a0-5315-442a-bd63-849449584c0b" x1="2.60274" y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.4233" stop-color="#FABD09"></stop>
                                        <stop offset="0.8292" stop-color="#FA6B00"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear8c6095a0-5315-442a-bd63-849449584c0b" x1="6.8682" y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear8c6095a0-5315-442a-bd63-849449584c0b" x1="25.2522" y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#BAFF8E"></stop>
                                        <stop offset="0.6287" stop-color="#008EBB"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"></rect>
                                    </clipPath>
                                    </defs>
                                </svg>0.15 </span>
                            </span> available. </span>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:2" id="panel:1:2" className="tab__panel" hidden="">
                    <section className="card">
                    <div className="card__first-pane">
                        <div className="card__body card__body--no-title">
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
                </div>
                <div data-reach-tab-panel="" role="tabpanel" tabindex="-1" aria-labelledby="tab:1:3" id="panel:1:3" className="tab__panel" hidden="">
                    <section className="card">
                    <div className="card__first-pane">
                        <div className="card__body card__body--no-title">
                        <fieldset-section>
                            <label for="channel_website2">Website</label>
                            <input type="text" id="channel_website2" placeholder="aprettygoodsite.com" value=""/>
                        </fieldset-section>
                        <fieldset-section>
                            <label for="content_email2">Email</label>
                            <input type="text" id="content_email2" placeholder="yourstruly@example.com" value=""/>
                        </fieldset-section>
                        <fieldset-section className="">
                            <label for="language_select">Primary Language</label>
                            <select id="language_select">
                            <option value="none">None selected</option>
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
                        <div className="form-field__help">Your main content language</div>
                        <fieldset-section className="">
                            <label for="language_select2">Secondary Language</label>
                            <select id="language_select2" disabled="">
                            <option value="none">None selected</option>
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
                        <div className="form-field__help">Your other content language</div>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </div>
            <section className="card--after-tabs card">
                <div className="card__first-pane">
                <div className="card__main-actions">
                    <div className="section__actions">
                    <button aria-label="Submit" className="button button--primary button--disabled" disabled="" type="button">
                        <span className="button__content">
                        <span dir="auto" className="button__label">Submit</span>
                        </span>
                    </button>
                    <button aria-label="Cancel" className="button button--link" type="button">
                        <span className="button__content">
                        <span dir="auto" className="button__label">Cancel</span>
                        </span>
                    </button>
                    </div>
                    <p className="help">After submitting, it will take a few minutes for your changes to be live for everyone.</p>
                </div>
                </div>
            </section>
            </div>
        </main>
        </div>
      </>
  )
};

export default NewChannelinner;
