import styled, { css, keyframes } from 'styled-components';
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
      margin-right: 10px;
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
  min-height: 15px;
  min-width: 15px;
  padding: 2px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  right: -2px;
`;

const animateIn = keyframes`
  0 {
    transform: translateY(100%);
    opacity: 0;
  }
  25% {
    transform: translateY(105%);
    opacity: .8;
  }
  50% {
    transform: translateY(100%);
    opacity: 1;
  }
  75% {
    transform: translateY(105%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
`;

// const animateOut = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

export const Bottom = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 50px;
  transform: translateY(100%);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;
  opacity: 0;
  pointer-events: none;

  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-fill-mode: both;

  ${props =>
    props.show &&
    css`
      animation-name: ${animateIn};
      animation-duration: 0.8s;
      pointer-events: all;
    `}

  @media (min-width: 1024px) {
    position: static;
    transform: translateY(0);
    z-index: 1;
    opacity: 1;
    pointer-events: all;
  }
`;
