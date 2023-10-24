"use client";
import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, settaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({ id: task.id, text: taskToEdit });
    settaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          {/* isto é o children */}
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => settaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full"
              />
              <button type="submit" className="btn ">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
};
