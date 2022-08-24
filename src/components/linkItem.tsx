import styles from './linkItem.module.css';

type Props = {
    item: string
}

const LinkItem: React.FC<Props> = (props) => {
    return <div className={styles.item}><a>{props.item}</a></div>
}

export default LinkItem;