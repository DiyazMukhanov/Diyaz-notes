import CreateNote from "./createNote";
import Notes from "./notes";
import styles from './workspace.module.css';


const WorkSpace: React.FC = (props) => {
    return (
        <div className={styles.workSpace}>
    <CreateNote></CreateNote>
        <Notes></Notes>
    </div>);
}

export default WorkSpace;