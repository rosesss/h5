import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../page/Home';
import Advantage from '../page/Advantage';
import Toilet from '../page/Toilet';
class Router extends Component {
    render() {
        return (
                <div className="main-body">
                <BrowserRouter>
                  <Suspense fallback={null}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/advantage" exact component={Advantage} />
                        <Redirect to="/" />
                    </Switch>
                  </Suspense>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;