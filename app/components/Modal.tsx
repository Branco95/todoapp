interface ModalPropss {
  // ModalPropss é um tipo de interface que recebe dois
  //parametros vindos do AddTask.tsx e que sao passados para o Modal.tsx
  modalOpen: boolean; // modalOpen é um booleano que vem do AddTask.tsx
  setModalOpen: (open: boolean) => boolean | void; // setModalOpen é uma funcao que recebe um booleano e retorna um booleano ou void
}

const Modal: React.FC<ModalPropss> = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      {" "}
      {/* Se o modalOpen for true entao usa o modal-open*/}
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          X
        </label>
        <h3 className="text-lg font-bold">Congratulations</h3>
        <p className="py-4"> You av</p>
      </div>
    </div>
  );
};

export default Modal;
