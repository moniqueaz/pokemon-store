import styled from 'styled-components';
import { font, main } from '../../../styles/variables';
import { black } from '../../../styles/theme';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  border-top: 10px solid ${main.blueDark};
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  min-height: calc(100vh - 50px);
  width: 100%;
`;

export const Label = styled.label`
  font-family: ${font.secondary};
  color: ${black};
`;

export const Image = styled.img`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const ImageType = styled.div`
  width: 100%;
  background-image: url(${props => props.image});
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 10px;
  border: 5px solid ${main.blue};

  @media (min-width: 1024px) {
    transition: all 0.1s linear;
    filter: grayscale(1);

    &:hover {
      border: 5px solid ${main.blueDark};
      transition: all 0.1s linear;
      filter: none;
    }
  }
`;

export const Button = styled.a`
  width: auto;
  flex: 0 0 auto;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const ButtonContaienr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${main.blueDark};
  color: ${main.white};
  font-family: ${font.tertiary};
  text-align: center;
`;
