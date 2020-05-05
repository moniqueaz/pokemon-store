import styled, { keyframes } from 'styled-components';
import { height } from '../../../styles/variables';
import { grayLight, grayDark } from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Wrapper = styled.div`
  padding: 20px 0;
  margin: 0 10px;

  .product {
    &__image {
      padding: 20px;
      min-height: 300px;

      @media (min-width: 1024px) {
        flex: 0 0 60%;
        width: 60%;
        min-height: 269px;
      }
      @media (min-width: 1366px) {
        min-height: 370px;
      }
    }
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

export const Item = styled.span``;

export const Description = styled.div`
  padding: 20px 0;
  @media (min-width: 1024px) {
    flex: 0 0 60%;
    width: 60%;
  }
`;
