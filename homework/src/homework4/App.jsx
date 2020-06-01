import React, { useState } from 'react';
import { Login } from './Login';
import {Register} from './Register'
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch} from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
        <Link to="/register">Зарегистрироваться</Link>
        <Link to="/login">Выйти</Link>
            <Switch>
                <Route component={Register} path="/register"></Route>
                <Route component={Login} path="/login"></Route>
            </Switch>
        </BrowserRouter>
    )
}
