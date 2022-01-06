import { useState } from "react";
import Modal from "react-modal";


export default function NewModal(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Edit</button>
      <button >Delete</button>
      <Modal
        id="mymodal"
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Edit your message</h2>
        <button onClick={closeModal}>close</button>
        <form className="form" onSubmit={(e) => console.log(e)}>
          <label htmlFor="nameInput">Name:</label>
          <input
            id="nameInput"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="messageInput">Message:</label>

          <input
            id="messageInpuut"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
}
