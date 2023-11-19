import { useState } from "react";
import { Tasks } from "../models/tasks";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  tasks: Tasks[];
};

const TaskField: React.FC<Props> = ({ setTasks, tasks }) => {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: name,
        desc: desc,
        dueDate: dueDate,
        isDone: false,
      },
    ]);
    setDesc("");
    setDueDate("");
    setName("");
  };

  return (
    <div className="taskField_main">
      <form id="add_new_task" onSubmit={(e) => handleOnSubmit(e)}>
        <h5>Enter a task</h5>
        <br />
        <input
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          value={desc}
          placeholder="Description"
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="dueDate">Due date :</label>
        <input
          value={dueDate}
          type="date"
          id="dueDate"
          name="dueDate"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <div className="button">
          <button>Add</button>&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              setName("");
              setDesc("");
              setDueDate("");
            }}
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskField;
