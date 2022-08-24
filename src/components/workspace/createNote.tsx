import styles from './createNote.module.css';
import { useContext, useState, useRef } from "react";
import NotesContext from "../../store/notes-context";

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
        const titleInputEntered = titleRef.current.value;
        // @ts-ignore
        const textInputEntered = textRef.current.value;
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
       console.log(notesCtx.notes);
    }

    return <div className={styles.createNote}>

        {/* @ts-ignore */}<form className={styles.form} onSubmit={submitHandler}>
        {/* @ts-ignore */}<input onChange={event => setTitle(event.target.value)} ref={titleRef}/>
        {/* @ts-ignore */}<input onChange={event => setText(event.target.value)}  ref={textRef}/>
            <button>Добавить заметку</button>
        </form>
    </div>
}

export default CreateNote;