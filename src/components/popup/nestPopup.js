import React from 'react';
import Popup from 'reactjs-popup';


const NestedToolTip = () => (
  <Popup
    trigger={<button className="button"> Trigger 1 </button>}
    position="top center"
    nested
  >
    <div>
      nested Popup is good, you can try different layers 
      <Popup
        trigger={<button className="button"> Trigger 2 </button>}
        position="bottom left"
        nested
      >
        <div>
         This second nested up page 
          <Popup
            trigger={<button className="button"> Trigger 3 </button>}
            position="top right"
            nested
          >
            <span> Popup content </span>
          </Popup>
        </div>
      </Popup>
    </div>
  </Popup>
);

export default NestedToolTip