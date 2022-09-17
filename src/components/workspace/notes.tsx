import Note from "./note";
import { useContext } from "react";
import NotesContext from "../../store/notes-context";
import styles from './notes.module.css';
import { Container, Grid } from "@mui/material";

const Notes: React.FC = (props) => {
    const notesCtx = useContext(NotesContext);
    const notes = notesCtx.notes;


    return (
        // <Container maxWidth="sm" sx={{ mt: "50px"}}>
            <Grid container spacing={4} sx={{border: "solid red 1px"}}>
        {notesCtx.foundNote &&
            <Note title={notesCtx.foundNote.title} text={notesCtx.foundNote.text} id={notesCtx.foundNote.id} />}
        {!notesCtx.foundNote &&
             notes.map(note => <Note title={note.title} text={note.text} id={note.id}/>)}
            </Grid>
        // </Container>
);
}

export default Notes;