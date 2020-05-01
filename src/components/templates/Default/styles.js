import styled, { css } from 'styled-components';
import { backgroundColor, textColor } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Header = styled.div`
  background-color: ${backgroundColor};
  text-transform: uppercase;
  color: ${textColor};
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  background-color: yellow;
`;

export const Cart = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: ${props => props.display};
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: 'Press Start 2P', cursive;
  flex: 1 1 auto;
`;

export const Button = styled.button`
  background-color: transparent;
  background-color: blue;
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 5px;

  & + button {
    margin-left: 20px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
