import styled from 'styled-components';
import {
  primaryLight,
  secondary,
  black,
  grayLight,
  white,
} from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Item = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${white};
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 170px;
    z-index: -1;
    background-image: url('/images/bgbright-x2.png');
    background-size: inherit;
    background-position: center;
    filter: brightness(2.5);
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
    background-image: url('/images/bgbright-x2.png');
    background-size: cover;
    background-position: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 60%;
  margin-bottom: 20px;
`;

export const Type = styled.span`
  padding: 5px 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: ${font.tertiary};
  text-transform: uppercase;
  text-align: right;
  margin-left: auto;
  background-color: ${white};
  border-bottom: 2px solid ${grayLight};
  border-right: 2px solid ${grayLight};
`;

export const Price = styled.span`
  padding: 10px;
  font-family: ${font.tertiary};
`;

export const Title = styled.h2`
  font-family: ${font.tertiary};
`;

export const Bottom = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Middle = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`;
