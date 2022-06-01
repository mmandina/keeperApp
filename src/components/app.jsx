import React from 'react'
import Footer from './footer'
import Note from './note'
import Heading from './header'
import { notes } from '../notes'

function createNote(noteItem) {
  return <Note
    title={noteItem.title}
    content= {noteItem.content}
  />
}

export default function app() {
  return <div><Heading />
  {notes.map(createNote)}
  <Footer /></div>

 }
