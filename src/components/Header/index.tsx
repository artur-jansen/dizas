"use client"
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import Image from 'next/image';
import logoHeader from '../../assets/logo__dizas.webp';

const Header = () => {
  const [aberto, setAberto] = useState(false);

  const mudarMenu = () => {
    setAberto(!aberto);
  }

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><Image className='img__logo' src={logoHeader} alt="Logo da Dizas Store"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={mudarMenu} className={aberto ? 'toggler-icon-aberto' : 'toggler-icon-fechado'}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link href="#home" className='navbar__link'>Home</Nav.Link>
            <Nav.Link href="#sobre" className='navbar__link'>Sobre Nós</Nav.Link>
            <Nav.Link href="#colecao" className='navbar__link'>Nossa Coleção</Nav.Link>
            <Nav.Link href="#depoimentos" className='navbar__link'>Depoimentos</Nav.Link>
            <Nav.Link href="#localizacao" className='navbar__link'>Onde Nos Encontrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
