import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Context } from '../public';
import { NOTFOUND_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from './routes';

export const AppRouter = () => {

    const {user} = useContext(Context);

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}

            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}

            <Redirect to={NOTFOUND_ROUTE}/>
        </Switch>
    )
}
