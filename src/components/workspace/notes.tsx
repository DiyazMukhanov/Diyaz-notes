import Note from "./note";
import { useContext } from "react";
import NotesContext from "../../store/notes-context";
import styles from './notes.module.css';

const Notes: React.FC = (props) => {
    const notesCtx = useContext(NotesContext);
    const notes = notesCtx.notes;

    return (<div className={styles.notesContainer}>
        {notes.map(note => <Note title={note.title} text={note.text} id={note.id}></Note>)}
    </div>);
}

export default Notes;