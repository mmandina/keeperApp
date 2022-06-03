import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note)
    event.preventDefault();
   
  }
  return<div>
    <form className="create-note" action="">
      <input onChange={handleChange}value={note.title} name="title"type="text" placeholder="Title" />
      <textarea onChange={handleChange}value={note.content} name="content" id="content" placeholder="Content" cols="30" rows="3"></textarea>
      <button onClick={submitNote}>Add</button>
    </form>
  </div>
}