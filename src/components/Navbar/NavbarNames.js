import styles from './NavbarNames.module.css';

const NavbarNames = props => {
    return (
        <a className={styles.item}>{props.name}</a>
    );
}

export default NavbarNames;