import React from 'react';
import { Link } from 'react-router-dom';


const Music = () => {
  return (
      <>
      <div className="claim-grid__wrapper">
        <h1 className="claim-grid__header">
          <Link className="button button--link" to="/music">
          <span className="button__content">
            <span className="icon__wrapper icon__wrapper--MusicCategory">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--MusicCategory claim-grid__header-icon" >
                <g>
                  <path d="M19.8 6.267a1 1 0 01-1.414 0l-1.411-1.414a1 1 0 010-1.415l.186-.186a1 1 0 01.391-.242l4.536-1.51a.927.927 0 01.949 1.535z"></path>
                  <path d="M16.975 4.853L9.55 12.277l1.414 1.414 7.425-7.424"></path>
                  <path d="M11.187 10.64a2.881 2.881 0 01-.8-2.538 6.278 6.278 0 01.738-1.99A1.15 1.15 0 009.3 4.749a6.56 6.56 0 00-1.91 3.406c-.22 1.038-1 2.463-2.1 2.485a4.638 4.638 0 00-4.6 4.746 5.927 5.927 0 001.812 4.249l1.1 1.1a5.93 5.93 0 004.249 1.812 4.639 4.639 0 004.746-4.6c0-1.1 1.235-1.789 2.286-1.755a4.13 4.13 0 003.324-1.269 1.1 1.1 0 00-.719-1.846c-3.306-.254-4-.141-4.891-1.029M7.782 13.338l2.122 2.121"></path>
                  <path d="M4.954 14.753l3.535 3.535-1.768 1.768-3.535-3.535z"></path>
                </g>
              </svg>
            </span>
            <span className="claim-grid__title">Music</span>
          </span>
          </Link>
        </h1>

        <div>
          <ul className="claim-grid">
          <li className="card claim-preview--tile">
            <Link role="none" tabindex="-1"  to="/playvideo">
                <div data-background-image="https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                <div className="claim-preview__hover-actions">
                    <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/$/signup?redirect=/">
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
                    <span>36:17</span>
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
                <Link aria-label="Blockchain Social &amp; Crypto Earnings Report #25 by Scott Cunningham 3 hours ago, 00:36:17" to="/playvideo">
                <h2 className="claim-tile__title">
                    <span title="Blockchain Social &amp; Crypto Earnings Report #25" className="truncated-text">Blockchain Social &amp; Crypto Earnings Report #25</span>
                </h2>
                </Link>
                <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--174">
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
                <div className="claim-tile__info">
                <Link className="button button--no-style"  tabindex="-1" to="/profile">
                    <span className="button__content">
                    <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/0/c9e781fef6deb7c9.jpg?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                        <div className="channel-staked__wrapper">
                        <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                        </svg>
                        </div>
                    </div>
                    </span>
                </Link>
                <div className="claim-tile__about">
                    <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/profile">
                    <span className="button__content">
                        <span dir="auto" className="channel-name">@ScottCBusiness</span>
                    </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                    <span className="date_time" title="January 30th, 2022 12:52 AM">2 hours ago</span>
                    </div>
                </div>
                </div>
            </div>
            </li>
          <li className="card claim-preview--tile">
            <Link role="none" tabindex="-1"  to="/playvideo">
                <div data-background-image="https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                <div className="claim-preview__hover-actions">
                    <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/$/signup?redirect=/">
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
                    <span>36:17</span>
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
                <Link aria-label="Blockchain Social &amp; Crypto Earnings Report #25 by Scott Cunningham 3 hours ago, 00:36:17" to="/playvideo">
                <h2 className="claim-tile__title">
                    <span title="Blockchain Social &amp; Crypto Earnings Report #25" className="truncated-text">Blockchain Social &amp; Crypto Earnings Report #25</span>
                </h2>
                </Link>
                <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--174">
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
                <div className="claim-tile__info">
                <Link className="button button--no-style"  tabindex="-1" to="/profile">
                    <span className="button__content">
                    <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/0/c9e781fef6deb7c9.jpg?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                        <div className="channel-staked__wrapper">
                        <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                        </svg>
                        </div>
                    </div>
                    </span>
                </Link>
                <div className="claim-tile__about">
                    <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/profile">
                    <span className="button__content">
                        <span dir="auto" className="channel-name">@ScottCBusiness</span>
                    </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                    <span className="date_time" title="January 30th, 2022 12:52 AM">2 hours ago</span>
                    </div>
                </div>
                </div>
            </div>
            </li>
          <li className="card claim-preview--tile">
            <Link role="none" tabindex="-1"  to="/playvideo">
                <div data-background-image="https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                <div className="claim-preview__hover-actions">
                    <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/$/signup?redirect=/">
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
                    <span>36:17</span>
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
                <Link aria-label="Blockchain Social &amp; Crypto Earnings Report #25 by Scott Cunningham 3 hours ago, 00:36:17" to="/playvideo">
                <h2 className="claim-tile__title">
                    <span title="Blockchain Social &amp; Crypto Earnings Report #25" className="truncated-text">Blockchain Social &amp; Crypto Earnings Report #25</span>
                </h2>
                </Link>
                <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--174">
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
                <div className="claim-tile__info">
                <Link className="button button--no-style"  tabindex="-1" to="/profile">
                    <span className="button__content">
                    <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/0/c9e781fef6deb7c9.jpg?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                        <div className="channel-staked__wrapper">
                        <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                        </svg>
                        </div>
                    </div>
                    </span>
                </Link>
                <div className="claim-tile__about">
                    <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/profile">
                    <span className="button__content">
                        <span dir="auto" className="channel-name">@ScottCBusiness</span>
                    </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                    <span className="date_time" title="January 30th, 2022 12:52 AM">2 hours ago</span>
                    </div>
                </div>
                </div>
            </div>
            </li>
          <li className="card claim-preview--tile">
            <Link role="none" tabindex="-1"  to="/playvideo">
                <div data-background-image="https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                <div className="claim-preview__hover-actions">
                    <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/$/signup?redirect=/">
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
                    <span>36:17</span>
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
                <Link aria-label="Blockchain Social &amp; Crypto Earnings Report #25 by Scott Cunningham 3 hours ago, 00:36:17" to="/playvideo">
                <h2 className="claim-tile__title">
                    <span title="Blockchain Social &amp; Crypto Earnings Report #25" className="truncated-text">Blockchain Social &amp; Crypto Earnings Report #25</span>
                </h2>
                </Link>
                <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--174">
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
                <div className="claim-tile__info">
                <Link className="button button--no-style"  tabindex="-1" to="/profile">
                    <span className="button__content">
                    <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/0/c9e781fef6deb7c9.jpg?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                        <div className="channel-staked__wrapper">
                        <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                        </svg>
                        </div>
                    </div>
                    </span>
                </Link>
                <div className="claim-tile__about">
                    <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/profile">
                    <span className="button__content">
                        <span dir="auto" className="channel-name">@ScottCBusiness</span>
                    </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                    <span className="date_time" title="January 30th, 2022 12:52 AM">2 hours ago</span>
                    </div>
                </div>
                </div>
            </div>
            </li>
          <li className="card claim-preview--tile">
            <Link role="none" tabindex="-1"  to="/playvideo">
                <div data-background-image="https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390" className="media__thumb" style={{backgroundImage: "url(https://spee.ch/5/6d3799ffb79279b4.jpg?quality=85&amp;height=220&amp;width=390)"}}>
                <div className="claim-preview__hover-actions">
                    <Link className="button button--no-style button--file-action" title="Add to Watch Later" aria-label="Add" to="/$/signup?redirect=/">
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
                    <span>36:17</span>
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
                <Link aria-label="Blockchain Social &amp; Crypto Earnings Report #25 by Scott Cunningham 3 hours ago, 00:36:17" to="/playvideo">
                <h2 className="claim-tile__title">
                    <span title="Blockchain Social &amp; Crypto Earnings Report #25" className="truncated-text">Blockchain Social &amp; Crypto Earnings Report #25</span>
                </h2>
                </Link>
                <button className="menu__button claim__menu-button" data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button" id="menu-button--174">
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
                <div className="claim-tile__info">
                <Link className="button button--no-style"  tabindex="-1" to="/profile">
                    <span className="button__content">
                    <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img alt="" className="channel-thumbnail__custom" loading="lazy" src="https://spee.ch/0/c9e781fef6deb7c9.jpg?quality=85&amp;height=100&amp;width=0" style={{visibility: "visible"}}/>
                        <div className="channel-staked__wrapper">
                        <svg size="14" className="icon icon--ChannelLevel5 channel-staked__indicator channel-staked__indicator--controlling"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4.89L13.875 8.31C14.291 9.07838 14.9216 9.70903 15.69 10.125L19.11 12L15.69 13.875C14.9216 14.291 14.291 14.9216 13.875 15.69L12 19.11L10.125 15.69C9.70903 14.9216 9.07838 14.291 8.31 13.875L4.89 12L8.31 10.125C9.07838 9.70903 9.70903 9.07838 10.125 8.31L12 4.89ZM3 1.89C2.76692 2.36024 2.3952 2.74767 1.935 3L0 4.005L1.935 5.055C2.38429 5.28744 2.75483 5.64753 3 6.09L4.05 8.025L5.1 6.09C5.33543 5.65943 5.68943 5.30543 6.12 5.07L8.055 4.02L6.09 3C5.65943 2.76457 5.30543 2.41057 5.07 1.98L4.005 0L3 1.89ZM18.975 1.89C18.7396 2.32057 18.3856 2.67457 17.955 2.91L16.02 3.96L17.955 5.01C18.3856 5.24543 18.7396 5.59943 18.975 6.03L20.025 7.965L21 6.09C21.2354 5.65943 21.5894 5.30543 22.02 5.07L24 4.005L22.065 3C21.6114 2.75957 21.2404 2.38858 21 1.935L19.995 0L18.975 1.89ZM3 17.91C2.76457 18.3406 2.41057 18.6946 1.98 18.93L0 19.995L1.935 21.045C2.36557 21.2804 2.71957 21.6344 2.955 22.065L4.005 24L5.055 22.065C5.28744 21.6157 5.64753 21.2452 6.09 21L8.025 19.95L6.09 18.9C5.65943 18.6646 5.30543 18.3106 5.07 17.88L4.02 15.945L3 17.91ZM18.975 17.91C18.7396 18.3406 18.3856 18.6946 17.955 18.93L16.02 19.98L17.955 21.03C18.3856 21.2654 18.7396 21.6194 18.975 22.05L20.025 23.985L21.075 22.05C21.3104 21.6194 21.6644 21.2654 22.095 21.03L24.03 19.98L22.095 18.93C21.6644 18.6946 21.3104 18.3406 21.075 17.91L20.025 15.975L18.975 17.91Z"></path>
                        </svg>
                        </div>
                    </div>
                    </span>
                </Link>
                <div className="claim-tile__about">
                    <Link className="button button--no-style button--uri-indicator"  tabindex="0" to="/profile">
                    <span className="button__content">
                        <span dir="auto" className="channel-name">@ScottCBusiness</span>
                    </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                    <span className="date_time" title="January 30th, 2022 12:52 AM">2 hours ago</span>
                    </div>
                </div>
                </div>
            </div>
            </li>
          </ul>
        </div>
        <Link
          className="button button--link claim-grid__title--secondary"
          aria-label="View More"
          to="/arts"
        >
          <span className="button__content">
            <span dir="auto" className="button__label">
              View More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon--ChevronRight"
              
            >
              <g fill="none" fill-rule="evenodd" stroke-linecap="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </g>
            </svg>
          </span>
        </Link>
      </div>
      </>
  )
};

export default Music;
