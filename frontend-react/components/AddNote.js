import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const date = new Date()
    const datetFormatted = date.getFullYear() + '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
    // const [titleText, setTitleText] = useState('');
    
    const [noteText, setNoteText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const charecterLimit = 200;

    const handleChange = (event) => {
        if(charecterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value);
    };

    const handleDueDate = (event) => {
        setDueDate(event.target.value);
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0 && dueDate !== ""){
            handleAddNote(noteText, dueDate, datetFormatted);
            setNoteText("");
            setDueDate("");
        }
    };
    return(
        <div className="note new">
            {/* <input type="text" value="" placeholder="Title" className="title"></input> */}
            <textarea
                rows="8"
                cols="10"
                placeholder="description ..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div>
                <small>add a deadline :</small>
            </div>
            <div>
                <input className="due-date"  value={dueDate} placeholder="(mm/dd/yyyy)"  onChange={handleDueDate} type="date" />
            </div>
            <div className="footer">
                <small>
                    {charecterLimit - noteText.length} charecters remaining
                </small>
                <button className="btn"  onClick={handleSaveClick}>save</button>
            </div>
        </div>

    )

}

export default AddNote;
