import React from "react";
import { Link } from "react-router-dom";


const CreativeArts = () => {
  return (
    <>
      <div className="claim-grid__wrapper">
        <h1 className="claim-grid__header">
          <Link className="button button--link" to="/arts">
            <span className="button__content">
              <span className="icon__wrapper icon__wrapper--Artists">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon--Artists claim-grid__header-icon"
                  
                >
                  <g>
                    <path d="M10.107,16.884,22.372,4.657a2.5,2.5,0,0,0-3.744-3.314L7.954,15.04"></path>
                    <path d="M1.285,22.879a.5.5,0,0,1,.027-.915C3.693,21,2.926,18.286,3.633,16.835a3.56,3.56,0,0,1,4.728-1.627C13.677,17.8,7.349,25.765,1.285,22.879Z"></path>
                  </g>
                </svg>
              </span>
              <span className="claim-grid__title">Creative Arts</span>
            </span>
          </Link>
        </h1>

        <div>
          <ul className="claim-grid">
            <li className="card claim-preview--tile">
              <Link
                role="none"
                tabindex="-1"
                
                to="/playvideo"
              >
                <div
                  data-background-image="https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g"
                  className="media__thumb"
                  style={{
                    backgroundImage:
                      "url(https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g)",
                  }}
                >
                  <div className="claim-preview__hover-actions">
                    <Link
                      className="button button--no-style button--file-action"
                      title="Add to Watch Later"
                      aria-label="Add"
                      to="/signup"
                    >
                      <span className="button__content">
                        <svg
                          size="16"
                          className="icon icon--time"
                          
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="currentColor"
                          fill="none"
                        >
                          <g transform="matrix(1,0,0,1,0,0)">
                            <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                            <path d="M12 12L12 8.25"></path>
                            <path d="M12 12L16.687 16.688"></path>
                          </g>
                        </svg>
                        <span dir="auto" className="button__label">
                          Add
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="claim-preview__file-property-overlay">
                    <div className="claim-preview__overlay-properties">
                      <span>02:06</span>
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
                        className="icon icon--Video"
                        
                      >
                        <g>
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect
                            x="1"
                            y="5"
                            width="15"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="claim-tile__header">
                <Link
                  aria-label="Elon wants vampires in space by Kurosai 5 hours ago, 00:02:06"
                  to="/playvideo"
                >
                  <h2 className="claim-tile__title">
                    <span
                      title="Elon wants vampires in space"
                      className="truncated-text"
                    >
                      Elon wants vampires in space
                    </span>
                  </h2>
                </Link>
                <button
                  className="menu__button claim__menu-button"
                  data-reach-menu-button=""
                  aria-expanded="false"
                  aria-haspopup="menu"
                  type="button"
                  id="menu-button--28"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon--MoreVertical"
                    
                  >
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
                  <Link
                    className="button button--no-style"
                    
                    tabindex="-1"
                    to="/profile"
                  >
                    <span className="button__content">
                      <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img
                          alt=""
                          className="channel-thumbnail__custom"
                          loading="lazy"
                          src="https://thumbnails.odycdn.com/optimize/s:0:100/quality:85/plain/https://thumbnails.lbry.com/UCdxV8WMWlO1bWKwo9IwJiTw"
                          style={{ visibility: "visible" }}
                        />
                        <div className="channel-staked__wrapper">
                          <svg
                            size="14"
                            className="icon icon--ChannelLevel2 channel-staked__indicator channel-staked__indicator--controlling"
                            
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 24"
                            width="14"
                            height="14"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15.705 7.31999L17.625 10.845C18.0591 11.6316 18.7099 12.2772 19.5 12.705L23.025 14.625L19.5 16.5C18.7154 16.9301 18.0701 17.5754 17.64 18.36L15.72 21.885L13.785 18.435C13.3625 17.6207 12.7106 16.9479 11.91 16.5L8.38499 14.64L11.91 12.705C12.7001 12.2772 13.3508 11.6316 13.785 10.845L15.705 7.31999ZM4.37999 4.31999C4.10558 4.81954 3.69454 5.23058 3.19499 5.50499L0.974991 6.67499L3.19499 7.88999C3.68451 8.14404 4.09453 8.5281 4.37999 8.99999L5.59499 11.22L6.80999 8.99999C7.0844 8.50045 7.49544 8.08941 7.99499 7.81499L10.215 6.59999L7.99499 5.44499C7.49544 5.17058 7.0844 4.75954 6.80999 4.25999L5.59499 2.05499L4.37999 4.31999Z"></path>
                          </svg>
                        </div>
                      </div>
                    </span>
                  </Link>
                  <div className="claim-tile__about">
                    <Link
                      className="button button--no-style button--uri-indicator"
                      
                      tabindex="0"
                      to="/profile"
                    >
                      <span className="button__content">
                        <span dir="auto" className="channel-name">
                          @Kurosai
                        </span>
                      </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                      <span
                        className="date_time"
                        title="January 29th, 2022 10:00 PM"
                      >
                        4 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card claim-preview--tile">
              <Link
                role="none"
                tabindex="-1"
                
                to="/playvideo"
              >
                <div
                  data-background-image="https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g"
                  className="media__thumb"
                  style={{
                    backgroundImage:
                      "url(https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g)",
                  }}
                >
                  <div className="claim-preview__hover-actions">
                    <Link
                      className="button button--no-style button--file-action"
                      title="Add to Watch Later"
                      aria-label="Add"
                      to="/signup"
                    >
                      <span className="button__content">
                        <svg
                          size="16"
                          className="icon icon--time"
                          
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="currentColor"
                          fill="none"
                        >
                          <g transform="matrix(1,0,0,1,0,0)">
                            <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                            <path d="M12 12L12 8.25"></path>
                            <path d="M12 12L16.687 16.688"></path>
                          </g>
                        </svg>
                        <span dir="auto" className="button__label">
                          Add
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="claim-preview__file-property-overlay">
                    <div className="claim-preview__overlay-properties">
                      <span>02:06</span>
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
                        className="icon icon--Video"
                        
                      >
                        <g>
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect
                            x="1"
                            y="5"
                            width="15"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="claim-tile__header">
                <Link
                  aria-label="Elon wants vampires in space by Kurosai 5 hours ago, 00:02:06"
                  to="/playvideo"
                >
                  <h2 className="claim-tile__title">
                    <span
                      title="Elon wants vampires in space"
                      className="truncated-text"
                    >
                      Elon wants vampires in space
                    </span>
                  </h2>
                </Link>
                <button
                  className="menu__button claim__menu-button"
                  data-reach-menu-button=""
                  aria-expanded="false"
                  aria-haspopup="menu"
                  type="button"
                  id="menu-button--28"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon--MoreVertical"
                    
                  >
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
                  <Link
                    className="button button--no-style"
                    
                    tabindex="-1"
                    to="/profile"
                  >
                    <span className="button__content">
                      <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img
                          alt=""
                          className="channel-thumbnail__custom"
                          loading="lazy"
                          src="https://thumbnails.odycdn.com/optimize/s:0:100/quality:85/plain/https://thumbnails.lbry.com/UCdxV8WMWlO1bWKwo9IwJiTw"
                          style={{ visibility: "visible" }}
                        />
                        <div className="channel-staked__wrapper">
                          <svg
                            size="14"
                            className="icon icon--ChannelLevel2 channel-staked__indicator channel-staked__indicator--controlling"
                            
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 24"
                            width="14"
                            height="14"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15.705 7.31999L17.625 10.845C18.0591 11.6316 18.7099 12.2772 19.5 12.705L23.025 14.625L19.5 16.5C18.7154 16.9301 18.0701 17.5754 17.64 18.36L15.72 21.885L13.785 18.435C13.3625 17.6207 12.7106 16.9479 11.91 16.5L8.38499 14.64L11.91 12.705C12.7001 12.2772 13.3508 11.6316 13.785 10.845L15.705 7.31999ZM4.37999 4.31999C4.10558 4.81954 3.69454 5.23058 3.19499 5.50499L0.974991 6.67499L3.19499 7.88999C3.68451 8.14404 4.09453 8.5281 4.37999 8.99999L5.59499 11.22L6.80999 8.99999C7.0844 8.50045 7.49544 8.08941 7.99499 7.81499L10.215 6.59999L7.99499 5.44499C7.49544 5.17058 7.0844 4.75954 6.80999 4.25999L5.59499 2.05499L4.37999 4.31999Z"></path>
                          </svg>
                        </div>
                      </div>
                    </span>
                  </Link>
                  <div className="claim-tile__about">
                    <Link
                      className="button button--no-style button--uri-indicator"
                      
                      tabindex="0"
                      to="/profile"
                    >
                      <span className="button__content">
                        <span dir="auto" className="channel-name">
                          @Kurosai
                        </span>
                      </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                      <span
                        className="date_time"
                        title="January 29th, 2022 10:00 PM"
                      >
                        4 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="card claim-preview--tile">
              <Link
                role="none"
                tabindex="-1"
                
                to="/playvideo"
              >
                <div
                  data-background-image="https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g"
                  className="media__thumb"
                  style={{
                    backgroundImage:
                      "url(https://thumbnails.odycdn.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/gexiHZKl_0g)",
                  }}
                >
                  <div className="claim-preview__hover-actions">
                    <Link
                      className="button button--no-style button--file-action"
                      title="Add to Watch Later"
                      aria-label="Add"
                      to="/signup"
                    >
                      <span className="button__content">
                        <svg
                          size="16"
                          className="icon icon--time"
                          
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="currentColor"
                          fill="none"
                        >
                          <g transform="matrix(1,0,0,1,0,0)">
                            <path d="M1.500 12.000 A10.500 10.500 0 1 0 22.500 12.000 A10.500 10.500 0 1 0 1.500 12.000 Z"></path>
                            <path d="M12 12L12 8.25"></path>
                            <path d="M12 12L16.687 16.688"></path>
                          </g>
                        </svg>
                        <span dir="auto" className="button__label">
                          Add
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="claim-preview__file-property-overlay">
                    <div className="claim-preview__overlay-properties">
                      <span>02:06</span>
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
                        className="icon icon--Video"
                        
                      >
                        <g>
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect
                            x="1"
                            y="5"
                            width="15"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="claim-tile__header">
                <Link
                  aria-label="Elon wants vampires in space by Kurosai 5 hours ago, 00:02:06"
                  to="/playvideo"
                >
                  <h2 className="claim-tile__title">
                    <span
                      title="Elon wants vampires in space"
                      className="truncated-text"
                    >
                      Elon wants vampires in space
                    </span>
                  </h2>
                </Link>
                <button
                  className="menu__button claim__menu-button"
                  data-reach-menu-button=""
                  aria-expanded="false"
                  aria-haspopup="menu"
                  type="button"
                  id="menu-button--28"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon--MoreVertical"
                    
                  >
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
                  <Link
                    className="button button--no-style"
                    
                    tabindex="-1"
                    to="/profile"
                  >
                    <span className="button__content">
                      <div className="channel-thumbnail channel-thumbnail--xsmall">
                        <img
                          alt=""
                          className="channel-thumbnail__custom"
                          loading="lazy"
                          src="https://thumbnails.odycdn.com/optimize/s:0:100/quality:85/plain/https://thumbnails.lbry.com/UCdxV8WMWlO1bWKwo9IwJiTw"
                          style={{ visibility: "visible" }}
                        />
                        <div className="channel-staked__wrapper">
                          <svg
                            size="14"
                            className="icon icon--ChannelLevel2 channel-staked__indicator channel-staked__indicator--controlling"
                            
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 24"
                            width="14"
                            height="14"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15.705 7.31999L17.625 10.845C18.0591 11.6316 18.7099 12.2772 19.5 12.705L23.025 14.625L19.5 16.5C18.7154 16.9301 18.0701 17.5754 17.64 18.36L15.72 21.885L13.785 18.435C13.3625 17.6207 12.7106 16.9479 11.91 16.5L8.38499 14.64L11.91 12.705C12.7001 12.2772 13.3508 11.6316 13.785 10.845L15.705 7.31999ZM4.37999 4.31999C4.10558 4.81954 3.69454 5.23058 3.19499 5.50499L0.974991 6.67499L3.19499 7.88999C3.68451 8.14404 4.09453 8.5281 4.37999 8.99999L5.59499 11.22L6.80999 8.99999C7.0844 8.50045 7.49544 8.08941 7.99499 7.81499L10.215 6.59999L7.99499 5.44499C7.49544 5.17058 7.0844 4.75954 6.80999 4.25999L5.59499 2.05499L4.37999 4.31999Z"></path>
                          </svg>
                        </div>
                      </div>
                    </span>
                  </Link>
                  <div className="claim-tile__about">
                    <Link
                      className="button button--no-style button--uri-indicator"
                      
                      tabindex="0"
                      to="/profile"
                    >
                      <span className="button__content">
                        <span dir="auto" className="channel-name">
                          @Kurosai
                        </span>
                      </span>
                    </Link>
                    <div className="claim-tile__about--counts">
                      <span
                        className="date_time"
                        title="January 29th, 2022 10:00 PM"
                      >
                        4 hours ago
                      </span>
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
  );
};

export default CreativeArts;
