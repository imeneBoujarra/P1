/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="http://investintunisia.tn/Fr/success-stories_129_60_D154">
              Leoni
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leoni.com/">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leoni.com/jobs-career/hero-stories">
              Stories and Map
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright"> made at  
          © {new Date().getFullYear()} for leoni IT workers {" "}     
           
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
