import React from 'react';

import { SubHeading, MenuItem } from '../../component'
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your pallette'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wines'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wines, index) => (
            <MenuItem key={wines.title + index} title={wines.title} price={cocktails.price} tags={wines.tags}/>
          ))}
        </div>
      </div>

      <div app__specialMenu-menu_img>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_cocltails'>
        <p className='app__specialMenu_menu_heading'>Cocktailsr</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>

    </div>
  </div>
);

export default SpecialMenu;
