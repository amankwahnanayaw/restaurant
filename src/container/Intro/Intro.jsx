import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons';

import { vineintro } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playvideo, setPlayvideo] = React.useState(false);
  const vidRef = React.useRef()

  return (
    <div className='app__video'>
      <video src={vineintro} ref={vidRef} type="video/mp4" loop controls={false} muted />
      <div className='app__video-overlay flex__center'>
        
      </div>
    </div>
  );
}

export default Intro;
