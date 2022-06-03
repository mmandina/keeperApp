import React, {useState} from 'react'
import Footer from './footer'
import  Note  from './note'
import Heading from './header'
//import { Notes } from '../notes'
import CreateArea from './createArea'


export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
    return [...prevNotes,note]
    });
  }
  function deleteNote(id) {
    console.log();
    setNotes(prevNotes=> {
      return prevNotes.filter((noteItem, index) => {
      return index !== id
    })
  })
}
  
  return<div><Heading />
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />);
    })}
      
  <Footer />
  </div>

 }
