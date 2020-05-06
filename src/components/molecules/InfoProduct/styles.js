import styled, { keyframes } from 'styled-components';
import {
  grayDark,
  success,
  white,
  gray,
  secondary,
  black,
} from '../../../styles/theme';
import { font, progressBar } from '../../../styles/variables';

const animateBar = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  border: 1px solid ${grayDark};
  border-radius: 10px;
  width: 235px;
  height: 5px;
  position: relative;
  overflow: hidden;
  background-color: ${gray};
  &:after {
    content: '';
    background-color: ${props =>
      props.value < 50
        ? progressBar.low
        : props.value <= 100
        ? progressBar.normal
        : progressBar.hard};
    position: absolute;
    left: 0;
    top: 50%;
    max-width: ${props => props.value / 2}%;
    height: 3px;
    transform: translateY(-50%);

    border-radius: 10px;
    border-bottom: 1px solid ${white};
    border-top: 1px solid ${white};

    animation-name: ${animateBar};
    animation-duration: 3s;
    pointer-events: all;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-fill-mode: both;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-family: ${font.secondary};
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Price = styled.div`
  font-family: ${font.tertiary};
  font-size: 30px;
  color: ${black};

  @media (min-width: 1024px) {
    margin-bottom: 20px;
    color: ${success};
  }

  @media (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50%;
    padding: 0;
    background-color: ${secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    z-index: 1;
    border-bottom: 5px solid ${black};
  }
`;

export const Item = styled.span``;

export const Types = styled.p`
  display: flex;
  ul {
    margin-left: 8px;
  }
  li {
    display: inline-block;
    & + li {
      &::before {
        content: ', ';
      }
      &::after {
        content: '.';
      }
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  padding: 0 50px;

  @media (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 50%;
    padding: 0;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Stats = styled.div`
  text-transform: capitalize;
  margin-bottom: 20px;
  h3 {
    font-size: 20px;
    font-weight: normal;
    margin: 5px 0;
  }
`;

export const Details = styled.div`
  margin-bottom: 10px;
`;

export const ScrollArea = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`;
