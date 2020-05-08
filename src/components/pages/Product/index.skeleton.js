import React, { useState, useEffect } from 'react';
import Skeleton from '../../atoms/Skeleton';
import styled from 'styled-components';
import { Item } from '../../atoms/Skeleton/styles';

export default styled(Item)`
  height: 300px;
  width: 100%;
  border-radius: 10px;

  @media (min-width: 1024px) {
    height: 269px;
  }

  @media (min-width: 1366px) {
    height: 370px;
  }
`;
