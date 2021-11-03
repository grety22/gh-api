import styles from "./Footer.module.scss";
import Icon from '../Icon/Icon';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footer_a}>github API</p>
            <p className={styles.footer_separator}> | </p>
            <p className={styles.footer_a}>made with</p>
            <Icon/>
        </div>
    )
}

export default Footer