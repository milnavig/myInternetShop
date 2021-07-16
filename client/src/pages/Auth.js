import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Authorization' : 'Registration' }</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-4"
                    placeholder="Enter your email">
                    </Form.Control>
                    <Form.Control className="mt-4"
                    placeholder="Enter your password">
                    </Form.Control>
                    <Row className="d-flex justify-content-between mt-4">
                        { isLogin ? 
                        <div style={{display: 'inline'}}>
                            Not registered yet? <NavLink to={REGISTRATION_ROUTE} >Register!</NavLink>
                        </div>
                        :
                        <div style={{display: 'inline'}}>
                            Have your own account? <NavLink to={LOGIN_ROUTE} >Login!</NavLink>
                        </div>
                        }
                        <Button variant="outline-success">{isLogin ? 'Enter' : 'Register'}</Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
}

export default Auth;