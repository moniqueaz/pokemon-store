import styled from 'styled-components';
import { white, black } from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Item = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-10px, 91%);
  z-index: 2;
  pointer-events: none;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.5s linear;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  bottom: 0;
  right: 0;

  &::before {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${white};
    position: absolute;
    top: -5px;
    left: calc(50% + 25px);
    transform: translateX(-50%);
  }
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;

  margin: 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  text-transform: capitalize;
  color: ${black};
  font-family: ${font.tertiary};
  a {
    text-decoration: none;
    color: inherit;
  }
`;
