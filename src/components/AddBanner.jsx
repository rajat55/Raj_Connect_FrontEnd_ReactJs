import React from 'react';
import './addbanner.css';
import imgAd from '../img/img5.jpg';

export default function AddBanner() {
  return (
    <div>
      <div className="addbannerContainer">
        <img src={imgAd} alt="" />
      </div>
      <p className="addText">
        AD
      </p>



    </div>
  )
}
