import React from 'react';
import { Container,Nav,Navbar } from 'react-bootstrap';
import {ReactComponent as Logo} from '../../assets/svg/pc.svg';

import './TopMenu.scss';

export default function TopMenu() {
    return (
     <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
      {/*<MenuNav/>*/ }   
       </Container>
     </Navbar>
    );
}

function BrandNav(){
    return( 
        <Navbar.Brand>
          <Logo/>
          <h2>La Minerita</h2>
        </Navbar.Brand>
        );
}

function MenuNav(){
  return(
  <div className="">
    <Nav.Link href="">Home</Nav.Link>
    <Nav.Link href="">Shop</Nav.Link>
    <Nav.Link href="">About...</Nav.Link>
    <Nav.Link href="">Help</Nav.Link>
  </div>
  );
}