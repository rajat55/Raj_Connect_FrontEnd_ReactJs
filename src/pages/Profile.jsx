import React from 'react';
import Navbar from '../components/Navbar';
import LeftbarNav from '../components/LeftbarNav';
import MiddleSec from '../components/MiddleSec';
import AddBanner from '../components/AddBanner';
import Cover from '../components/Cover';
import './profile.css';
import UserInfo from '../components/UserInfo';
import { useParams } from 'react-router-dom';


export default function Profile() {

  const {id} = useParams();
  return (
    <div>
          
         <Navbar/>
    <div className='mainBody'>
    <LeftbarNav/>
    <div className="midAreaWithCover">
    <Cover userId={id}/>
    <div className="postandAd">
    <MiddleSec p="P" userId={id}/>
    <div className="rightSecArea">
        <UserInfo userId={id}/>
    <AddBanner/>
    

    </div>
    
    </div>
    </div>
    
   
    
    </div>
    


    </div>
  )
}
