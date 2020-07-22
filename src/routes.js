import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home';
import Movies from './screens/Movies';
import Series from './screens/Series';

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/movies">
                <Movies/>
            </Route>
            <Route exact path="/series" >
                <Series/>
            </Route>
            <Route path="/" >
                <Home/>
            </Route>
        </Switch>
    )
}