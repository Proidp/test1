import React from 'react';
import { Link } from 'react-router-dom';


const Listsinner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <label className="claim-list__header-label">
            <span>
                <svg size="10" className="icon icon--stack"  viewBox="0 0 24 24" width="10" height="10" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                <g transform="matrix(1,0,0,1,0,0)">
                    <path d="M22.91,6.953,12.7,1.672a1.543,1.543,0,0,0-1.416,0L1.076,6.953a.615.615,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.91,8.047a.616.616,0,0,0,0-1.094Z"></path>
                    <path d="M.758,12.75l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,12.75"></path>
                    <path d="M.758,17.25l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,17.25"></path>
                </g>
                </svg>Lists </span>
            </label>
            <div className="claim-grid__wrapper">
            <h1 className="claim-grid__header claim-grid__title">Watch Later <div className="claim-grid__title--empty">(Empty)</div>
            </h1>
            </div>
            <div className="claim-grid__wrapper">
            <h1 className="claim-grid__header claim-grid__title">Favorites <div className="claim-grid__title--empty">(Empty)</div>
            </h1>
            </div>
            <div className="claim-grid__wrapper">
            <div className="claim-grid__header section">
                <h1 className="claim-grid__title">
                <Link className="button button--link claim-grid__title" to="/playlists">
                    <span className="button__content">
                    <span dir="auto" className="button__label">
                        <span className="claim-grid__title-span">Playlists <div className="claim-grid__title--empty">
                            <svg size="16" className="icon icon--stack icon--margin-right"  viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill="none">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path d="M22.91,6.953,12.7,1.672a1.543,1.543,0,0,0-1.416,0L1.076,6.953a.615.615,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.91,8.047a.616.616,0,0,0,0-1.094Z"></path>
                                <path d="M.758,12.75l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,12.75"></path>
                                <path d="M.758,17.25l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,17.25"></path>
                            </g>
                            </svg>
                        </div>
                        </span>
                    </span>
                    </span>
                </Link>
                <div className="claim-grid__title--empty">(Empty)</div>
                </h1>
            </div>
            <div className="section__header-action-stack">
                <div className="section__header--actions">
                <div className="claim-search__wrapper">
                    <div className="claim-search__menu-group">
                    <button aria-label="All" className="button button--alt button-toggle button-toggle--active" type="button">
                        <span className="button__content">
                        <span dir="auto" className="button__label">All</span>
                        </span>
                    </button>
                    <button aria-label="Private" className="button button--alt button-toggle" type="button">
                        <span className="button__content">
                        <span dir="auto" className="button__label">Private</span>
                        </span>
                    </button>
                    <button aria-label="Public" className="button button--alt button-toggle" type="button">
                        <span className="button__content">
                        <span dir="auto" className="button__label">Public</span>
                        </span>
                    </button>
                    </div>
                </div>
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
                <p className="collection-grid__results-summary">
                <Link className="button button--link" to="/playlists">
                    <span className="button__content">
                    <span dir="auto" className="button__label">
                        <span className="claim-grid__title-span">View All Playlists</span>
                    </span>
                    </span>
                </Link>
                </p>
            </div>
            <div className="main--empty">
                <div className="yrbl__wrap">
                <img alt="Friendly gerbil" className="yrbl" src="https://spee.ch/spaceman-sad:d.png?quality=85&amp;height=457&amp;width=457"/>
                <div>
                    <div className="yrbl__content">
                    <h2 className="section__title">You have no lists yet. Better start hoarding!</h2>
                    <div className="section__subtitle"></div>
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
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Support">
                <span className="button__content">
                    <span dir="auto" className="button__label">Support</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" to="" className="button button--no-style" aria-label="Terms">
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

export default Listsinner;
