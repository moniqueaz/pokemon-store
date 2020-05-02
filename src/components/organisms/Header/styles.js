import styled, { css } from 'styled-components';
import {
  backgroundColor,
  textColor,
  backgroundColorSecondary,
  textColorSecondary,
} from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Container = styled.div`
  background-color: ${backgroundColor};
  text-transform: uppercase;
  color: ${textColor};
  padding: 10px;
  position: relative;

  display: flex;
  justify-content: space-beteen;
  align-items: center;

  @media (min-width: 1024px) {
  }

  .button {
    &__search {
      @media (min-width: 1024px) {
        display: none;
      }
    }
    &__cart {
      @media (min-width: 1024px) {
        order: 2;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: ${font.secondary};
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
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 5px;
  position: relative;

  & + button {
    margin-left: 20px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Count = styled.span`
  background-color: ${backgroundColorSecondary};
  color: ${textColorSecondary};
  border-radius: 50%;
  height: 12px;
  width: 12px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  right: -2px;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 50px;
  transform: translateY(0);
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;

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
