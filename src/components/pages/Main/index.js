import React from 'react';
import { withTheme } from 'styled-components';
import Layout from '../../templates/Default';

import { Wrapper } from './styles';

const Main = () => {
  return (
    <Layout>
      <Wrapper>Main</Wrapper>
    </Layout>
  );
};

export default withTheme(Main);
