import { Container } from 'react-bootstrap';
import { useNavigate, NavLink } from "react-router-dom";

import Logo from "../assets/craftbeer.png";
import FooterImg from "../assets/footerimg.png";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import WhatsApp from "../assets/whatsapp.svg";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className="bg-dark">
            <Container className='d-flex justify-content-evenly mt-5 p-4'>
                <div className=''>
                    <img src={Logo} alt="craftBeer logo" width="200px" onClick={() => navigate("/")} />
                    <div>
                        <img src={WhatsApp} alt="WhatsApp logo" height="50px" />
                        <img src={Instagram} alt="Instagram logo" height="50px" />
                        <img src={Facebook} alt="facebook logo" height="50px" />
                    </div>
                </div>
                <div className='fs-4'>
                    <NavLink to="category/granBretaña" className="nav-link active text-warning p-3">Gran Bretaña</NavLink>
                    <NavLink to="category/norteAmerica" className="nav-link text-warning p-3">Norte América</NavLink>
                    <NavLink to="category/alemania" className="nav-link text-warning p-3">Alemania</NavLink>
                </div>
                <img src={FooterImg} alt="imagen footer comunidad" height="180px" />
            </Container>
        </Container>
    );
};