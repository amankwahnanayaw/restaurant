import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
   
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Fourth Norla Street, Labone</p>
        <p className='p__opensans'>+233 55 845 0253</p>
        <p className='p__opensans'>+233 55 845 0253</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>12:30 - 11pm</p>
        <p className='p__opensans'>Saturday</p>
        <p className='p__opensans'>12:30 - 9pm (Brunch till 4pm)</p>
        <p className='p__opensans'>Sunday</p>
        <p className='p__opensans'>12:30 - 9pm (Branch)</p>
      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
