import LinkItem from "./linkItem";
import styles from "./sidebar.module.css";

type linkItem = string[];
const Sidebar: React.FC = (props) => {
    const links:linkItem = ['Заметки','Напоминания','Источники вдохновения','Личный','Рабочий','Изменение ярлыков','Архив', 'Корзина'];

    return (<div className={styles.sidebar}>
        <ul>
            {links.map(link => (<LinkItem item={link}></LinkItem>))}
        </ul>
    </div>);
}

export default Sidebar;