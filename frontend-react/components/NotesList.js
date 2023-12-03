import Note from "./Notes";
import AddNote from "./AddNote"

const NotesList = ({ notes , handleAddNote, handleDeleteNote, getNotes}) => {
    
    return(
        
        <div className="notes-l">
            {notes.map((notes) => (
                <Note id ={notes.id} 
                    //   title={notes.title}
                      text={notes.text} 
                      date={notes.date}
                      duedate={notes.duedate} 
                      dead = {notes.dead}
                      handleDeleteNote = {handleDeleteNote}
                      getNotes={getNotes}/>
            ))}
        <AddNote handleAddNote = {handleAddNote} />
        </div>

        
    );
};

export default NotesList