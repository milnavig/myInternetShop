import { useContext } from 'react';
import { Context } from "../index";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>InternetShop</NavLink>
                {
                    user.isAuth ? 
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(!user.isAuth)}>Registration</Button>
                        <Button variant={"outline-light"} className="ms-2">Admin dashboard</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(!user.isAuth)}>Registration</Button>
                    </Nav>
                }
                
            </Container>
        </Navbar>
    );
});

export default NavBar;