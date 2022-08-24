import search from '../assets/search.png';
import styles from './search.module.css';

const Search: React.FC = (props) => {
    return (
        <div className={styles.searchContainer}>
        <div className={styles.search}>
        <img className={styles.searchIcon} src={search} alt='search'/>
            <input className={styles.input}/>
        </div>
    </div>);
}

export default Search;