import React from 'react';
import Navbar from '../components/Navbar';
import LeftbarNav from '../components/LeftbarNav';
import MiddleSec from '../components/MiddleSec';
import AddBanner from '../components/AddBanner';
import OnlineFriends from '../components/OnlineFriends';
import './timeline.css';
import { BackendUrl } from '../components/data';
import FollowFriendList from '../components/FollowFriendList';

export default function TimeLine() {

   


  return (
    <div>
         <Navbar/>
    <div className='mainBody'>
    <LeftbarNav/>
    <MiddleSec p="T"/>
    <div className="rightSecArea">
    <AddBanner/>
    <div className="onlineFriendsArea">
    <p>Online Friends</p>
    <OnlineFriends online="true"/>
    
    
    
    
    
    </div>

    </div>
    
    </div>
    </div>
  )
}
