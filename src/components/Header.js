import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>POKÉDEX</Navbar.Brand>
                    </LinkContainer>
                    <form class='d-flex'>
                        <input class='form-control m-2' type='text' placeholder='Pesquisando...'/>
                        <button class='btn btn-primary m-2'>Pesquisar</button>
                    </form>
                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;