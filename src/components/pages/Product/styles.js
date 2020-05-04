import styled, { keyframes } from 'styled-components';
import { height } from '../../../styles/variables';
import {
  grayLight,
  grayDark,
  success,
  white,
  gray,
  secondaryDark,
  secondary,
  black,
} from '../../../styles/theme';
import { font, progressBar } from '../../../styles/variables';

export const Wrapper = styled.div`
  padding: 20px 0;
  margin: 0 10px;

  .product {
    &__image {
      padding: 20px;

      @media (min-width: 1024px) {
        flex: 0 0 60%;
        width: 60%;
      }
    }
    &__types {
      display: flex;
      ul {
        margin-left: 8px;
      }
      li {
        display: inline-block;
        & + li {
          &::before {
            content: ', ';
          }
          &::after {
            content: '.';
          }
        }
      }
    }
  }
`;

const animateBar = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  border: 1px solid ${grayDark};
  border-radius: 10px;
  width: 245px;
  height: 5px;
  position: relative;
  overflow: hidden;
  background-color: ${gray};
  &:after {
    content: '';
    background-color: ${props =>
      props.value < 50
        ? progressBar.low
        : props.value <= 100
        ? progressBar.normal
        : progressBar.hard};
    position: absolute;
    left: 0;
    top: 50%;
    max-width: ${props => props.value / 2}%;
    height: 3px;
    transform: translateY(-50%);

    border-radius: 10px;
    border-bottom: 1px solid ${white};
    border-top: 1px solid ${white};

    animation-name: ${animateBar};
    animation-duration: 3s;
    pointer-events: all;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-fill-mode: both;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Info = styled.div`
  padding: 20px 0;
  width: 100%;
  border-radius: 10px;
  font-family: ${font.tertiary};

  @media (min-width: 1024px) {
    flex: 0 0 40%;
    width: 40%;
    padding: 20px;
    background-color: ${grayLight};
    margin: 40px 30px 0 0;
    height: calc(100% - ${height.desk.header} - ${height.desk.footer} - 80px);

    border-bottom: 4px solid ${grayDark};
    border-right: 4px solid ${grayDark};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: fixed;
    top: ${height.desk.header};
    right: 0;
    max-width: calc((100vw - 60px) * (30 / 100));
  }
  @media (min-width: 1366px) {
    right: calc((100vw - 1366px) / 2);
    max-width: calc((1366px - 60px) * (30 / 100));
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-family: ${font.secondary};
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Price = styled.div`
  font-family: ${font.tertiary};
  font-size: 30px;
  color: ${success};
  @media (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50%;
    padding: 0;
    background-color: ${secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    z-index: 5;
    border-bottom: 5px solid ${black};
  }
`;

export const Item = styled.span``;

export const Button = styled.div`
  width: 100%;
  padding: 0 50px;

  @media (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 50%;
    padding: 0;
    z-index: 5;
  }

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Stats = styled.div`
  text-transform: capitalize;
  h3 {
    font-size: 20px;
    font-weight: normal;
    margin: 5px 0;
  }
`;

export const Details = styled.div`
  margin-bottom: 10px;
`;

export const Description = styled.div`
  padding: 20px 0;
  @media (min-width: 1024px) {
    flex: 0 0 60%;
    width: 60%;
  }

  h3 {
    font-family: ${font.tertiary};
    margin-bottom: 15px;
    font-size: 40px;
  }

  h4 {
    font-family: ${font.tertiary};
    font-size: 26px;
    margin-bottom: 10px;
    text-transform: capitalize;
    border-bottom: 2px solid ${secondaryDark};
  }

  h5 {
    font-family: ${font.tertiary};
    font-size: 22px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
    line-height: 1.5em;
  }

  .product {
    &__descriptions {
      margin-bottom: 25px;
    }
  }
`;
