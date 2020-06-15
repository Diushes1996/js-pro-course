import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const RoutedContent = () => {
    return (
        <Switch>
            <Route path="/">
                <Header/>
            </Route>
        </Switch>
    )
}