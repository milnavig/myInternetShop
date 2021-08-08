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

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }

    return (
        <Navbar variant="dark" style={{backgroundColor: '#95D2EE'}} collapseOnSelect expand="lg">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{textDecoration: 'none'}} className="d-flex align-items-center">
                    <img src={flower} style={{width: 50, height: 50}} title="Flower Shop"></img>
                    <div style={{paddingLeft: 10, color: '#fff', fontSize: 28, alignItems: 'center'}}>InternetShop</div>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{fontSize: 18}}>
                    <Nav className={'ms-3 d-flex justify-content-center'}>
                        <LinkContainer to={SHOP_ROUTE}>
                            <Nav.Link><img src={home} style={{width: 13, height: 13, marginRight: 3}} title="Home"></img>Home</Nav.Link>
                        </LinkContainer>
                       
                        <NavDropdown title="Goods" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        
                        <LinkContainer to={BASKET_ROUTE}>
                            <Nav.Link><img src={cart} style={{width: 13, height: 13, marginRight: 3}} title="Cart"></img>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ABOUTUS_ROUTE}>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                   
                {
                    user.isAuth ? 
                    <Nav className="ms-auto p-2 bd-highlight" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={logout} style={{margin: 3}}>Log out</Button>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} style={{margin: 3}}>Admin dashboard</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto p-2 bd-highlight" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} style={{margin: 3}}>Sign in</Button>
                        <Button variant={"outline-dark"} onClick={() => history.push(REGISTRATION_ROUTE)} style={{margin: 3}}>Sign up</Button>
                    </Nav>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;