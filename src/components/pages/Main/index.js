import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import { Wrapper } from './styles';

const Main = () => {
  return (
    <Wrapper>
      <h1>Main</h1>
    </Wrapper>
  );
};

export default withTheme(Main);
