import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function addContent(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

  }
  function clearSection(){
    setNote({title: "",
    content: "",})
  }

  return (
    <div>
      <form onSubmit={(event)=>{event.preventDefault();}} >
        <input
          onChange={addContent}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={addContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={()=>{
           props.addNote(note);
           clearSection();
          
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
