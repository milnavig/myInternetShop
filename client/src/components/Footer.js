import { useContext } from 'react';
import { Context } from "../index";
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUTUS_ROUTE, GALLERY_ROUTE, BASKET_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import flower from '../assets/flower.svg';
import home from '../assets/home.svg';
import cart from '../assets/cart.svg';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {

    return (
        <Navbar variant="dark" style={{backgroundColor: '#95D2EE'}} collapseOnSelect expand="lg">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{textDecoration: 'none'}} className="d-flex align-items-center">
                    <img src={flower} style={{width: 50, height: 50}} title="Flower Shop"></img>
                    <div style={{paddingLeft: 10, color: '#fff', fontSize: 28, alignItems: 'center'}}>InternetShop</div>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Created by: <a href="#">Tereshchenko Alex</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;