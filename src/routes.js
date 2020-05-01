import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Catalog from './components/pages/Catalog';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:type" component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
}
