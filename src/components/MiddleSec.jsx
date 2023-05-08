import React, { useContext, useEffect, useState } from 'react';
import './middleSec.css';
import PostSec from './PostSec';
import { BackendUrl } from './data';
import { UserContext } from '../context/userContext';

export default function MiddleSec(prop) {
 
  return (
    <div className='mid'>
      
    <PostSec location={prop.p} Id={prop.userId}/>
    </div>
  )
}
