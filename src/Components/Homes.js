import React from 'react';
import CreativeArts from './CreativeArts';
import MixAll from './MixAll';
import Finance from './Finance';
import Education from './Education';
import TheUniverse from './TheUniverse';
import Gaming from './Gaming';
import Music from './Music';
import Tech from './Tech';
import { Link } from 'react-router-dom';


const Homes = () => {
  return (
  <>
    
        <div id="main-content" className="main main--full-width">
            <h1 className="home__meme"><Link target="_blank" rel="noopener noreferrer" to="" className="button button--link"><span className="button__content">we have big plans for 2022</span></Link></h1>
            <MixAll/>
            <CreativeArts/>
            <Education/>
            <TheUniverse/>
            <Gaming/>
            <Music/>
            <Tech/>
            <Finance/>
        </div>

  </>
  );
};

export default Homes;