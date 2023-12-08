import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../assets/craftbeer.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to="/" > <> <img src={Logo} alt="craftBeer logo" width="250px" /> </> </NavLink>
                <Nav className="me-auto">
                    <NavLink to="category/granBretaña" className="nav-link active text-warning p-3 fs-3">Gran Bretaña</NavLink>
                    <NavLink to="category/norteAmerica" className="nav-link text-warning p-3 fs-3">Norte América</NavLink>
                    <NavLink to="category/alemania" className="nav-link text-warning p-3 fs-3">Alemania</NavLink>
                </Nav>
                <div className="nav-link text-warning p-3 fs-4" href="#">
                    <CartWidget />
                </div>
            </Container>
        </Navbar>
    );
};