import React, { useEffect, useState } from 'react'
import { BackendUrl } from './data'
import FriendFollow from './FriendFollow';

export default function FollowFriendList() {

    const [followListData,setFollowListData] = useState([]);

    useEffect(()=>{

        const load = async() =>{
            const res = await fetch(BackendUrl+"user/followlist");
            const data = await res.json();
            setFollowListData(data);
            console.log(data);


        }
      



load();


    },[])

  return (
    <div>
      {
        followListData.map((d)=>{
            <FriendFollow data={d}/>

        })
      }


    </div>
  )
}
