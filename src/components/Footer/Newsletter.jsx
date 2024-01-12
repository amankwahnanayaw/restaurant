import React from 'react';

import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsLetter'>
    <div app__newsLetter-heading>
      <SubHeading title='NewsLetter'/>
      <h1 className='headtext__cormorant'>Subscribe to Our NewsLetter</h1>
      <p className='p__opensans'>And never miss Latest Updates</p>
    </div>
    <div className='app__newslett'>

    </div>
  </div>
);

export default Newsletter;
