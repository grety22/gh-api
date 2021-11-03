import styles from "./Sidebar.module.scss";
import Logo from '../Logo/Logo';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo/>
        </div>
    )
}

export default Sidebar