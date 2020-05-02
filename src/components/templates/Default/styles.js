import styled, { css } from 'styled-components';
import {
  backgroundColor,
  textColor,
  backgroundFooter,
  textColorFooter,
} from '../../../styles/theme';
import { container, height } from '../../../styles/variables';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  // position: relative;
  @media (min-width: 1024px) {
    ${container}
    margin: 0 auto;
  }
`;

export const Footer = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${backgroundFooter};
  color: ${textColorFooter};
`;

export const Middle = styled.div`
  min-height: calc(${height.content} - ${height.header} - ${height.footer});
  @media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;

export const DefaultHeader = styled.div`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  width: 100%;
  height: auto;
  z-index: 2;
  background-color: ${backgroundColor};
`;

export const DefaultCart = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 3;

  @media (min-width: 1024px) {
    width: 400px;
    left: inherit;
    right: 0;
  }
`;

export const Content = styled.div`
  background-color: yellow;
  z-index: 1;
  @media (min-width: 1024px) {
    width: 100%;
    ${container}
  }
`;
