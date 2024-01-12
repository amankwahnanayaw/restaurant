import React from 'react';

import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsLetter'>
    <div app__newsLetter-heading>
      <SubHeading title='NewsLetter'/>
      <h1 className='headtext__cormorant'>Subscribe to Our NewsLetter</h1>
    </div>
  </div>
);

export default Newsletter;
