import styles from './note.module.css';

type Props = {
    title: string,
    text: string
}
const Note: React.FC<Props> = (props) => {

    return (<div className={styles.note}>
       <h1>Title: {props.title}</h1>
        <p>Mote: {props.text}</p>
    </div>)
}

export default Note;