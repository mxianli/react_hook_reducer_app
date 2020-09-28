import React from 'react';
import Popup from 'reactjs-popup';
import Menu from './menu';

import '../css/popup.css';
import NestedToolTip from './nestPopup';

export default () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Custom Modal:
          <br />
            You can take more control over your modal by using a function as children pattern
          <br />
          this is main page
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Menu Popup </button>}
            position="top center"
            nested
          >
            <span>
            <Menu />
            </span>
          </Popup>
          <Popup
            trigger={<button className="button"> Nested Popup </button>}
            position="top center"
            nested
          >
            <span>
            <NestedToolTip />
            </span>
          </Popup>

          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
);