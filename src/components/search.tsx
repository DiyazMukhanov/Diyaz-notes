import search from '../assets/search.png';
import styles from './search.module.css';
import {useContext, useRef} from "react";
import NotesContext from "../store/notes-context";

const Search: React.FC = (props) => {
    const inputRef = useRef();
    const notesCtx = useContext(NotesContext);
    const searchHandler = () => {
        // @ts-ignore
        const enteredInput = inputRef.current.value;

        const foundNote:any = notesCtx.notes.find((note):any => note.title === enteredInput);


        if(foundNote) {
            notesCtx.searchNote(foundNote);
        }
    }

    return (
        <div className={styles.searchContainer}>
        <div className={styles.search}>
            {/* @ts-ignore */}<img className={styles.searchIcon} src={search} alt='search' onClick={searchHandler}/>
            <input className={styles.input} ref={inputRef}/>
        </div>
    </div>);
}

export default Search;