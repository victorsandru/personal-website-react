import headshot from '../../media/headshot.jpeg';

const NavbarImg = (props) => {
    return(
        <div onClick={props.onClick}><img className={props.className} src={headshot} alt="Victor Sandru smiling"/></div>
    )
};

export default NavbarImg;