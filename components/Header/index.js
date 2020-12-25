import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/etec/">Etec</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fatec/">Fatec</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/santalucia/">Santa Lúcia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/maromo71">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Aulas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Java
                </DropdownItem>
                <DropdownItem>
                  VBA
                </DropdownItem>
                <DropdownItem>
                  Javascript
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Outras
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;