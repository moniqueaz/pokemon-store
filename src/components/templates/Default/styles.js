import styled from 'styled-components';
import {
  backgroundColor,
  backgroundFooter,
  textColorFooter,
  primaryDark,
  grayLight,
  white,
} from '../../../styles/theme';
import { container, height, font } from '../../../styles/variables';

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
  border-top: 4px solid ${primaryDark};
  font-family: ${font.tertiary};
`;

export const Middle = styled.div`
  background-color: ${grayLight};
  min-height: calc(
    ${height.content} - ${height.mobile.header} - ${height.mobile.footer}
  );
  @media (min-width: 1024px) {
    // display: flex;
    position: relative;
    min-height: calc(
      ${height.content} - ${height.desk.header} - ${height.desk.footer}
    );
  }
`;

export const DefaultHeader = styled.div`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  width: 100%;
  height: auto;
  z-index: 2;
  background-color: ${backgroundColor};
  border-bottom: 4px solid ${primaryDark};
`;

export const Content = styled.div`
  z-index: 1;
  background-color: ${white};
  min-height: calc(
    ${height.content} - ${height.desk.header} - ${height.desk.footer}
  );
  @media (min-width: 1024px) {
    width: 100%;
    padding: 20px;
    ${container}
  }
`;
