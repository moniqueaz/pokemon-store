import styled, { css } from 'styled-components';
import {
  grayLight,
  white,
  backgroundColor,
  textColor,
} from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Container = styled.div`
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

  svg {
    color: ${textColor};
  }
`;

export const Content = styled.div`
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

export const Total = styled.span`
  font-family: ${font.tertiary};
  font-size: 20px;
`;

export const Bottom = styled.div`
  flex: 0 0 auto;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.tertiary};
  font-size: 20px;
  height: 100px;
`;
