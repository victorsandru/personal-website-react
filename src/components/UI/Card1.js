import styles from './Card1.module.css';

const Card1 = (props) => {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}

export default Card1;
