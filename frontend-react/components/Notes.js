import { useState } from "react";
import axios from "axios";

const Notes = ({id, text, date, duedate, dead, handleDeleteNote, getNotes}) => {
    
    const [editState, setEditState] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const [editedDate, setEditedDate] = useState(duedate)

    const handleEditedDate = (event) => {
        setEditedDate(event.target.value)
    }
    const handleUpdate = async () => {
    const dD= new Date(editedDate);
    const cd  =new Date()
    let dead_v = false
    if (dD < cd) {
        dead_v = true;
    }
    let updatedNote = 
        {
            id:id,
            text:editedText,
            date:date,
            duedate:editedDate,
            dead:dead_v
        }
    

    
    await axios.put("http://localhost:8000/api/note-update/"+id+"/",updatedNote )
    
    getNotes()
    setEditState(false);
    };
    

    if(editState === false){if(dead == true){
        return (<div className="dead-note" >
                <div onClick={() => setEditState(true)}>
                    <span>{text}</span>
                </div>
                <div className="footer">
                <small>created on :  <div>{date}</div></small>
                <div>
                <small>deadline reached</small>
                </div>
                <a onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.2em">&#128465;</a>
                </div>
                </div>);
    }
    else{return(
        <div className="note" >
            <div onClick={() => setEditState(true)}>
                <span>{text}</span>
            </div>
            <div className="footer">
                <small>created on : <div>{date}</div></small>
                <div>
                <small>deadline : <div>{duedate}</div></small>
                </div>
                <a onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.2em">&#128465;</a>
                </div>
        </div>);}}
    else if (editState === true) {
        return (
        <div className="note ">
            <textarea rows="8" cols="10" placeholder={text} value={editedText} onChange={(e) => setEditedText(e.target.value)}></textarea>
            <div>
            <small>edit the deadline :</small>
            </div>
            <div>
            <input className="due-date" value={editedDate}  onChange={handleEditedDate} placeholder="(mm/dd/yyyy)" type="date" />
            </div>
            <div className="footer">
            <button className="btn"  onClick={handleUpdate}>save edit</button>
            <a onClick={() => {handleDeleteNote(id);setEditState(false)}} className="delete-icon" size="1.2em">&#128465;</a>  
            </div>
        </div>
);
}
    
}

export default Notes;