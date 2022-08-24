import styles from './note.module.css';
import {useContext, useState} from "react";
import NotesContext from "../../store/notes-context";

type Props = {
    title: string,
    text: string,
    id: number
}
const Note: React.FC<Props> = (props) => {
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedText, setUpdatedText] = useState('');
    // console.log(updatedTitle, updatedText)
    const notesCtx = useContext(NotesContext);
    const id = props.id;
    const removeNoteHandler = () => {
        notesCtx.deleteNote(id);
    }

    const updateHandler = (event:any) => {
       if(event.target.id === 'title') {
           setUpdatedTitle(event.target.value);
       }
        if(event.target.id === 'text') {
            setUpdatedText(event.target.value);
        }

       notesCtx.updateNote(id, updatedTitle, updatedText);
        // console.log(notesCtx.notes)
    }

    return (<div className={styles.note}>
       <h1>Title: {props.title}</h1>
        {/* @ts-ignore */}<p>Mote: {props.text}</p>
        {/* @ts-ignore */}<input id='title' onChange={updateHandler}/>
        <input id='text' onChange={updateHandler}/>
        <button onClick={removeNoteHandler}>Удалить заметку</button>
        <button onClick={updateHandler}>Редактировать заметку</button>
    </div>)
}

export default Note;