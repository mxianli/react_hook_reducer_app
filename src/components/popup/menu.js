import React from 'react';
import Popup from 'reactjs-popup';
import '../css/menu.css';


const Menu = () => (
    <div className="menu">
      <div className="menu-item"> Menu item 1</div>
      <div className="menu-item"> Menu item 2</div>
      <div className="menu-item"> Menu item 3</div>
      <Popup
        trigger={<div className="menu-item"> Sub menu </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className="menu">
          <div className="menu-item"> sub item 1</div>
          <div className="menu-item"> sub item 2</div>
          <div className="menu-item"> sub item 3</div>
        </div>
      </Popup>
      <div className="menu-item"> Menu item 4</div>
    </div>
  );

  export default Menu;