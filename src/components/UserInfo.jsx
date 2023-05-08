import React, { useContext, useEffect, useState } from "react";
import "./userinfo.css";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";
import { BackendUrl } from "./data";

export default function UserInfo(prop) {
  const { userId } = useContext(UserContext);
  const [update, setUpdate] = useState(false);
  const [userInfo,setUserInfo] = useState({});
  console.log(userId);
  const handleEdit = () => {
    setUpdate(true);
  };

  useEffect(()=>{
    const dataloading = async () => {
      try {
        const res = await fetch(BackendUrl + "user/" + prop.userId);

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
      {update && <Navigate to={"/user/update/" + userId}></Navigate>}
      <div className="userInfoProfileContainer">
        <div className="userInfoTitle">User Information</div>

        
        <p className="userInfoList">Relatioinship: {userInfo.relationship}</p>
        <p className="userInfoList">City: {userInfo.city}</p>
        <p className="userInfoList">Education: {userInfo.education}</p>
        <p className="userInfoList">Email: {userInfo.email}</p>
        {prop.userId === userId && <button onClick={handleEdit}>Edit</button>}
      </div>
    </div>
  );
}
