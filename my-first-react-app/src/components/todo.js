import { useState } from "react";

import Modal from "./modal";
import Backdrop from "./backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
    </div>
  );
}

// { modalIsOpen ? <Backdrop /> : null }
// { modalIsOpen ? <Backdrop /> : null }

export default Todo;
