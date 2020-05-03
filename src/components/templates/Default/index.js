import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MyThemeProvider } from '../../../styles/ThemeContext';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import Header from '../../organisms/Header';

import {
  Wrapper,
  Content,
  DefaultHeader,
  Container,
  Middle,
  Footer,
} from './styles';

const Default = ({ children, theme }) => {
  console.log('theme: ', theme);
  const [fixed, setFixed] = useState(false);

  const scroll = () => {
    if (window.pageYOffset > 200) {
      setFixed(true);
    }
    if (window.pageYOffset < 100) {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.onscroll = scroll;
  }, []);

  return (
    <MyThemeProvider theme={theme}>
      <Wrapper>
        <DefaultHeader fixed={fixed}>
          <Container>
            <Header title={theme} />
          </Container>
        </DefaultHeader>
        <Middle>
          <Container>
            <Content>{children}</Content>
          </Container>
        </Middle>
        <Footer>
          <Container>Pokemon</Container>
        </Footer>
      </Wrapper>
    </MyThemeProvider>
  );
};

Default.defaultProps = {};

Default.propTypes = {
  /**
   * Essa pripriedade recebe o conteudo que será exibida no template.
   */
  children: PropTypes.element.isRequired,
  /**
   * Essa pripriedade informa o tema do projeto.
   */
  theme: PropTypes.string.isRequired,
};

export default Default;
