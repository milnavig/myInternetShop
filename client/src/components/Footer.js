import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import flower from '../assets/flower.svg';

const Footer = () => {

    return (
        <Navbar variant="dark" style={{backgroundColor: process.env.REACT_APP_COLOR_3}} collapseOnSelect expand="lg">
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