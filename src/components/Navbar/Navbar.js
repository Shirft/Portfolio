import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import Headroom from "react-headroom";
import { Fade } from "@ericcote/react-reveal";

const Navbar = () => {
  return (
    
    <Headroom>
      <Fade top>
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
      </Fade>
    </Headroom>
    
  );
};

export default Navbar;
