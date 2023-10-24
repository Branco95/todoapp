import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.tasks}</td>
      <td>Blue</td>
    </tr>
  );
};
