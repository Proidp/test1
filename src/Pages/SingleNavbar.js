import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import image1 from 'https://lbry2.vanwanet.com/speech/f3fb7d1189b6b354:a.png';

const SingleNavbar = () => {
    const [switchToggled, setSwitchToggled] = useState(true);
    const ToggleSwitch = () => {
       
          switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
          console.log('working screen');
    }
    
    const ToggleSwitch1 = () => {
          switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
          console.log("Other function exicute");
    }
 
    const MainToggle = () => {
       if(window.innerWidth >= 1151){
          ToggleSwitch();
       }else{
          ToggleSwitch1()
       }
    }
 
 
   return (
   <>
     <header className="header">
             <div className="header__navigation">
                <div className="header__menu--left"><button aria-label="Skip Navigation"
                      className="button button--link skip-button" type="button"><span className="button__content"><span
                            dir="auto" className="button__label">Skip Navigation</span></span></button><span
                      style={{position: "relative"}}><button title="Expand sidebar - view channels you are following."
                         aria-label="Expand sidebar - view channels you are following." onClick={MainToggle} 
                         className="button button--no-style sidebar-toggle header__navigationItem--icon" type="button"
                         aria-expanded="false"><span className="button__content"><svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--Menu"
                               >
                               <g>
                                  <line x1="3" y1="12" x2="21" y2="12"></line>
                                  <line x1="3" y1="6" x2="21" y2="6"></line>
                                  <line x1="3" y1="18" x2="21" y2="18"></line>
                               </g>
                            </svg></span></button></span><Link aria-current="page"
                      className="button button--no-style header__navigationItem--logo active" title="Home" aria-label="Home"
                      to="/"><img src={logo} alt="logo" style={{filter: "invert(1)"}}/></Link></div>
                <div className="header__center">
                   <form novalidate="" className="wunderbar__wrapper">
                      <div className="wunderbar" data-reach-combobox=""><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" className="icon icon--Search" >
                            <g>
                               <circle cx="11" cy="11" r="8"></circle>
                               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </g>
                         </svg><input aria-autocomplete="both" aria-controls="listbox--107" aria-expanded="false"
                            aria-haspopup="listbox" role="combobox" className="wunderbar__input" placeholder="Search"
                            data-reach-combobox-input="" value=""/></div>
                   </form>
                   <div className="header__buttons"><button title="Notifications" aria-label="Notifications"
                         className="button button--no-style header__navigationItem--icon" type="button"><span
                            className="button__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                               width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round" className="icon icon--Bell" >
                               <g>
                                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                               </g>
                            </svg></span></button><button className="header__navigationItem--icon" aria-label="Settings"
                         data-reach-menu-button="" aria-expanded="false" aria-haspopup="menu" type="button"
                         id="menu-button--1837"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18"
                            height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="icon icon--Settings" >
                            <g>
                               <circle cx="12" cy="12" r="3"></circle>
                               <path
                                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                               </path>
                            </g>
                         </svg></button></div>
                </div>
                <div className="header__menu--right">
                   <div className="header__authButtons"><Link className="button button--link" aria-label="Log In"
                         to="/login"><span className="button__content"><span dir="auto" className="button__label">Log
                               In</span></span></Link><Link className="button button--primary" aria-label="Sign Up"
                         to="/signup"><span className="button__content"><span dir="auto" className="button__label">Sign
                               Up</span></span></Link></div>
                </div>
             </div>
          </header>
 
 
       <div className="main-wrapper__inner single-page main-wrapper__inner--filepage">
          
          <div className="navigation__wrapper navigation__wrapper--absolute">
             <nav aria-label="Sidebar" className={switchToggled ? "navigation navigation-file-page-and-mobile" : "navigation"}>
                <div className="navigation-inner-container">
                   <ul className="navigation-links--absolute mobile-only"></ul>
                   <ul className="navigation-links navigation-links--absolute">
                      <li>
                         <Link aria-current="page" className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"}
                            title="Home" aria-label="Home" to="/">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Home" >
                                  <g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round"
                                     stroke-linejoin="round">
                                     <path d="M1, 11 L12, 2 C12, 2 22.9999989, 11.0000005 23, 11"></path>
                                     <path
                                        d="M3, 10 C3, 10 3, 10.4453982 3, 10.9968336 L3, 20.0170446 C3, 20.5675806 3.43788135, 21.0138782 4.00292933, 21.0138781 L8.99707067, 21.0138779 C9.55097324, 21.0138779 10, 20.5751284 10, 20.0089602 L10, 15.0049177 C10, 14.449917 10.4433532, 14 11.0093689, 14 L12.9906311, 14 C13.5480902, 14 14, 14.4387495 14, 15.0049177 L14, 20.0089602 C14, 20.5639609 14.4378817, 21.0138779 15.0029302, 21.0138779 L19.9970758, 21.0138781 C20.5509789, 21.0138782 21.000006, 20.56848 21.000006, 20.0170446 L21.0000057, 10">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Home</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Following" aria-label="Following"
                            to="/following">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Heart" >
                                  <path
                                     d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                  </path>
                               </svg>
                               <span dir="auto" className="button__label">Following</span>
                            </span>
                         </Link>
                      </li>
                   </ul>
                   <ul className="navigation-links navigation-links--absolute">
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Pop Culture" aria-label="Pop Culture"
                            options="[object Object]" to="/popculture">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Pop Culture" >
                                  <g>
                                     <path
                                        d="M23.5,12.11a7,7,0,0,1-3.27,5.59.26.26,0,0,1-.32,0,.27.27,0,0,1-.05-.31A2.71,2.71,0,0,0,20,17c.65-1.4.5-2.85-.34-3.25s-2,.41-2.67,1.77c.06-.93-.26-1.7-.86-1.88-1.27-.4-1.77,1.24-4.17,5.44-2.44-4.27-2.9-5.84-4.17-5.44-.6.18-.92.95-.86,1.88-.66-1.36-1.84-2.15-2.67-1.77S3.31,15.63,4,17a2.71,2.71,0,0,0,.18.34.27.27,0,0,1,0,.31.26.26,0,0,1-.32,0A7,7,0,0,1,.5,12.11C.5,8.93,3.17,6.18,7,4.9a.25.25,0,0,1,.32.3L7,6.73a3.37,3.37,0,0,0,.78,3,1,1,0,0,0,1.1.28,1,1,0,0,0,.65-.94V5.61a.25.25,0,0,1,.4-.2l1.6,1.2h1l1.6-1.2a.25.25,0,0,1,.4.2V9.05a1,1,0,0,0,.65.94,1,1,0,0,0,1.1-.28,3.35,3.35,0,0,0,.78-3L16.65,5.2A.25.25,0,0,1,17,4.9C20.83,6.18,23.5,8.93,23.5,12.11Z">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Pop Culture</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Education" aria-label="Education"
                            options="[object Object]" to="/education">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Education" >
                                  <g>
                                     <path
                                        d="M12,14c0-1.455,2.964-3.381,8.484-3.494a.508.508,0,0,1,.516.5v8.5a.5.5,0,0,1-.5.5c-5.533.11-8.5,2.038-8.5,3.5,0-1.457-2.971-3.385-8.5-3.5a.5.5,0,0,1-.5-.5v-8.5a.508.508,0,0,1,.516-.5C9.035,10.62,12,12.546,12,14Z">
                                     </path>
                                     <path d="M12 14.001L12 23.376"></path>
                                     <path d="M10,14.742A20.1,20.1,0,0,0,5.52,13.7"></path>
                                     <path d="M10,17.742a20.265,20.265,0,0,0-4.521-1.048"></path>
                                     <path d="M14,14.742a20.2,20.2,0,0,1,4.523-1.048"></path>
                                     <path d="M14,17.742a20.213,20.213,0,0,1,4.524-1.048"></path>
                                     <path d="M4.566,9A7.5,7.5,0,1,1,19.434,9"></path>
                                     <path d="M9.624,9,9.189,7.259a1,1,0,0,0-.97-.758H4.651"></path>
                                     <path
                                        d="M17.99,3.5H15.281a1,1,0,0,0-.97.758l-.5,2a1,1,0,0,0,.97,1.242h1.052l.245,1.469">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Education</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Creative Arts"
                            aria-label="Creative Arts" options="[object Object]" to="/arts">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Artists" >
                                  <g>
                                     <path d="M10.107,16.884,22.372,4.657a2.5,2.5,0,0,0-3.744-3.314L7.954,15.04"></path>
                                     <path
                                        d="M1.285,22.879a.5.5,0,0,1,.027-.915C3.693,21,2.926,18.286,3.633,16.835a3.56,3.56,0,0,1,4.728-1.627C13.677,17.8,7.349,25.765,1.285,22.879Z">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Creative Arts</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="The Universe"
                            aria-label="The Universe" options="[object Object]" to="/universe">
                            <span className="button__content">
                               <svg size="16" className="icon icon--Universe" 
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" width="16" height="16"
                                  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                  <g transform="matrix(1,0,0,1,0,0)">
                                     <path d="M5.33,17.848A9.545,9.545,0,0,1,16.466,2.488" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                     <path
                                        d="M1.982,17.78C.769,19.905.363,21.554,1.048,22.24c1.04,1.039,4.294-.43,8.062-3.418"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                                     <path
                                        d="M13.423,18.067l-3.58-3.58L17.8,6.53A5.054,5.054,0,0,1,20.153,5.2L22.2,4.686a.844.844,0,0,1,1.023,1.023l-.512,2.048a5.059,5.059,0,0,1-1.332,2.352Z"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                                     <path
                                        d="M9.843,14.487,6.911,13.51a.422.422,0,0,1-.165-.7l1.022-1.022a3.383,3.383,0,0,1,3.462-.817l1.6.532Z"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                                     <path
                                        d="M13.423,18.067,14.4,21a.422.422,0,0,0,.7.165l1.022-1.022a3.383,3.383,0,0,0,.817-3.462l-.532-1.6Z"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">The Universe</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Gaming" aria-label="Gaming"
                            options="[object Object]" to="/gaming">
                            <span className="button__content">
                               <svg size="16" className="icon icon--Gaming" 
                                  xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 24 26" width="16" height="16"
                                  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                  <g>
                                     <path
                                        d="M17.5,9 C17.5,4.307 13.694,0.5 9,0.5 C4.306,0.5 0.5,4.307 0.5,9 L0.5,22.5 C0.5,23.051 0.95,23.5 1.5,23.5 L2,23.5 C2.551,23.5 3,23.051 3,22.5 C3,21.951 3.45,21.5 4,21.5 C4.551,21.5 5,21.951 5,22.5 C5,23.051 5.45,23.5 6,23.5 L7,23.5 C7.551,23.5 8,23.051 8,22.5 C8,21.951 8.45,21.5 9,21.5 C9.551,21.5 10,21.951 10,22.5 C10,23.051 10.45,23.5 11,23.5 L12,23.5 C12.551,23.5 13,23.051 13,22.5 C13,21.951 13.45,21.5 14,21.5 C14.551,21.5 15,21.951 15,22.5 C15,23.051 15.45,23.5 16,23.5 L16.5,23.5 C17.051,23.5 17.5,23.051 17.5,22.5 L17.5,9 L17.5,9 Z"
                                        id="Stroke-939"></path>
                                     <path
                                        d="M13.5,12 C13.5,12.826 12.825,13.5 12,13.5 C11.176,13.5 10.5,12.826 10.5,12 L10.5,9 C10.5,8.176 11.176,7.5 12,7.5 C12.825,7.5 13.5,8.176 13.5,9 L13.5,12 L13.5,12 Z"
                                        id="Stroke-940"></path>
                                     <path
                                        d="M11.5,11 C11.5,11.277 11.276,11.5 11,11.5 C10.724,11.5 10.5,11.277 10.5,11 C10.5,10.725 10.724,10.5 11,10.5 C11.276,10.5 11.5,10.725 11.5,11 L11.5,11 Z"
                                        id="Stroke-941"></path>
                                     <path
                                        d="M7.5,12 C7.5,12.826 6.825,13.5 6,13.5 C5.176,13.5 4.5,12.826 4.5,12 L4.5,9 C4.5,8.176 5.176,7.5 6,7.5 C6.825,7.5 7.5,8.176 7.5,9 L7.5,12 L7.5,12 Z"
                                        id="Stroke-942"></path>
                                     <path
                                        d="M5.5,11 C5.5,11.277 5.276,11.5 5,11.5 C4.724,11.5 4.5,11.277 4.5,11 C4.5,10.725 4.724,10.5 5,10.5 C5.276,10.5 5.5,10.725 5.5,11 L5.5,11 Z"
                                        id="Stroke-943"></path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Gaming</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Music" aria-label="Music"
                            options="[object Object]" to="/music">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--MusicCategory" >
                                  <g>
                                     <path
                                        d="M19.8 6.267a1 1 0 01-1.414 0l-1.411-1.414a1 1 0 010-1.415l.186-.186a1 1 0 01.391-.242l4.536-1.51a.927.927 0 01.949 1.535z">
                                     </path>
                                     <path d="M16.975 4.853L9.55 12.277l1.414 1.414 7.425-7.424"></path>
                                     <path
                                        d="M11.187 10.64a2.881 2.881 0 01-.8-2.538 6.278 6.278 0 01.738-1.99A1.15 1.15 0 009.3 4.749a6.56 6.56 0 00-1.91 3.406c-.22 1.038-1 2.463-2.1 2.485a4.638 4.638 0 00-4.6 4.746 5.927 5.927 0 001.812 4.249l1.1 1.1a5.93 5.93 0 004.249 1.812 4.639 4.639 0 004.746-4.6c0-1.1 1.235-1.789 2.286-1.755a4.13 4.13 0 003.324-1.269 1.1 1.1 0 00-.719-1.846c-3.306-.254-4-.141-4.891-1.029M7.782 13.338l2.122 2.121">
                                     </path>
                                     <path d="M4.954 14.753l3.535 3.535-1.768 1.768-3.535-3.535z"></path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Music</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Tech" aria-label="Tech"
                            options="[object Object]" to="/tech">
                            <span className="button__content">
                               <svg size="16" className="icon icon--Speaker" 
                                  xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 24 24" width="16" height="16"
                                  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                  <path
                                     d="M13.5005,21.5 C13.5005,22.604 12.6055,23.5 11.5005,23.5 L2.5005,23.5 C1.3955,23.5 0.5005,22.604 0.5005,21.5 L0.5005,2.5 C0.5005,1.396 1.3955,0.5 2.5005,0.5 L11.5005,0.5 C12.6055,0.5 13.5005,1.396 13.5005,2.5 L13.5005,21.5 L13.5005,21.5 Z"
                                     id="Stroke-5155" stroke-linecap="round"></path>
                                  <line x1="13.5005" y1="19.5" x2="0.5005" y2="19.5" id="Stroke-5156"
                                     stroke-linecap="round"></line>
                                  <line x1="13.5005" y1="4.5" x2="0.5005" y2="4.5" id="Stroke-5157"
                                     stroke-linecap="round"></line>
                                  <line x1="4.5005" y1="2.5" x2="9.5005" y2="2.5" id="Stroke-5158"
                                     stroke-linecap="round"></line>
                                  <path
                                     d="M7.0005,22 C6.7245,22 6.5005,21.776 6.5005,21.5 C6.5005,21.224 6.7245,21 7.0005,21 C7.2765,21 7.5005,21.224 7.5005,21.5 C7.5005,21.776 7.2765,22 7.0005,22 L7.0005,22 Z"
                                     id="Stroke-5159"></path>
                               </svg>
                               <span dir="auto" className="button__label">Tech</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="News &amp; Politics"
                            aria-label="News &amp; Politics" options="[object Object]" to="/news">
                            <span className="button__content">
                               <svg size="16" className="icon icon--Aperature" 
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                  <line x1="3.5" y1="3.5" x2="14.5" y2="3.5" id="Stroke-6102"></line>
                                  <polygon id="Stroke-6103" points="3.5 12.5 8.5 12.5 8.5 6.5 3.5 6.5"></polygon>
                                  <line x1="11.5" y1="8.5" x2="14.5" y2="8.5" id="Stroke-6104"></line>
                                  <line x1="10.5" y1="10.5" x2="14.5" y2="10.5" id="Stroke-6105"></line>
                                  <line x1="10.5" y1="12.5" x2="14.5" y2="12.5" id="Stroke-6106"></line>
                                  <line x1="3.5" y1="14.5" x2="14.5" y2="14.5" id="Stroke-6107"></line>
                                  <line x1="3.5" y1="16.5" x2="14.5" y2="16.5" id="Stroke-6108"></line>
                                  <line x1="3.5" y1="18.5" x2="14.5" y2="18.5" id="Stroke-6109"></line>
                                  <path
                                     d="M19.5,5.5 L21.5,5.5 L21.5,20.5 C21.5,21.052 21.053,21.5 20.5,21.5 C19.948,21.5 19.5,21.052 19.5,20.5 L19.5,2 L17.5,2 L17.5,4"
                                     id="Stroke-6110"></path>
                                  <path
                                     d="M20.5,23.5 L3.5,23.5 C1.844,23.5 0.5,22.157 0.5,20.5 L0.5,0.5 L17.5,0.5 L17.5,20.5 C17.5,22.157 18.844,23.5 20.5,23.5 C22.157,23.5 23.5,22.157 23.5,20.5 L23.5,3.5 L19.5,3.5"
                                     id="Stroke-6111"></path>
                               </svg>
                               <span dir="auto" className="button__label">News &amp; Politics</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Finance 2.0" aria-label="Finance 2.0"
                            options="[object Object]" to="/finance">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--DollarSign" >
                                  <g>
                                     <line x1="12" y1="1" x2="12" y2="23"></line>
                                     <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Finance 2.0</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Wild West" aria-label="Wild West"
                            to="/wildwest">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--WildWest" >
                                  <g transform="matrix(1,0,0,1,0,0)">
                                     <path
                                        d="M12.546,23.25H11.454A10.7,10.7,0,0,1,2.161,7.235L3.75,4.453V2.25A1.5,1.5,0,0,1,5.25.75h3a1.5,1.5,0,0,1,1.5,1.5v3a2.988,2.988,0,0,1-.4,1.488L7.37,10.211a4.7,4.7,0,0,0,4.084,7.039h1.092a4.7,4.7,0,0,0,4.084-7.039L14.646,6.738a2.988,2.988,0,0,1-.4-1.488v-3a1.5,1.5,0,0,1,1.5-1.5h3a1.5,1.5,0,0,1,1.5,1.5v2.2l1.589,2.782A10.7,10.7,0,0,1,12.546,23.25Z"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                     </path>
                                     <path d="M12,19.875a.375.375,0,0,1,.375.375" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M11.625,20.25A.375.375,0,0,1,12,19.875" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M12,20.625a.375.375,0,0,1-.375-.375" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M12.375,20.25a.375.375,0,0,1-.375.375" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M17.813,17.313a.375.375,0,0,1,.529-.024" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M17.836,17.843a.376.376,0,0,1-.023-.53" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M18.366,17.819a.375.375,0,0,1-.53.024" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M18.342,17.289a.375.375,0,0,1,.024.53" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M19.843,11.294a.376.376,0,0,1,.34-.407" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M20.25,11.634a.375.375,0,0,1-.407-.34" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M20.59,11.227a.374.374,0,0,1-.34.407" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M20.183,10.887a.375.375,0,0,1,.407.34" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M6.187,17.313a.375.375,0,0,0-.529-.024" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M6.164,17.843a.376.376,0,0,0,.023-.53" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M5.634,17.819a.375.375,0,0,0,.53.024" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M5.658,17.289a.375.375,0,0,0-.024.53" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M4.157,11.294a.376.376,0,0,0-.34-.407" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M3.75,11.634a.375.375,0,0,0,.407-.34" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M3.41,11.227a.374.374,0,0,0,.34.407" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M3.817,10.887a.375.375,0,0,0-.407.34" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M20.25 4.5L18 4.5" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5"></path>
                                     <path d="M6 4.5L3.75 4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5"></path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Wild West</span>
                            </span>
                         </Link>
                      </li>
                   </ul>
                   <ul className="navigation-links--absolute mobile-only">
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Log In" aria-label="Log In"
                            to="/signin">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--SignIn" >
                                  <g>
                                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                     <polyline points="10 17 15 12 10 7"></polyline>
                                     <line x1="15" y1="12" x2="3" y2="12"></line>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Log In</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Sign Up" aria-label="Sign Up"
                            to="/signup">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Key" >
                                  <g>
                                     <path
                                        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Sign Up</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Settings" aria-label="Settings"
                            to="/settings">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--Settings" >
                                  <g>
                                     <circle cx="12" cy="12" r="3"></circle>
                                     <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                     </path>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Settings</span>
                            </span>
                         </Link>
                      </li>
                      <li>
                         <Link className={switchToggled ? "button button--no-style navigation-link navigation-links--micro" : "button button--no-style navigation-link"} title="Help" aria-label="Help"
                            to="/help">
                            <span className="button__content">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"
                                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round" className="icon icon--HelpCircle" >
                                  <g>
                                     <circle cx="12" cy="12" r="10"></circle>
                                     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                     <line x1="12" y1="17" x2="12" y2="17"></line>
                                  </g>
                               </svg>
                               <span dir="auto" className="button__label">Help</span>
                            </span>
                         </Link>
                      </li>
                   </ul>
                   <div className={switchToggled ? "navigation__auth-nudge sidebar-footer d-none" : "navigation__auth-nudge sidebar-footer"}>
                      <span>Sign up to earn <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16"
                            height="16" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round"
                            stroke-linejoin="round" className="icon icon--LBC" >
                            <path d="M1.03125 14.1562V9.84375L12 0L22.9688 9.84375V14.1562L12 24L1.03125 14.1562Z"
                               fill="black"></path>
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                               fill="black"></path>
                            <path
                               d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                               fill="black"></path>
                            <path d="M8.925 10.3688L3.99375 14.8125L7.70625 18.15L12.6375 13.7063L8.925 10.3688Z"
                               fill="url(#paint0_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c)"></path>
                            <path
                               d="M8.925 10.3688L15.1312 4.80005L12 1.98755L2.60625 10.425V13.575L3.99375 14.8125L8.925 10.3688Z"
                               fill="url(#paint1_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c)"></path>
                            <path d="M15.075 13.6313L20.0062 9.1876L16.2937 5.8501L11.3625 10.2938L15.075 13.6313Z"
                               fill="url(#paint2_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c)"></path>
                            <path
                               d="M15.075 13.6312L8.86875 19.2L12 22.0125L21.3937 13.575V10.425L20.0062 9.1875L15.075 13.6312Z"
                               fill="url(#paint3_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c)"></path>
                            <defs>
                               <linearGradient id="paint0_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c" x1="3.7206"
                                  y1="14.2649" x2="15.1645" y2="14.2649" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.2464" stop-color="#E700FF"></stop>
                                  <stop offset="0.3166" stop-color="#E804F9"></stop>
                                  <stop offset="0.4108" stop-color="#E90EE8"></stop>
                                  <stop offset="0.5188" stop-color="#EC1FCC"></stop>
                                  <stop offset="0.637" stop-color="#F037A5"></stop>
                                  <stop offset="0.7635" stop-color="#F45672"></stop>
                                  <stop offset="0.8949" stop-color="#FA7A36"></stop>
                                  <stop offset="1" stop-color="#FF9B00"></stop>
                               </linearGradient>
                               <linearGradient id="paint1_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c" x1="2.60274"
                                  y1="8.40089" x2="15.14" y2="8.40089" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.4233" stop-color="#FABD09"></stop>
                                  <stop offset="0.8292" stop-color="#FA6B00"></stop>
                               </linearGradient>
                               <linearGradient id="paint2_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c" x1="6.8682"
                                  y1="14.1738" x2="25.405" y2="4.84055" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#BAFF8E"></stop>
                                  <stop offset="0.6287" stop-color="#008EBB"></stop>
                               </linearGradient>
                               <linearGradient id="paint3_linear0faa24b0-f0b0-4923-b2c9-cbbf451eef7c" x1="25.2522"
                                  y1="6.08799" x2="3.87697" y2="27.836" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#BAFF8E"></stop>
                                  <stop offset="0.6287" stop-color="#008EBB"></stop>
                               </linearGradient>
                               <clipPath id="clip0">
                                  <rect width="24" height="24" fill="white"></rect>
                               </clipPath>
                            </defs>
                         </svg> for you and your favorite creators. </span>
                      <Link className="button button--secondary" aria-label="Sign Up" to="/signup?src=sidenav_nudge">
                         <span className="button__content">
                            <span dir="auto" className="button__label">Sign Up</span>
                         </span>
                      </Link>
                   </div>
                </div>
                <ul className={switchToggled ? "navigation__tertiary navigation-links--small sidebar-footer d-none" : "navigation__tertiary navigation-links--small sidebar-footer"}>
                   <li className={switchToggled ? "navigation-link navigation-links--micro" : "navigation-link"}>
                      <Link target="_blank" rel="noopener noreferrer" to=""
                         className="button button--no-style" aria-label="FAQ and Support">
                         <span className="button__content">
                            <span dir="auto" className="button__label">FAQ and Support</span>