import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Catalog from './components/pages/Catalog';
import Product from './components/pages/Product';
import NotFound from './components/pages/NotFound';
import EmptySearch from './components/pages/EmptySearch';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:id" component={Product} />
        <Route path="/product/:id/:name" component={Product} />
        <Route path="/emptysea" component={EmptySearch} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
