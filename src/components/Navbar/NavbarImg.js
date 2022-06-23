import styles from './NavbarImg.module.css';
import headshot from '../../media/headshot.jpeg';

const NavbarImg = (props) => {
    return(
        <div onClick={props.onClick}><img className={styles.img} src={headshot} alt="Victor Sandru smiling"/></div>
    )
};

export default NavbarImg;