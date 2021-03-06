import styled, { css } from 'styled-components';
import { white, black, grayLight } from '../../../styles/theme';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${white};
  border-radius: 50px;
  height: 40px;
  overflow: hidden;
  padding: 5px;
  width: 100%;
  border-bottom: 5px solid ${grayLight};
  border-right: 5px solid ${grayLight};

  svg {
    color: ${black};
    width: 20px;
    height: 20px;
    @media (min-width: 1024px) {
    }
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  border: 0;
`;

export const Button = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;

  & + button {
    margin-left: 5px;
  }

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      svg {
        color: ${grayLight};
      }
    `}

  @media (min-width: 1024px) {
    padding: 10px;
  }
`;

export const Image = styled.div`
  width: 50px;
  height: 100%;
  flex: 0 0 auto;
  background-image: url('/images/pokebola-icone.png');
  background-repeat: no-repeat;
  background-size: contain;
  flex: 0 0 auto;
`;
