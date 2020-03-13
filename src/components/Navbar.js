import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";



function Navbar({page}) {

    let scrollToTop = () => {
        scroll.scrollToTop();
      };

    return page ? (
      <nav style={{left: "72em"}}>
        <ul>
          <li>
            <RouterLink className="link" activeClass="active" to="/">
              Home
            </RouterLink>
          </li>
          {/* <li>
            <RouterLink className="link" activeClass="active" to="About">
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink className="link" activeClass="active" to="work">
              Work
            </RouterLink>
          </li>
          <li>
            <RouterLink className="link" activeClass="active" to="contact">
              Contact
            </RouterLink>
          </li> */}
        </ul>
      </nav>
    ) : (
      <nav>
        <ul>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="homw"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="reflections"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Reflections
            </Link>
          </li>
          {/* <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  }


export default Navbar;
