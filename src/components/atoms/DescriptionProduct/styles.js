import styled from 'styled-components';
import { secondaryDark } from '../../../styles/theme';
import { font } from '../../../styles/variables';

export const Abilitys = styled.div`
  margin-bottom: 25px;
`;

export const Description = styled.div`
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
`;
