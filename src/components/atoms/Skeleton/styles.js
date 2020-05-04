import styled, { keyframes } from 'styled-components';
import { skeleton } from '../../../styles/variables';

const animate = width => keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(${width});
  }
`;

export const Item = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => props.border};
  background-color: #dcdcdc;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: ${props => props.height};
    z-index: 1;
    background-image: linear-gradient(
      to right,
      ${skeleton.from},
      ${skeleton.to},
      ${skeleton.from}
    );
    transform: translateX(0);

    animation-name: ${props => animate(props.width)};
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0;
    animation-iteration-count: infinite;

    pointer-events: all;
  }
`;
