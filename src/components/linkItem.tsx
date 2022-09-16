import styles from './linkItem.module.css';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

type Props = {
    item: string
}

const LinkItem: React.FC<Props> = (props) => {
    return (
        <ListItem>
            <ListItemButton>
            <ListItemText primary={props.item} />
            </ListItemButton>

        </ListItem>)
}

export default LinkItem;