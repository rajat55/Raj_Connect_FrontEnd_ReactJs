import React, { useContext, useState ,useEffect} from "react";
import img1 from "../img/Ai.jpg";
import "./postSec.css";
import Post from "./Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faTag,
  faLocationDot,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

import { BackendUrl } from "./data";
import { UserContext } from "../context/userContext";

export default function PostSec(prop) {


  const contextUser = useContext(UserContext);
  //console.log(contextUser);
  const [emailr, setEmailr] = useState("");
  const [img, setImg] = useState();
  const [description, setDescription] = useState("");
  const [isposting,setPosting] = useState(false)
   const value = contextUser.userEmail;

   const {userId} =  useContext(UserContext);
   const [postdata ,setPostData] = useState([]);
   
   useEffect(()=>{
    if(prop.location === 'P'){
     const loadData = async() =>{
     const res = await fetch(`${BackendUrl}post/profile/${prop.Id}`);
      const data = await res.json();
      console.log("Postdata",data);
      setPostData(data);
      console.log(postdata);
      
     }
     loadData();
    }else{
      const loadData = async() =>{
        const res = await fetch(`${BackendUrl}post/timeline/${userId}`);
         const data = await res.json();
         console.log("Postdata",data);
         setPostData(data);
         console.log(postdata);
         
        }
        loadData();

    }
   },[])
  
   useEffect(() => {
    setEmailr(contextUser.userEmail);
  }, [contextUser.userEmail]);
 
 

  const handlePost = async () => {
    setPosting(true);
    console.log(contextUser.userEmail)
    const formdata = new FormData();
    formdata.append("email", emailr);
    formdata.append("description", description);
    formdata.append("img", img[0]);

    const res = await fetch(BackendUrl + "post/create", {
      method: "POST",
     
      body: formdata
    });

    const data = await res.json();
    setPosting(false);
    console.log(data);
  };

  return (
    <div>
      <div>
      {prop.Id === userId || prop.location !== "P" ? (
      <div className="postContainer">
        <div className="postEditor">
          <div className="postImgProfile">
            <img src={img1} alt="" />
          </div>
          <div className="postTextEditor">
            <input
              type="text"
              placeholder="What is in your Mind"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <hr />
        <div className="iconInputArea">
          <div className="iconInputItem">
            <div className="iconInput">
              <label htmlFor="img">
                <FontAwesomeIcon icon={faFile} />
                Photo
                <input
                  type="file"
                  name="img"
                  id="img"
                  htmlFor="photo"
                  onChange={(e) => {
                    setImg(e.target.files);
                    console.log(img);
                  }}
                />
              </label>
            </div>
            <div className="iconInput">
              <FontAwesomeIcon icon={faTag} />
              <div className="iconInputText">Tag</div>
            </div>
            <div className="iconInput">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="iconInputText">Location</div>
            </div>
            <div className="iconInput">
              <FontAwesomeIcon icon={faFaceSmile} />
              <div className="iconInputText">Feelings</div>
            </div>
          </div>
          <div className="postBtn" onClick={handlePost}>
            {isposting ? 'Posting':'Post'}
          </div>
        </div>
      </div>
      ):""}</div>
      {postdata.map((d)=>{
        return(<Post p={d}/>)
      })}
    </div>
  );
}
