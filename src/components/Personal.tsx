import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import mo from "../assets/Mo.jpg";
import "../style.css";

const Personal: React.FC = () => {
  return (
    <div className="personal_main">
      <div className="personal_sidebar">
        <div className="personal_sidebar_top">
          <img className="personal_image" src={mo} alt="Profile Image" />
        </div>
        <div className="personal_sidebar_bottom">
          <h3 className="today_task">
            <AiOutlineCalendar />
            Today tasks
          </h3>
          <h3 className="completed_task">Completed tasks</h3>
        </div>
      </div>
      <div className="personal_main_content"></div>
    </div>
  );
};

export default Personal;
