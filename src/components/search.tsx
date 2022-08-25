import search from '../assets/search.png';
import styles from './search.module.css';
import {useContext, useRef} from "react";
import NotesContext from "../store/notes-context";

const Search: React.FC = (props) => {
    // const [enteredInput, setEnteredInput] = useState('');
    const inputRef = useRef();
    const notesCtx = useContext(NotesContext);
    const searchHandler = () => {
        // @ts-ignore
        const enteredInput = inputRef.current.value;
        // console.log(notesCtx.notes);
        const foundNote:any = notesCtx.notes.find((note):any => note.title === enteredInput);
        // console.log(foundNote);

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