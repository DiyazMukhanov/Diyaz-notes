import { Container } from "@mui/material";
import CreateNote from "./createNote";
import Notes from "./notes";
import styles from './workspace.module.css';


const WorkSpace: React.FC = (props) => {
    return (
        <div className={styles.workSpace}>
    <CreateNote></CreateNote>
            <Container maxWidth="sm" sx={{ mt: "50px"}}>
        <Notes></Notes>
                </Container>
    </div>);
}

export default WorkSpace;