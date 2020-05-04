import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import GlobalStyle from '../src/styles/global';
import { MyThemeProvider } from '../src/styles/ThemeContext';
import { Provider } from 'react-redux';
import store from '../src/store';
// import { configureViewport } from '@storybook/addon-viewport';

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLarge: {
    name: 'Tablet Large',
    styles: {
      width: '1024px',
      height: '800px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1360px',
      height: '1024pxpx',
    },
  },
};

// configureViewport({
//   viewports: newViewports,
// });

const theme = process.env.REACT_APP_TYPE;

const styles = {
  padding: '20px',
};
const Container = ({ children }) => <div style={styles}>{children}</div>;

addParameters({
  viewport: {
    viewports: newViewports,
  },
});
addDecorator(withInfo);
addDecorator(story => (
  <MyThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Provider store={store}>{story()}</Provider>
    </Container>
  </MyThemeProvider>
));
