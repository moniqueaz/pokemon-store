import styled, { css } from 'styled-components';
import { backgroundColor, textColor } from '../../../styles/theme';

export const Container = styled.div`
  background-color: ${backgroundColor};
  text-transform: uppercase;
  color: ${textColor};
  padding: 10px;
  position: relative;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-beteen;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: 'Press Start 2P', cursive;
  flex: 1 1 auto;

  a {
    text-decoration: none;
    color: ${textColor};
  }

  @media (min-width: 1024px) {
    margin-right: 50px;
  }
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

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Bottom = styled.div`
  background-color: green;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  transform: translateY(0);
  z-index: -1;

  ${props =>
    props.show &&
    css`
      transform: translateY(100%);
      z-index: 0;
    `}

  @media (min-width: 1024px) {
    position: static;
    transform: translateY(0);
    z-index: 0;
  }
`;
