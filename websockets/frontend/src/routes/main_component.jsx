import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIN from "./LogIN";
import Home from "./Home";
import Chat from "./Chat";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path = '/' component={Home}></Route>
            <Route exact path = '/login' component={LogIN}></Route>
            <Route exact path='/chat' component={Chat}></Route>
        </Switch>
    );
}

export default Main;