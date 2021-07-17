import { useContext } from 'react';
import { Context } from "../index";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>InternetShop</NavLink>
                {
                    user.isAuth ? 
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Log out</Button>
                        <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="ms-2">Admin dashboard</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(REGISTRATION_ROUTE)}>Registration</Button>
                    </Nav>
                }
                
            </Container>
        </Navbar>
    );
});

export default NavBar;