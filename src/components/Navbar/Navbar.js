import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container">
        <ul>
        <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="img">
          <div className="loader"></div>
          {/*<div className="nombre">Miguel Hilser</div>*/}
        </div>
    </nav>
  );
};

export default Navbar;
