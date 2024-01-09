import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.vinechef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='app__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='app__opensans'>Similique quasi modi commodi, illo ad nihil explicabo labore repudiandae vitae, corporis deserunt assumenda quia ab alias provident aliquam ipsa sequi accusamus?</p>
      </div> 

      <div className='app__chef-sign'>
        <p>Jones Quaynor</p>
        <p className='app__opensans'>Group Executive Chef</p>
        <img src={images.jones} alt="sign" />
      </div> 
    </div>  
  </div>
);

export default Chef;
