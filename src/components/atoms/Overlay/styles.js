import styled, { css } from 'styled-components';
import { black } from '../../../styles/theme';

export const OverlayStyle = styled.div`
  background-color: ${black};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  ${props =>
    props.show
      ? css`
          opacity: 0.5;
          pointer-events: all;
          transition: all 0.5s linear;
        `
      : css`
          opacity: 0;
          pointer-events: none;
          transition: all 0.5s linear;
        `};
`;
