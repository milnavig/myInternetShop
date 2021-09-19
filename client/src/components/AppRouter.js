import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    
    return (
        <Switch>
            {
                user.isAuth && authRoutes.map(({path, Component}) => {
                    return <Route key={path} path={process.env.PUBLIC_URL + path} component={Component} exact></Route>
                })
            }
            {
                publicRoutes.map(({path, Component}) => {
                    return <Route key={path} path={process.env.PUBLIC_URL + path} component={Component} exact></Route>
                })
            }
            <Redirect to={process.env.PUBLIC_URL + SHOP_ROUTE} />
        </Switch>
    );
});

export default AppRouter;