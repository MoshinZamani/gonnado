import { useState } from "react";
import { ShowCompletedProps, Tasks } from "../models/tasks";

const ShowCompleted: React.FC<ShowCompletedProps> = ({ doneTasks }) => {
  const [desc, setDesc] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

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
  return (
    <div className="showCompleted_main">
      <div className="doneTasks">
        {doneTasks.map((d) => (
          <li onClick={() => handleShowDesc(d)} key={d.id}>
            {d.name}
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

export default ShowCompleted;
