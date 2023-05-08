import React from 'react';
import UserNameImg from './UserNameImg';

export default function OnlineFriends(prop) {
    
  return (
    <div>
   <UserNameImg online={prop.online}/>
    </div>
  )
}
