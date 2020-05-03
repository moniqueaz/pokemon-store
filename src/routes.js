import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Catalog from './components/pages/Catalog';
import NotFound from './components/pages/NotFound';
import EmptySearch from './components/pages/EmptySearch';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/emptysearch" component={EmptySearch} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
