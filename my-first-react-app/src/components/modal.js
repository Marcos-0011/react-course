function Modal(props) {
  //these two functions are a bit of an extra step as we can just pass the props onto the onClick attribute. however, this provides us w an alternate approach to how props are handled in our backdrop component
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
