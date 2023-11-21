import React, { useState } from "react";
import TaskField from "./TaskField";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCalendarDay, BsCalendarMonth } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import ShowCompleted from "./ShowCompleted";
import About from "./About";
import ShowTasks from "./ShowTasks";
import { Tasks } from "../models/tasks";
import dog from "../assets/dog.jpg";
import "../style.css";

const Personal: React.FC = () => {
  const [flag, setFlag] = useState<string>("");
  const [timing, setTiming] = useState("");
  const [doneTasks, setDoneTasks] = useState<Tasks[]>([]);
  const [tasks, setTasks] = useState<Tasks[]>([]);

  return (
    <div className="personal_main">
      <div className="personal_sidebar">
        <div className="personal_sidebar_top">
          <img className="personal_image" src={dog} alt="Profile Image" />
          <span>Mo Zamani</span>
        </div>
        <br />
        <hr />
        <div className="personal_sidebar_bottom">
          <a
            title="Add new task"
            onClick={() => setFlag("add")}
            className="add_task"
          >
            &nbsp;&nbsp;
            <IoIosAddCircleOutline />
            &nbsp;&nbsp; Add new task
          </a>
          <a onClick={() => setFlag("tasks")}>
            <h4 className="today_task">
              &nbsp;&nbsp;
              <AiOutlineCalendar />
              &nbsp;&nbsp; Recent tasks
            </h4>
          </a>
          <div className="timing">
            <a
              onClick={() => {
                setFlag("tasks");
                setTiming("weekly");
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsCalendarDay />
              &nbsp;&nbsp; Weekly
            </a>
            <a
              onClick={() => {
                setFlag("tasks");
                setTiming("monthly");
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsCalendarMonth />
              &nbsp;&nbsp; Monthly
            </a>
            <a
              onClick={() => {
                setFlag("tasks");
                setTiming("yearly");
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VscCalendar />
              &nbsp;&nbsp; Yearly
            </a>
          </div>

          <h4 onClick={() => setFlag("done")} className="completed_task">
            <IoCheckmarkDoneCircleOutline /> &nbsp;&nbsp;Completed tasks
          </h4>
        </div>
      </div>
      <div className="personal_main_content">
        <div className="logo">
          <span className="logo_gonna">Gonna</span>
          <span className="logo_do">Do</span>
        </div>
        <div className="enter_task">
          <div className="personal_main_content_form">
            {flag === "add" ? (
              <TaskField setTasks={setTasks} tasks={tasks} />
            ) : flag === "tasks" ? (
              <ShowTasks
                tasks={tasks}
                setTasks={setTasks}
                doneTasks={doneTasks}
                setDoneTasks={setDoneTasks}
                timing={timing}
              />
            ) : flag === "done" ? (
              <ShowCompleted doneTasks={doneTasks} />
            ) : (
              <About />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
