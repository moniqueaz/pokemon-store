import styled from 'styled-components';
import { grayLight, white } from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Image = styled.img`
  width: 60%;
  margin-bottom: 20px;
  max-width: 185px;
`;

export const Type = styled.span`
  padding: 5px 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: ${font.tertiary};
  text-transform: uppercase;
  text-align: right;
  margin-left: auto;
  background-color: ${white};
  border-bottom: 2px solid ${grayLight};
  border-right: 2px solid ${grayLight};
`;

export const Price = styled.span`
  padding: 10px;
  font-family: ${font.tertiary};
`;

export const Title = styled.h2`
  font-family: ${font.tertiary};
`;

export const Bottom = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Middle = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`;
