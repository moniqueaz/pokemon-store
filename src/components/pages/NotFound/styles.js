import styled from 'styled-components';
import { font } from '../../../styles/variables';
import { gray } from '../../../styles/theme';

export const Title = styled.h2`
  padding: 20px 10px;
  color: ${gray};
  font-family: ${font.secondary};
  text-align: center;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
