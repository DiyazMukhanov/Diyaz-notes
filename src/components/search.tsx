import search from '../assets/search.png';
import styles from './search.module.css';
import {useContext, useRef} from "react";
import NotesContext from "../store/notes-context";
import {AppBar, Divider, IconButton, InputBase, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    toggleSide: () => {},
}

const Search: React.FC<Props> = ({toggleSide}) => {
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
        <AppBar position="static">
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
                    sx={{ width: "50%" }}
                    placeholder="Найти заметку"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </div>
                {/*<TextField variant="filled" fullWidth={true} color="secondary" size="small"/>*/}
            </Toolbar>
        {/*<div className={styles.search}>*/}
        {/*    /!* @ts-ignore *!/<img className={styles.searchIcon} src={search} alt='search' onClick={searchHandler}/>*/}
        {/*    <input className={styles.input} ref={inputRef}/>*/}
        {/*</div>*/}
    </AppBar>);
}

export default Search;