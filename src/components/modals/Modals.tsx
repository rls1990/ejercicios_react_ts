/* eslint-disable @typescript-eslint/no-explicit-any */
import { useModal } from "../../hooks/modal/useModal";
import { Modal } from "./Modal";
import "./Modals.css";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <>
      <h2>Modales</h2>
      <button onClick={openModal1 as any}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi Modal 1.</p>
      </Modal>

      <button onClick={openModal2 as any}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi Modal 2.</p>
      </Modal>
    </>
  );
};
