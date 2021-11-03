import styles from "./Footer.module.scss";
import Icon from '../Icon/Icon';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/grety22/gh-api" target="_blank" rel="noreferrer" className={styles.footer_a}>github API</a>
            <p className={styles.footer_separator}> | </p>
            <p className={styles.footer_a}>made with</p>
            <Icon/>
        </div>
    )
}

export default Footer