import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { BackendUrl } from "../components/data";

function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [conpassword,setConPassword] = useState("");
  const [loading ,setLoading] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);

  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
   
  const handleSubmit = async() =>{
    setLoading(true);
    if(password !== conpassword ){
        myFunction();
        setLoading(false);
    }else{
        const UserData = {username,email,password};

        try{
        const res = await fetch(BackendUrl+'user/register',{
           method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(UserData)
        });

            const data = await res.json();
             if(data.sucess){

                alert(`User Created Sucessfully Please Login Now Your Email is ${email}`);
                setUserRegistered(true);
             }else{
                alert(`User Cannot be Created Sucessfully Please check email it must be unique ${email}`)
             }
            setLoading(false);





        
    }catch(e){
        console.log(e);
    }
       
        
       
        console.log(username,email,password,conpassword);

    }
    
  } 
  

  return (
    
    <div>
        {userRegistered &&
            (
    <Navigate to='/'></Navigate>)
  }
      <div className="containerLogin">
        <h1>Register </h1>
        <div className="loginArea registerPage">
          <div className="loginLogoArea">
            <FontAwesomeIcon className="navbarLogoFa" icon={faCircleNodes} />
            <span className="navbarLogo">RajConnect</span>
          </div>

          <div className="loginFieldsArea registerPage">
            <div className="LoginformArea">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Your Name" onChange={(e)=>{setUsername(e.target.value)}}/>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
              <label htmlFor=""> Confirm Password</label>
              <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setConPassword(e.target.value)}}/>
            </div>
            <div className="loginButton">
              <button onClick={handleSubmit} disabled={loading}>{loading ? ('Loading'):('Register')}</button>
            </div>
            <div className="loginRegister">
              Already Have Account <Link to="/"> Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div id="snackbar">PassWord is Not Same</div>
    </div>
  );
}

export default Register;
