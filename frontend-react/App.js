import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from './components/Header'
import axios from "axios";


const App = () => 
{ 
  const [notes, setNotes] = useState([
    
  ]);

  const date = new Date()
    const datetFormatted = date.getFullYear() + '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');

  const getNotes = async () => {
    const response  = await axios.get('http://localhost:8000/api/note-list/')
    setNotes(response.data)
    
  }
  useEffect(() => {
  getNotes();
    },[])

  const [darkMode, setDarkMode] = useState(false);
  const [searchText , setSearchText] = useState('');

const addNote = async ( text, dueDate, datetFormatted1) => {
        const dD= new Date(dueDate);
        const cd  =new Date(datetFormatted)
        let dead_v = false
        if (dD < cd) {
          dead_v = true;
        }
        const newNote ={
        id : nanoid(),
        // title : title,
        text: text, 
        date: datetFormatted1,
        duedate: dueDate,
        dead : dead_v, 
      }
      const newNotes = [...notes, newNote];
      await axios.post("http://localhost:8000/api/note-create/",newNote);
      setNotes(newNotes);
  };

const deleteNote = async (id) => {
    await axios.delete("http://localhost:8000/api/note-delete/"+id)
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }
  
  const checkDeadlines = () => {
    
    notes.forEach((note) => {
      const dueDate = new Date(note.duedate);
      const cd  =new Date(datetFormatted)

      if (dueDate < cd) {
        note.dead = true;
      }
    });
  };

  checkDeadlines();

  return (
    
    <>
  <div className={`${darkMode && 'dark-mode'}`}>
  <div className="containor">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
        <NotesList notes={notes.filter((notes)=> 
        notes.text.toLowerCase().includes(searchText)
        )}
         handleAddNote = {addNote} 
         handleDeleteNote  = {deleteNote}
         getNotes = {getNotes}/>
  </div>
  </div>
    </>
  );
}; 

export default App;
