import { useContext } from 'react';
import { Context } from "../index";
import { Navbar, Container, Nav, Button, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';

const Pages = observer(() => {
    const {device} = useContext(Context);
    const pages = [1, 2, 3, 4, 5];

    return (
        <Pagination className="m-t-5">
            {pages.map(page => {
                return <Pagination.Item>
                    {page}
                </Pagination.Item>
            })}
        </Pagination>
    );
});

export default Pages;