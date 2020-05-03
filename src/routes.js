import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Catalog from './components/pages/Catalog';
import SearchResult from './components/pages/SearchResult';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/search" component={SearchResult} />
      </Switch>
    </BrowserRouter>
  );
}
