import React from "react";
import Popup from "reactjs-popup";

const PopupDiv = (props) => {
  return (
    <Popup
      trigger={(open) => (
        <button className="button">
          Trigger - {open ? "Opened" : "Closed"}
        </button>
      )}
      position="right center"
      closeOnDocumentClick
    >
      <span> Popup content </span>
    </Popup>
  );
};

export default PopupDiv;
