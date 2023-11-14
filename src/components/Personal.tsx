import React, { useState } from "react";
import TaskField from "./TaskField";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuCalendarCheck } from "react-icons/lu";
import { MdOutlineDone, MdEdit, MdDelete } from "react-icons/md";
import { Tasks } from "../models/tasks";
import profile from "../assets/Mo.jpg";
import "../style.css";

const Personal: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [edit, setEdit] = useState<Tasks>({
    id: Date.now(),
    name: "",
    desc: "",
    dueDate: "",
    isDone: false,
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    taskName: string,
    desc: string,
    dueDate: string
  ) => {
    e.preventDefault();

    if (edit.name.length === 0) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: taskName,
          desc: desc,
          dueDate: dueDate,
          isDone: false,
        },
      ]);
      console.log(tasks);
    } else {
      const editedTask = tasks.filter((t) => t.name === edit.name);
      const filteredTasks = tasks.filter((t) => t.name !== edit.name);
      const finalfiltered = [
        ...filteredTasks,
        {
          id: editedTask[0].id,
          name: taskName,
          desc: desc,
          dueDate: dueDate,
          isDone: editedTask[0].isDone,
        },
      ];
      finalfiltered.sort((a, b) => a.id - b.id);
      console.log(finalfiltered);
      setTasks(finalfiltered);
    }
  };

  return (
    <div className="personal_main">
      <div className="personal_sidebar">
        <div className="personal_sidebar_top">
          <img className="personal_image" src={profile} alt="Profile Image" />
          <span>Mo Zamani</span>
        </div>
        <div className="personal_sidebar_bottom">
          <h4 className="today_task">
            <AiOutlineCalendar />
            Recent tasks
          </h4>
          {tasks.map((t) => (
            <li key={t.name}>
              {t.name}
              <span className="edit" onClick={() => setEdit(t)}>
                <MdEdit />
              </span>
              <span className="done">
                <MdOutlineDone />
              </span>
              <span className="delete">
                <MdDelete />
              </span>
            </li>
          ))}
          <h4 className="completed_task">
            <LuCalendarCheck /> Completed tasks
          </h4>
        </div>
      </div>
      <div className="personal_main_content">
        <h2>gonnado</h2>
        <div className="enter_task">
          <div className="personal_main_content_form">
            <TaskField handleSubmit={handleSubmit} edit={edit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
