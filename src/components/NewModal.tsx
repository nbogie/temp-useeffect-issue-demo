import { useState } from "react";
import Modal from "react-modal";
import "../css/NewModal.css";

export default function NewModal(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState<string>("");
  // const [message, setMessage] = useState<string>("");
  const [recommend, setRecommend] = useState<string>();

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="sidebarbutton" onClick={openModal}>
        <span className="span">+ Create New Recommendation</span>
      </div>
      <Modal
        id="mymodal"
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>Create New Recommendation</h1>
        <button onClick={closeModal}>close</button>
        <form className="form" onSubmit={(e) => console.log(e)}>
          <label htmlFor="titleInput">Title:</label>
          <input id="titleinput" placeholder="Title" />


          <label htmlFor="linkInput">URL:</label>
          <input id="linkInput" placeholder="Link" />

          <label htmlFor="authorInput">Author:</label>
          <input id="authorInput" placeholder="Author"></input>
          <button onClick={() => setRecommend("Recommended")}>
            Recommended
          </button>
          <button onClick={() => setRecommend("Not Recommended")}>
            Not Recommended
          </button>
          <button onClick={() => setRecommend("Looks Interesting")}>
            Looks Interesting
          </button>
          <textarea placeholder="Explain why you would/wouldn't recommend or why it looks interesting"></textarea>
          <textarea placeholder="Description/Summary"></textarea>
          <button type="submit">Submit</button>
        </form>
        {/* <h2>Edit your message</h2>
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
        </form> */}
      </Modal>
    </>
  );
}
