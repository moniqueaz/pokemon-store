import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { MyThemeProvider } from '../../../styles/ThemeContext';

import Header from '../../organisms/Header';
import Cart from '../../organisms/Cart';

import {
  Wrapper,
  Content,
  DefaultHeader,
  DefaultCart,
  Button,
  Bottom,
} from './styles';

const Default = ({ children, theme }) => {
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    console.log('show: ', show);
  }, [show]);

  return (
    <MyThemeProvider theme={theme}>
      <Wrapper>
        <DefaultHeader fixed={fixed}>
          <Header title={theme} toggleCart={() => setShow(!show)} />
        </DefaultHeader>
        <Bottom>
          <Content>{children}</Content>
          <DefaultCart show={show} fixed={fixed}>
            <Button onClick={() => setShow(false)}>
              <FiX />
            </Button>
            <Cart />
          </DefaultCart>
        </Bottom>
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
