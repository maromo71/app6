import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
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
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <Navbar style={{ backgroundColor: '#2F4F4F' }} dark expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/etec" passHref><NavLink >Etec</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/fatec" passHref><NavLink >Fatec</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/santalucia" passHref><NavLink >Santa Lúcia</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="http://github.com/maromo71" passHref><NavLink >Github</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/sobre" passHref><NavLink >Sobre</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Aulas
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/java" passHref><DropdownItem classname='dropdown-item'>Java</DropdownItem></Link>
                <Link href="/javascript" passHref><DropdownItem classname='dropdown-item'>Javascript</DropdownItem></Link>
                <Link href="/react" passHref><DropdownItem classname='dropdown-item'>React</DropdownItem></Link>
                <DropdownItem divider />
                <Link href="/outras" passHref><DropdownItem classname='dropdown-item'>Outras</DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;