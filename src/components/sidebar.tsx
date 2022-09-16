import Drawer from "@mui/material/Drawer";
import LinkItem from "./linkItem";
import styles from "./sidebar.module.css";
import {List} from "@mui/material";

type linkItem = string[];
type Props = {
    openSideHandler: () => {},
    closeSideHandler: () => {},
    isSideOpen: boolean
}
const Sidebar: React.FC<Props> = ({openSideHandler, isSideOpen, closeSideHandler}) => {

    const links:linkItem = ['Заметки','Напоминания','Источники вдохновения','Личный','Рабочий','Изменение ярлыков','Архив', 'Корзина'];

    return (
        // <div className={styles.sidebar}>
        <Drawer
        anchor="left"
        open={isSideOpen}
        onClose={closeSideHandler}
        >
        <List>
            {links.map(link => (<LinkItem item={link}></LinkItem>))}
        </List>
        </Drawer>);
}

export default Sidebar;