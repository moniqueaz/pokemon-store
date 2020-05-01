import styled, { css } from 'styled-components';
import { backgroundColor, textColor } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const DefaultHeader = styled.div`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  width: 100%;
  height: auto;
  z-index: 2;
`;

export const DefaultCart = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 3;
`;

export const Content = styled.div`
  background-color: yellow;
  z-index: 1;
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
