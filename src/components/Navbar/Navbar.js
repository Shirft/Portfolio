import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import Headroom from "react-headroom";
import { Fade } from "@ericcote/react-reveal";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [tern, setTern] = useState("");
  const [disable, setDisable]=useState(false);
  const [isOpen, setIsOpen]=useState(false);

  const match = window.matchMedia("(max-width: 1280px)").matches;
  const match2 = window.matchMedia("(max-width: 768px)").matches;
  const ternario = () => {
    if (match) {
      return setTern("_self");
    } else {
      return setTern("_blank");
    }
  };

  const disabled=()=>{
    if(match2){
        setDisable(!disable);
      
    }else{
       return disable;
    }
  };

  useEffect(() => {
    ternario();
    disabled();
  }, []);

  useEffect(()=>{
    if(isOpen==true){
     document.querySelector(".home").style="filter: blur(8px);";
     document.querySelector("body").style="overflow: hidden;";
    }else{
      document.querySelector(".home").style="none";
      document.querySelector("body").style="none";
    }
  }, [isOpen]);



  return (
    <Headroom disable={disable} style={{position:{}}}>
      <Fade top>
        <nav className="container">
          <ul className={`${isOpen && "open"}`}>
            <li>
              <HashLink smooth to="/#Aboutme" onClick={()=> setIsOpen(false)}>
                About me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Projects" onClick={()=> setIsOpen(false)}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Contact" onClick={()=> setIsOpen(false)}>
                Contact
              </HashLink>
            </li>
            <li>
              <Link to="/curriculum" target={tern}>
                Curriculum
              </Link>
            </li>
          </ul>
          <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="img">
            <div className="loader"></div>
          </div>
        </nav>
      </Fade>
    </Headroom>
  );
};

export default Navbar;
