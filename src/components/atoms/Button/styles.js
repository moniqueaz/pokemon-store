import styled, { css } from 'styled-components';
import { backgroundButtonColor, black } from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const ButtonStyle = styled.button`
  display: flex;
  position: relative;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: ${font.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid ${black};
  border-right: 4px solid ${black};

  padding: ${props =>
      props.size === 'small'
        ? '5px'
        : props.size === 'normal'
        ? '10px'
        : '15px'}
    10px;

  ${props =>
    props.full &&
    css`
      width: 100%;
    `}

  * {
    display: flex;
    justify-content: center;
    align-items: center;
    & + * {
      margin-left: 5px;
    }
  }
`;
