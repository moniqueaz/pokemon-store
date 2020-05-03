import styled, { css } from 'styled-components';
import {
  grayLight,
  white,
  backgroundColor,
  textColor,
  primaryDark,
  black,
} from '../../../styles/theme';
import { font, height } from '../../../styles/variables';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${props => (!props.show ? 'translateX(100%)' : 'translateX(0)')};
  transition: all 0.3s linear;
  color: ${black};

  @media (min-width: 1024px) {
    width: 400px;
    left: inherit;
    right: 0;
  }
`;

export const Content = styled.div`
  background-color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundColor};
  padding: 10px;
  color: ${textColor};
  flex: 0 0 auto;
  border-bottom: 4px solid ${primaryDark};

  svg {
    color: ${textColor};
  }

  @media (min-width: 1024px) {
    height: ${height.desk.header};
  }
`;

export const List = styled.div`
  overflow: auto;
  flex: 1 1 50%;
  padding: 10px 0;
  ul {
  }

  li {
    & + li {
      border-top: 1px solid ${grayLight};
    }
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-family: ${font.secondary};
  font-size: 16px;
`;

export const Count = styled.span`
  font-family: ${font.tertiary};
  font-size: 20px;
`;

export const Bottom = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  border-top: 2px solid ${grayLight};
`;

export const Total = styled.div`
  padding: 10px 0;
  text-align: center;
  font-family: ${font.tertiary};
  font-size: 20px;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.tertiary};
  font-size: 20px;
  height: 100px;
`;

export const DefaultCart = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100vw;
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
