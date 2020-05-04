import styled from 'styled-components';
import { primaryLight, white, grayLight } from '../../../styles/theme';

export const Item = styled.div`
  width: 100%;
  height: ${props => props.height};
  background-color: ${white};
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  background-color: ${grayLight};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 170px;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 170px;
    z-index: -2;
    background-color: ${primaryLight};
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }
`;
