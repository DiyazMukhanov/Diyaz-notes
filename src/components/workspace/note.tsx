import styles from './note.module.css';
import {useContext, useEffect, useState} from "react";
import NotesContext from "../../store/notes-context";
import {Grid} from "@mui/material";

type Props = {
    title: string,
    text: string,
    id: number
}
const Note: React.FC<Props> = (props) => {
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const [updatedText, setUpdatedText] = useState(props.text);
    // console.log(updatedTitle, updatedText)
    const notesCtx = useContext(NotesContext);
    const id = props.id;
    const removeNoteHandler = () => {
        notesCtx.deleteNote(id);
    }

    const updateHandler = (event:any) => {
       if(event.target.id === 'title') {
           setUpdatedTitle(event.target.value);
           notesCtx.updateNote(id, updatedTitle, updatedText);
       }
        if(event.target.id === 'text') {
            setUpdatedText(event.target.value);
            notesCtx.updateNote(id, updatedTitle, updatedText);
        }

       // notesCtx.updateNote(id, updatedTitle, updatedText);
        // console.log(notesCtx.notes)
    }

    useEffect(() => {
        notesCtx.updateNote(id, updatedTitle, updatedText);
    }, [updatedTitle, updatedText])

    return (
        // <div className={styles.note}>
        <Grid item xs={12} md={4}>
       <h1>{props.title}</h1>
        {/* @ts-ignore */}<p>{props.text}</p>
        {/* @ts-ignore */}<input id='title' onChange={updateHandler} placeholder='Меняйте название'/>
        <input id='text' onChange={updateHandler} placeholder='Меняйте текст'/>
        <button onClick={removeNoteHandler} className={styles.button}>Удалить заметку</button>
       </Grid>
)
}

export default Note;