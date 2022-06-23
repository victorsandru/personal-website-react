import styles from './NavbarNames.module.css';

const NavbarNames = props => {
    return (
        <a className={styles.item} href={`#${props.id}`}>{props.name}</a>
    );
}

export default NavbarNames;