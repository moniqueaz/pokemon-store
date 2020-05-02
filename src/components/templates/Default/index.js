import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { MyThemeProvider } from '../../../styles/ThemeContext';

import Header from '../../organisms/Header';
import Cart from '../../organisms/Cart';

import {
  Wrapper,
  Content,
  DefaultHeader,
  DefaultCart,
  Container,
  Middle,
  Footer,
} from './styles';

const Default = ({ children, theme }) => {
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);
  const cart = useSelector(state => state.cart);

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
            <Header title={theme} toggleCart={() => setShow(!show)} />
          </Container>
        </DefaultHeader>
        <Middle>
          <Container>
            <Content>{children}</Content>
          </Container>
          <DefaultCart show={show} fixed={fixed}>
            <Cart data={cart} onClose={() => setShow(false)} />
          </DefaultCart>
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
