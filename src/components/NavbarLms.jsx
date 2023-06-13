import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

const NavbarLms = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const closeNavbar = () => setCollapsed(true); // Function to close the navbar

  return (
    <>
      <Navbar className='navbarTheme' light>
        <NavbarToggler onClick={toggleNavbar} className="me-auto" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" onClick={closeNavbar}>Dashboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/students" onClick={closeNavbar}>Students</Link>
            </NavItem>
            <NavItem>
              <Link to="/teachers" onClick={closeNavbar}>Teachers</Link>
            </NavItem>
            <NavItem>
              <Link to="/classes" onClick={closeNavbar}>Classrooms</Link>
            </NavItem>
            <NavItem>
              <Link to="/subjects" onClick={closeNavbar}>Subjects</Link>
            </NavItem>
            <NavItem>
              <Link to="/stdentreport" onClick={closeNavbar}>Students Reports</Link>
            </NavItem>
            <NavItem>
              <Link to="/assignsubject" onClick={closeNavbar}>Assign Subjects</Link>
            </NavItem>
            <NavItem>
              <Link to="/assignclass" onClick={closeNavbar}>Assign Classes</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Link href="/" className="me-2">
          <div className="avatar">
            <img src="avatar.png" alt="" />
          </div>
        </Link>
      </Navbar>
    </>
  );
};

export default NavbarLms;