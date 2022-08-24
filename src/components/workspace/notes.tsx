import Note from "./note";
import { useContext } from "react";
import NotesContext from "../../store/notes-context";

const Notes: React.FC = (props) => {
    const notesCtx = useContext(NotesContext);
    const notes = notesCtx.notes;

    return (<div>
        {notes.map(note => <Note title={note.title} text={note.text}></Note>)}
    </div>);
}

export default Notes;