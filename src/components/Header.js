import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <i className="fas fa-robot"></i> Zlendo ChatBot
              </Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
