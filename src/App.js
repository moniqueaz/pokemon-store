import React from 'react';
import Default from './components/templates/Default';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  {
    console.log('Routes: ', Routes());
  }
  return (
    <Provider store={store}>
      <Default theme="fire">
        <GlobalStyle />
        <Routes />
      </Default>
    </Provider>
  );
}

export default App;
