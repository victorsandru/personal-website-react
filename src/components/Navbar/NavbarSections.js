import { Link, animateScroll as scroll } from "react-scroll";

const NavbarSections = props => {
    return (
        <Link className={props.className} to={props.id} offset={-150} smooth={true}>{props.name}</Link>
    );
}

export default NavbarSections;