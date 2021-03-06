import styled, { css } from 'styled-components';
import { font } from '../../../styles/variables';

export const ButtonStyle = styled.button`
  display: flex;
  position: relative;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 5px 10px;
  font-family: ${font.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    & + span {
      margin-left: 5px;
    }
  }
`;
