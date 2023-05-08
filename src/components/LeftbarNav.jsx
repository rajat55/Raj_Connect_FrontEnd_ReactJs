import React from "react";
import "./leftbarnav.css";
import UserNameImg from './UserNameImg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRss,
  faComment,
  faVideo,
  faUserGroup,
  faBookmark,
  faBriefcase,
  faCalendarDays,
  faBookOpen,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftbarNav() {
  return (
    <div className="leftFlex">
      <div className="leftbarContainer">
        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faRss} rotation={270} />
          </div>
          <div className="leftbarText">Feed</div>
        </div>

        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="leftbarText">Chat</div>
        </div>
        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faVideo} />
          </div>
          <div className="leftbarText">Video</div>
        </div>

        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <div className="leftbarText">Group</div>
        </div>

        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className="leftbarText">Bookmarks</div>
        </div>

        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="leftbarText">Jobs</div>
        </div>
        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
          <div className="leftbarText">Events</div>
        </div>
        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <div className="leftbarText">Courses</div>
        </div>
        <div className="leftbarItem">
          <div className="leftbarIcon">
            <FontAwesomeIcon icon={faCircleQuestion} />
          </div>
          <div className="leftbarText">Questions</div>
        </div>
        <div className="leftbarNavButtonContainer">
            <div className="leftbarNavButton">Show More</div>
        </div>
        <hr />

        <UserNameImg/>
        <UserNameImg/>
        <UserNameImg/>
        <UserNameImg/>
        <UserNameImg/>
        <UserNameImg/>
        <UserNameImg/>
      </div>
     
      
    </div>
  );
}
