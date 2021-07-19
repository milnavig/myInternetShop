import { useState, useContext } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { registration, login } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useHistory } from 'react-router-dom';

const Auth = observer(() => {
    let { user } = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                const data = await login(email, password);
            }
            else {
                const data = await registration(email, password);
                console.log(data);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch(e) {
            alert(e.response.data.message);
        }
        
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{ isLogin ? 'Authorization' : 'Registration' }</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-4"
                    placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                    <Form.Control className="mt-4"
                    placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} type="password">
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
                        <Button variant="outline-success" onClick={isLogin ? click : click}>{isLogin ? 'Enter' : 'Register'}</Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;