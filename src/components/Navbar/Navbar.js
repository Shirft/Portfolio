import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <HashLink smooth to="/#Aboutme">
            About me
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#Projects">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#Contact">
            Contact
          </HashLink>
        </li>
        <li>
          <Link to="/">Cv</Link>
        </li>
      </ul>
      <div className="img">
        <div className="loader"></div>
      </div>
    </nav>
  );
};

export default Navbar;
