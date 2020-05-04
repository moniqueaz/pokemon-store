import styled from 'styled-components';
import { gray } from '../../../styles/theme';

export const Item = styled.div`
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;

  margin: 10px;
`;

export const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Type = styled.p`
  font-size: 10px;
  span {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  font-size: 10px;
  span {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 15px;
    height: 15px;
    color: ${gray};
  }
`;
