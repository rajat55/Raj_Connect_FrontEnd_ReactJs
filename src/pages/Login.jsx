import React, { useContext, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { BackendUrl } from "../components/data";
import { UserContext } from "../context/userContext";


function Login() {
  const [email, setEmail] = useState("test111@gamil.com");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [userId,setUserId] = useState(false);
  

  const contextUser = useContext(UserContext);
  console.log(contextUser);
  console.log(contextUser.userEmail);
  

  const handleLogin = async () => {
    setLoading(true);
    console.log(email, password);
    const UserData = { email: email, password: password };

    try {
      const res = await fetch(BackendUrl + "user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserData),
      });
      const data = await res.json();
      console.log(data);
      if (data.sucess) {
        setUserId(data.userId);

        console.log(userId);
        contextUser.setUserEmail({userEmail:email,userId:data.userId})
        localStorage.setItem("UserToken", data.userToken);
        setLogin(true);
      } else {
        alert("Wrong Credentials");
      }
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <div>
      {isLogin && <Navigate to={"/timeline/"+userId} />}
      <div className="containerLogin">
        <h1>Login </h1>
        <div className="loginArea">
          <div className="loginLogoArea">
            <FontAwesomeIcon className="navbarLogoFa" icon={faCircleNodes} />
            <span className="navbarLogo">RajConnect</span>
          </div>

          <div className="loginFieldsArea">
            <div className="LoginformArea">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="loginButton">
              <button onClick={handleLogin}>
                {isLoading ? "Loading... WAIT" : "Login"}
              </button>
            </div>
            <div className="loginRegister">
              Does Not Have Account <Link to="/register"> Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
