import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import Headroom from "react-headroom";
import { Fade } from "@ericcote/react-reveal";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [tern, setTern] = useState("");
  const match = window.matchMedia("(max-width: 1280px)").matches;
  const ternario = () => {
    if (match) {
      return setTern("_self");
    } else {
      return setTern("_blank");
    }
  };
  useEffect(() => {
    ternario();
  }, []);

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
              <Link to="/curriculum" target={tern}>
                Curriculum
              </Link>
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
