import styles from './note.module.css';
import {useContext, useEffect, useState} from "react";
import NotesContext from "../../store/notes-context";
import {Grid, Paper, TextField, Typography} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

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

    const matchExtraSmall = useMediaQuery('(min-width: 0)');
    const matchesSmall = useMediaQuery('(min-width: 600px)');
    const matchesMedium = useMediaQuery('(min-width: 900px)');
    const matchesLarge = useMediaQuery('(min-width: 1200px)');


    return (
        // <div className={styles.note}>
        <Grid item xs={12} md={4} lg={4}  sx={{ width: "100px"}}>
            <Paper
                elevation={3}
                sx={
                {
                    pl:"20px",
                    // ml: "50px",
                    // ...(matchExtraSmall && {
                    //     ml: "50px"
                    // }),
                    width:"300px",
                    background: "#f2f4f5",
                    minHeight: "300px",
                    wordWrap:"break-word",
                    pr:"20px"
                }
            }>
       <Typography variant="h6">{props.title}</Typography>
        {/* @ts-ignore */}<Typography sx={{mb:"20px"}}>{props.text}</Typography>
        {/* @ts-ignore */}<TextField
                variant="standard"
                id='title'
                onChange={updateHandler}
                placeholder='Редактируй название'
                sx={{mb:"10px", border:"none"}}
                InputProps={{
                    disableUnderline: true
                }}
            />
        <TextField
            variant="standard"
            id='text'
            onChange={updateHandler}
            placeholder='Редактируй текст'
            sx={{mb:"10px"}}
            InputProps={{
                disableUnderline: true
            }}
        />
        <button onClick={removeNoteHandler} className={styles.button}>Удалить заметку</button>
            </Paper>
       </Grid>
)
}

export default Note;