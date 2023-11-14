import { useState, useEffect } from "react";
import { Tasks } from "../models/tasks";

type Props = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    taskName: string,
    desc: string,
    dueDate: string
  ) => void;
  edit: Tasks;
};

const TaskField: React.FC<Props> = ({ handleSubmit, edit }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  useEffect(() => {
    setDesc(edit.desc);
    setDueDate(edit.dueDate);
    setTaskName(edit.name);
  }, [edit]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, taskName, desc, dueDate);
    setDesc("");
    setDueDate("");
    setTaskName("");
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <h5>Enter a task</h5>
      <input
        value={taskName}
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        value={desc}
        placeholder="Description"
        name="desc"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <label htmlFor="dueDate">Due date :</label>
      <input
        value={dueDate}
        type="date"
        id="dueDate"
        name="dueDate"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button>Go</button>
    </form>
  );
};

export default TaskField;
