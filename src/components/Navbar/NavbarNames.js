import styles from './NavbarNames.module.css';

const NavbarNames = props => {
    return (
        <div className={styles.item}>{props.name}</div>
    );
}

export default NavbarNames;