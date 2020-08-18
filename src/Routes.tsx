import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/main';
import Form from './pages/Form';
import Posts from './pages/Posts';

const Routes = () => {
    return( 
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/adm" component={Form}/>
            <Route path="/Posts" component={Posts}/>
        </Switch>
        </BrowserRouter>
    );
    
}

export default Routes;