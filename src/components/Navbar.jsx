import React, { useContext, useState ,useEffect} from "react";
import "./navbar.css";
import ProImg from "../img/p9.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faEnvelope,
  faBell,
  faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/userContext";
import { BackendUrl } from "./data";

export default function Navbar() {
  const {userId,userEmail} = useContext(UserContext);
  const [name,setUserName] = useState('');
  const [imgUrl,setUserImg] = useState("");

  useEffect(()=>{
    
    const loaddata = async() =>{

      const res = await fetch(BackendUrl+'user/data',{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"userEmail" : userEmail}) 
      })
      const data = await res.json();
      setUserImg(data.profilePic);
      setUserName(data.username);
      console.log(data.username,data.profilePic);




    }
    loaddata();


  },[])


  return (
    <div className="navbarMainContainer">
      <div className="navbarContainer">
        <div className="navbarLogoContainer">
          <FontAwesomeIcon className="navbarLogoFa" icon={faCircleNodes} />
          <span className="navbarLogo">RajConnect</span>
        </div>
        <div className="navbarMidSec">
          <FontAwesomeIcon
            className="navbarSearchIcon"
            icon={faMagnifyingGlass}
            style={{ color: "#255ec1" }}
          />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbarRightSec">
          <div className="navbarRightSecLeft">
            <span className="navbarRightSecText">Home</span>
            <Link to={"/timeline/"+userId}><span className="navbarRightSecText">TimeLine</span></Link>
          </div>

          <div className="navbarRightMidSec">
            <div className="navbarBadge">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "30px", color: "FBFFB1" }}
              />
              <span className="badge">1</span>
            </div>
            <div className="navbarBadge">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "30px", color: "FBFFB1" }}
              />
              <span className="badge">1</span>
            </div>
            <div className="navbarBadge">
              <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: "30px", color: "FBFFB1" }}
              />
              <span className="badge">1</span>
            </div>
          </div>
          <Link className="noTD" to={'/profile/'+userId}>
          <div className="navbarRightSecRight">
            
            <img src={BackendUrl+imgUrl} alt="img" />
            <p>{name}</p>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
