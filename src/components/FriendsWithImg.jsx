import React from 'react';
import img from '../img/p9.webp';



export default function FriendsWithImg() {
  return (
    <div>
        <div className="friendsWithImgContainer">
            <img src={img} alt="" />
            <p>Rajat</p>
        </div>
    </div>
  )
}
