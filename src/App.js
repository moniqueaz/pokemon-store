import React from 'react';
import Layout from './components/templates/Default';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import { MyThemeProvider } from './styles/ThemeContext';
import store from './store';

function App() {
  console.log('process.env.REACT_APP_TYPE: ', process.env.REACT_APP_TYPE);
  return (
    <Provider store={store}>
      <MyThemeProvider theme={process.env.REACT_APP_TYPE}>
        <GlobalStyle />
        <Routes />
      </MyThemeProvider>
    </Provider>
  );
}

export default App;
