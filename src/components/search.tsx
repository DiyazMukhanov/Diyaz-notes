import search from '../assets/search.png';
import styles from './search.module.css';
import {useContext, useRef, useState} from "react";
import NotesContext from "../store/notes-context";
import {AppBar, Divider, IconButton, InputBase, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    toggleSide: () => {},
}

const Search: React.FC<Props> = ({toggleSide}) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();
    const notesCtx = useContext(NotesContext);

    const searchHandler = () => {
        console.log(inputValue)

        // @ts-ignore
        let enteredInput = inputRef.current.value;

        const foundNote:any = notesCtx.notes.find((note):any => note.title === enteredInput);

        if(foundNote) {
            notesCtx.searchNote(foundNote);
        }
        setInputValue('');
    }


    return (
        <AppBar position="static" >
            <Toolbar
            sx={{background: "white", color: "#5f6368"}}
            >
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={toggleSide}
              >
                 <MenuIcon />
              </IconButton>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{display: {xs: 'none', sm: 'block'}, mr: "20px"}}
                >
                    Diyaz notes
                </Typography>
                <div className={styles.searchContainer}>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <InputBase
                    onChange={event => setInputValue(event.target.value)}
                    value={inputValue}
                    inputRef={inputRef}
                    sx={{ width: "100%" }}
                    placeholder="Найти заметку"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchHandler}>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </div>
            </Toolbar>
    </AppBar>);
}

export default Search;