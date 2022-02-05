import React from 'react';
import { Link } from 'react-router-dom';


const Channelinner = () => {
  return (
      <>
      <div className="sidebar--pusher--filepage">
        <main id="main-content" className="main">
            <div className="card-stack"></div>
            <section className="main--empty">
            <div className="yrbl__wrap">
                <img alt="Friendly gerbil" className="yrbl" src="https://lbry2.vanwanet.com/speech/spaceman-happy:a.png"/>
                <div>
                <div className="yrbl__content">
                    <h2 className="section__title">No channels</h2>
                    <div className="section__subtitle">You haven't created a channel yet. All of your beautiful channels will be listed here!</div>
                </div>
                <div className="section__actions">
                    <Link className="button button--primary" aria-label="Create Channel" href="/channel/new">
                    <span className="button__content">
                        <span dir="auto" className="button__label">Create Channel</span>
                    </span>
                    </Link>
                </div>
                </div>
            </div>
            </section>
        </main>
        <footer className="footer">
            <ul className="navigation__tertiary footer__links">
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" href="" className="button button--no-style" aria-label="Community Guidelines">
                <span className="button__content">
                    <span dir="auto" className="button__label">Community Guidelines</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" href="" className="button button--no-style" aria-label="FAQ">
                <span className="button__content">
                    <span dir="auto" className="button__label">FAQ</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" href="" className="button button--no-style" aria-label="Support">
                <span className="button__content">
                    <span dir="auto" className="button__label">Support</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" href="" className="button button--no-style" aria-label="Terms">
                <span className="button__content">
                    <span dir="auto" className="button__label">Terms</span>
                </span>
                </Link>
            </li>
            <li className="footer__link">
                <Link target="_blank" rel="noopener noreferrer" href="" className="button button--no-style" aria-label="Privacy Policy">
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

export default Channelinner;
