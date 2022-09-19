import styles from './createNote.module.css';
import { useContext, useState, useRef } from "react";
import NotesContext from "../../store/notes-context";
import Button from '@mui/material/Button';

const CreateNote:React.FC = (props: any) => {
    interface noteData {
        title: string,
        text: string,
        id: number
    }

    const titleRef = useRef();
    const textRef = useRef();

    const notesCtx = useContext(NotesContext);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [note, setNote] = useState<noteData| null>(null);

    const submitHandler = (event:any) => {
        event.preventDefault();
        // @ts-ignore
        let titleInputEntered = titleRef.current.value;
        // @ts-ignore
        let textInputEntered = textRef.current.value;
        const noteItem = {
            title: titleInputEntered,
            text: textInputEntered,
            id: Math.random()
        }

        setNote({
           title: title,
           text: text,
            id: Math.random()
        });
       notesCtx.createNote(noteItem);
        // @ts-ignore
        titleRef.current.value = '';
        // @ts-ignore
        textRef.current.value = '';

    }

    const showAllNotesHandler = () => {
        notesCtx.removeFoundNote();
        console.log(notesCtx.foundNote);
    }

    return <div className={styles.createNote}>

        {/* @ts-ignore */}<form className={styles.form} onSubmit={submitHandler}>
        {/* @ts-ignore */}<input onChange={event => setTitle(event.target.value)} ref={titleRef} placeholder='Введите Название'/>
        {/* @ts-ignore */}<input onChange={event => setText(event.target.value)}  ref={textRef} placeholder='Введите Текст'/>
            <Button>Добавить заметку</Button>
        </form>

        <Button onClick={showAllNotesHandler}>Показать все заметки</Button>

    </div>
}

export default CreateNote;