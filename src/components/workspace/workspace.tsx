import { Container } from "@mui/material";
import CreateNote from "./createNote";
import Notes from "./notes";
import styles from './workspace.module.css';


const WorkSpace: React.FC = (props) => {
    return (
        <div className={styles.workSpace}>
    <CreateNote />
            {/*<div className={styles.container}>*/}
        {/*<div className={styles.notesContainer}>*/}
            {/*<Container*/}
            {/*    // maxWidth="sm"*/}
            {/*    sx={{ mt: "50px", width:"70%", */}
            {/*    }}*/}
            {/*    >*/}
            {/*<div className={styles.notesContainer}>*/}
        <Notes />
            {/*</div>*/}
                {/*</Container>*/}
        {/*</div>*/}
            {/*</div>*/}

    </div>);
}

export default WorkSpace;