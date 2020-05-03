import styled from 'styled-components';
import {
  black,
  success,
  error,
  primaryLight,
  white,
} from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 4;
  color: ${black};

  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  min-height: 200px;
  max-width: 500px;
  border: 5px solid ${primaryLight};
  background-color: ${white};
  padding: 20px;
  text-align: center;
  font-family: ${font.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 400px;
    max-height: calc(100vh - 20px);
  }

  h1,
  h2 {
    font-family: ${font.secondary};
  }

  .highlight {
    font-size: 40px;
  }

  .success {
    color: ${success};
  }

  .error {
    color: ${error};
  }

  .modal {
    &__close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;

export const Message = styled.div``;
