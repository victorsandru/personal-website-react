import styles from './NavbarItem.module.css';

const NavbarItem = props => {
    return (
        <a className={styles.item}>{props.name}</a>
    );
}

export default NavbarItem;