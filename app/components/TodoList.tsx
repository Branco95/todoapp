import { ITask } from "@/types/tasks";
import { Task } from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="table w-full ">
        <thead className="">
          <tr className="bg-slate-100">
            <th>Tasks</th>
            <th>Added</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
