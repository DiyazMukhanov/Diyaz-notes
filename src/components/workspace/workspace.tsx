import CreateNote from "../notes/createNote";
import Notes from "../notes/notes";
import styles from './workspace.module.css';

const WorkSpace: React.FC = (props) => {
    return (
        <div className={styles.workSpace}>
            <CreateNote />
            <Notes />
        </div>);
}

export default WorkSpace;