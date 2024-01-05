import React from 'react';

import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase The New Flavour'/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Let it be the land, but let us live in old age.
      Seasoning of the food brings out the taste and satisfaction, in the end, there is a lot of love to pass around</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src="{ images.headerimg }" alt="header img" />
    </div>
  </div>
);

export default Header;
