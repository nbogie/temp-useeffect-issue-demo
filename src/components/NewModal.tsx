import { useEffect, useState } from "react";
import Modal from "react-modal";
import "../css/NewModal.css";

export default function NewModal(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  // const [message, setMessage] = useState<string>("");
  const [recommend, setRecommend] = useState<string>("");

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() =>
  { console.log(recommend)}, [recommend])
  

  // function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function handleCheckbox(tickedBox: number) {
    if (recommend === "") {
    let message = ""
    switch (tickedBox) {
      case 1:
        message="recommended";
        break;
      case 2:
        message = "not-recommended";
        break;
      case 3:
        message = "looks-interesting";
        break;
    }
    setRecommend(message)
  } else {
    setRecommend("")
  }
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
        <div className="row">
          <div className="col-9"><h1>Create New Recommendation</h1></div>
          <div className="col-1"><button onClick={closeModal}>Close</button></div>
        </div>
        <form className="form" onSubmit={(e) => console.log(e)}>
          <label htmlFor="titleInput">Title:</label>
          <input id="titleinput" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>


          <label htmlFor="linkInput">URL:</label>
          <input id="linkInput" placeholder="Link" onChange={(e) => setLink(e.target.value)}/>

          <label htmlFor="authorInput">Author:</label>
          <input id="authorInput" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
          
          <fieldset>
          <label className="boxes"><input type="checkbox" onChange={() => handleCheckbox(1)}/>Recommended</label>
          <label className="boxes"><input type="checkbox" onChange={() => handleCheckbox(2)}/>Not Recommended</label>
          <label className="boxes"><input type="checkbox" onChange={() => handleCheckbox(3)}/>Looks Interesting</label> 
          
          </fieldset>
         
          
          <label htmlFor="reasonInput">Reason:</label>
          <textarea id="reasonInput" rows={5} placeholder="Explain your choice" onChange={(e) => setReason(e.target.value)}/>
          
          <label htmlFor="summaryInput">Summary:</label>
          <textarea id="summaryInput" rows={5} placeholder="Summary of the description" onChange={(e) => setSummary(e.target.value)}/>

          <button type="submit">Submit</button>
        </form>
        
      </Modal>
    </>
  );
}
