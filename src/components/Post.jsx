import React, { useEffect, useState } from "react";
import img from "../img/Ai.jpg";
import postImg from '../img/post1.jpg';
import "./post.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisVertical, faThumbsUp,faHeart
 
} from "@fortawesome/free-solid-svg-icons";
import { BackendUrl } from "./data";
const postImg1 = postImg;
export default function Post(prop) {
  const [userName,setUserName] = useState("");
  const [userImg,setUserImg] = useState("");
  const [userIdAll,setUserIdAll] = useState("");
  useEffect(()=>{
    
    const loaddata = async() =>{

      const res = await fetch(BackendUrl+'user/data',{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"userEmail" : prop.p.userEmail}) 
      })
      const data = await res.json();
      setUserImg(data.profilePic);
      setUserName(data.username);
      setUserIdAll(data._id);
      console.log(data.username,data.profilePic);




    }
    loaddata();


  },[])
  return (
    <div>
      <div className="postContainer custPostContainer">
        <div className="postHeader">
        <Link className="link" to={`/profile/${userIdAll}`}>
          <div className="userNameImgTimeContainer">
            
            
            
            <div className="userNameImg">
              <img src={BackendUrl+userImg} alt="" />
            </div>
            <div className="userName">{userName}</div>
           
            
            
            
             <div className="timestamp">5 min ago</div>
            
          </div>
          </Link>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className="postTextArea">
            <p>{prop.p.description}</p>
        </div>
        {postImg1 && (
        <div className="postImgArea">
            <img src={BackendUrl+prop.p.img} alt="" />
        </div>
        )}
        <div className="postControl">
            <div className="postbutton">
            <FontAwesomeIcon icon={faThumbsUp} style={{color: "#e61e9d",fontSize:"25px"}}/>
            <FontAwesomeIcon icon={faHeart} style={{color: "#e61e9d",fontSize:"25px"}} />
            <p>56 likes</p>
            </div>
            <div className="postComment">
                3 comments
            </div>
        </div>
      </div>
    </div>
  );
}
