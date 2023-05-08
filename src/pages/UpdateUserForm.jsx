import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { BackendUrl } from "../components/data";
import { UserContext } from "../context/userContext";
import "./updateUserForm.css";

function UpdateUserForm() {
  const { userId } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [education, setEducation] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [relatioinship, setRelationship] = useState("");
  const [loading, setLoading] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState(null);
  const [userCoverPic, setUserCoverPic] = useState(null);

  useEffect(() => {
    const dataloading = async () => {
      try {
        const res = await fetch(BackendUrl + "user/" + userId);

        const data = await res.json();
        if (data) {
          setUsername(data.username);
          setCity(data.city);
          setDescription(data.description);
          setEducation(data.education);
          setRelationship(data.relationship);

          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    dataloading();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("city", city);
    formdata.append("education", education);
    formdata.append("description", description);
    formdata.append("relationship", relatioinship);
    if(userProfilePic !== null){
    formdata.append("ProfileImg", userProfilePic[0]);
    }
    if(userCoverPic !== null){
    formdata.append("CoverImg", userCoverPic[0]);
    }
    formdata.append("userId", userId);
    //console.log(userCoverPic[0]);
    try {
      const res = await fetch(
        BackendUrl + "user/update/"+userId,
        {
          method: "POST",
          body: formdata,
        }
      );

      const data = await res.json();
      setLoading(false);
      setUserUpdated(true);
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div>
      {userUpdated && <Navigate to={`/profile/${userId}`}></Navigate>}
      <div className="containerLogin">
        <h1>Update User </h1>
        <div className="loginArea registerPage">
          <div className="loginFieldsArea updateUser registerPage">
            <div className="LoginformArea flexWrapUpdate">
              <div className="r">
                <p className="labelSmall">Name</p>
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <div className="r">
                <p className="labelSmall">Description</p>
                <input
                  type="text"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="r">
                <p className="labelSmall">Education</p>
                <input
                  type="text"
                  value={education}
                  placeholder="Education"
                  onChange={(e) => {
                    setEducation(e.target.value);
                  }}
                />
              </div>
              <div className="r">
                <p className="labelSmall">City</p>
                <input
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="r">
                <p className="labelSmall">Relationship</p>
                <input
                  type="text"
                  value={relatioinship}
                  placeholder="Relationship"
                  onChange={(e) => {
                    setRelationship(e.target.value);
                  }}
                />
              </div>
              <div className="r">
                <label htmlFor="">Profile Pic</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setUserProfilePic(e.target.files);
                  }}
                />
              </div>
              <div className="r">
                <label htmlFor="">Cover Pic</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setUserCoverPic(e.target.files);
                  }}
                />
              </div>
            </div>
            <div className="loginButton">
              <button onClick={handleUpdate} disabled={loading}>
                {loading ? "Loading" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserForm;
