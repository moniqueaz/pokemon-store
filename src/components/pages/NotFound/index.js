import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import Layout from '../../templates/Default';

import { Title } from './styles';

const NotFound = () => {
  return (
    <Layout>
      <Title>404 NotFount :(</Title>
    </Layout>
  );
};

export default withTheme(NotFound);
