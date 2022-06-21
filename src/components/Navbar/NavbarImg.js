import styles from './NavbarImg.module.css';
import headshot from './headshot.jpeg';

const NavbarImg = () => {
    return(
        <a><img className={styles.img} src={headshot}></img></a>
    )
};

export default NavbarImg;