import React from "react";
import img from "../img/p9.webp";
import "./userNameImg.css";

export default function UserNameImg(prop) {
  
  var isOnline = false;
  if (prop?.online) {
    isOnline = true;
  }
  return (
    <div>
      <div className="userNameImgContainer">
        <div className="userNameFlex">
          <div className="userNameImg">
            <img src={img} alt="" />
            {isOnline && <div className="onlineBatch"></div>}
          </div>
          <div className="userName">Rajat Raj Gupta</div>
        </div>
      </div>
    </div>
  );
}
