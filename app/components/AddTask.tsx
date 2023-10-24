"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
//uuidv4 é uma funcao que devolve um id unico random

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  // Function to format the date
  const formatDate = (date: Date): string => {
    //o nome do parametro é date e o tipo é Date e o tipo de retorno é uma string
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses são de 0 (janeiro) a 11 (dezembro)
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handlSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formattedDate = formatDate(new Date()); //Format the date, funcao devolve uma string
    await addTodo({ id: uuidv4(), text: newTaskValue, date: formattedDate });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {/* isto é o children */}
        <form onSubmit={handlSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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
      {/* Estamos a passar para o Modal 2 parametros*/}
    </div>
  );
};

export default AddTask;
