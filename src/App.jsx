import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  function addContent(data) {
    setNotes((prevValue)=>{
        return [...prevValue, data];
    });
     }
  
  function deleteNote(index){
    setNotes(notes.filter((num, idx)=>{
      return index !== idx}))
  }


  return (
    <div>
      <Header />
      <CreateArea
        addNote={addContent}
      />
      {notes.map((note, index)=>{return <Note key={index} id={index} title={note.title} content={note.content}  deleteNote={deleteNote} />})}
      <Footer />
    </div>
  );
}

export default App;
