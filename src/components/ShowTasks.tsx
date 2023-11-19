import { useState } from "react";
import moment from "moment";
import { MdOutlineDone, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { ShowTasksProps, Tasks } from "../models/tasks";

const ShowTasks: React.FC<ShowTasksProps> = ({
  tasks,
  setTasks,
  doneTasks,
  setDoneTasks,
  timing,
}) => {
  const [desc, setDesc] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const handleDelete = (task: Tasks): void => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  const handleDone = (task: Tasks): void => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
    setDoneTasks([
      ...doneTasks,
      {
        id: task.id,
        name: task.name,
        desc: task.desc,
        dueDate: task.dueDate,
        isDone: true,
      },
    ]);
  };

  const handleShowDesc = (task: Tasks) => {
    if (desc === "") {
      setDesc(task.desc);
      setDueDate(task.dueDate);
    } else if (desc === task.desc) {
      setDesc("");
      setDueDate("");
    } else {
      setDesc(task.desc);
      setDueDate(task.dueDate);
    }
  };

  let filteredTasks;
  if (timing === "weekly") {
    filteredTasks = tasks.filter((t) => {
      const now = moment();
      const day = new Date(t.dueDate);
      const input = moment(day);
      if (now.isoWeek() === input.isoWeek()) return t;
    });
  } else if (timing === "monthly") {
    filteredTasks = tasks.filter((t) => {
      const now = new Date();
      if (now.getMonth() === parseInt(t.dueDate.split("-")[1]) - 1) {
        return t;
      }
    });
  } else {
    filteredTasks = tasks;
  }

  return (
    <div className="showTasks_main">
      <div className="tasks">
        {filteredTasks.map((t) => (
          <li key={t.name}>
            {t.name}
            <div className="actions">
              <span onClick={() => handleShowDesc(t)} className="show">
                {desc === t.desc ? (
                  <a title="Text Off">
                    <IoIosEyeOff />
                  </a>
                ) : (
                  <a title="Text On">
                    <FaEye />
                  </a>
                )}
              </span>
              <span className="done" onClick={() => handleDone(t)}>
                <a title="Completed">
                  <MdOutlineDone />
                </a>
              </span>
              <span className="delete" onClick={() => handleDelete(t)}>
                <a title="Delete">
                  <MdDelete />
                </a>
              </span>
            </div>
          </li>
        ))}
      </div>
      <div className={desc ? "default desc" : "default no_desc"}>
        <div>{desc}</div>
        <br />
        <div className={desc ? "" : "no_desc"}>
          <hr />
        </div>
        <div>{dueDate}</div>
      </div>
    </div>
  );
};

export default ShowTasks;
