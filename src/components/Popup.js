import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <a className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </a>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
