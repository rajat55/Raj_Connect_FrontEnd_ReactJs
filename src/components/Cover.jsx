import React ,{useState,useEffect,useContext}from "react";
import "./cover.css";
import coverImg from '../img/cover.jpg';
import profileImg from '../img/p9.webp'
import { BackendUrl } from "./data";
import { UserContext } from "../context/userContext";


export default function Cover(prop) {
  const  userId  = prop.userId;
  const [userInfo,setUserInfo] = useState({});
  console.log(userId);



  useEffect(()=>{
    const dataloading = async () => {
      try {
        const res = await fetch(BackendUrl + "user/" + userId);

        const data = await res.json();
        setUserInfo(data);
        console.log("fromuser",userInfo);
      }catch(e){
        console.log(e);
      }
    }
    dataloading();
    
  },[]);
  return (
    <div>
      <div className="coverContainer">
        <div className="coverImgs">
          <div className="coverImgArea">
            <img src={BackendUrl+ userInfo.coverPic} alt="" />
          </div>
          <div className="coverProfileImg">
            <img src={BackendUrl+ userInfo.profilePic} alt="" />
          </div>
        </div>
        <div className="coverTextArea">
        <p className="userNameCover"> {userInfo.username}</p>
        <p>{userInfo.description}</p>
        </div>
      </div>
    </div>
  );
}
