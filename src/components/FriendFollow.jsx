import React from 'react';
import UserNameImg from './UserNameImg';
import './friendFollow.css';

export default function FriendFollow() {
  return (
    <div>
        <div className="FriendFollowContainer">
            <div className="FriendFollowName">
            <UserNameImg />
            </div>
            <div className="FollowButton">Follow</div>
        </div>
    </div>
  )
}
