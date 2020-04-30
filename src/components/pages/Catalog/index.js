import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import {} from './style';

const Catalog = ({ theme, match }) => {
  const {
    params: { type },
  } = match;

  return (
    <>
      <h1>Catalog</h1>
    </>
  );
};

export default withTheme(Catalog);
