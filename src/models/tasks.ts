export interface Tasks {
  id: number;
  name: string;
  desc: string;
  dueDate: string;
  isDone: Boolean;
}

export interface ShowTasksProps {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  doneTasks: Tasks[];
  setDoneTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  timing: string;
}

export interface ShowCompletedProps {
  doneTasks: Tasks[];
}
