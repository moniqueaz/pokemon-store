import styled from 'styled-components';
import { font } from '../../../styles/variables';
import { gray } from '../../../styles/theme';

export const Wrapper = styled.div`
  padding: 20px 0;
  margin: 0 10px;

  .product {
    &__image {
      padding: 20px;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    flex: 1 1 60%;
    width: 50%;
  }
`;

export const Info = styled.div`
  padding: 20px 0;

  @media (min-width: 1024px) {
    flex: 1 1 40%;
    padding: 20px;
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

export const Title = styled.h2``;

export const Item = styled.span``;

export const Description = styled.div``;
