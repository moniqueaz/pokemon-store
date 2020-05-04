import React from 'react';
import { withTheme } from 'styled-components';
import Layout from '../../templates/Default';

import { Title } from './styles';

const EmptySearch = () => {
  return (
    <Layout>
      <Title>Empty Search :(</Title>
    </Layout>
  );
};

export default withTheme(EmptySearch);
