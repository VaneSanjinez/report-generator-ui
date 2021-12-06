import React from "react";
import { Navbar, Container, NavDropdown, Nav} from "react-bootstrap";
import '../styles/Header.css';

class Header extends React.Component {
    render() {
      return (
        <div>
          <span className="title">Report Generator</span>
        </div>
      )
    }
  }

export default Header;