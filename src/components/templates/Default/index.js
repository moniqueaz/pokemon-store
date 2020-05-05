import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../organisms/Header';

import {
  Wrapper,
  Content,
  DefaultHeader,
  Container,
  Middle,
  Footer,
} from './styles';

const Default = ({ children }) => {
  const [fixed, setFixed] = useState(false);

  const scrollDown = () => {
    if (window.pageYOffset > 200) {
      setFixed(true);
    }
    if (window.pageYOffset < 100) {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.onscroll = scrollDown;
  }, []);

  return (
    <Wrapper>
      <DefaultHeader fixed={fixed}>
        <Container>
          <Header />
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
  );
};

Default.defaultProps = {};

Default.propTypes = {
  /**
   * Essa pripriedade recebe o conteudo que será exibida no template.
   */
  children: PropTypes.object.isRequired,
};

export default Default;
