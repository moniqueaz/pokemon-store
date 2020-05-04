import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const animateInHorizont = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 10px;

  @media (min-width: 768px) and (max-width: 1366px) {
    padding: 20px;
  }

  @media (min-width: 1367px) {
    padding: 20px 0;
  }
`;

export const Item = styled.li`
  animation-name: ${animateIn};
  @media (min-width: 768px) {
    animation-name: ${animateInHorizont};
  }
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-delay: ${props =>
    props.index - (props.page - 1) * props.itemsPerPage < 0
      ? -1
      : (props.index - (props.page - 1) * props.itemsPerPage) / 10}s;
  animation-fill-mode: both;
  transform-origin: 50% 0;
  height: 100%;

  flex: 0 0 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
    & + li {
      margin-left: 10px;
    }
  }

  @media (max-width: 1023px) {
    &:nth-child(2n - 1) {
      margin-left: 0;
    }
  }

  @media (min-width: 1024px) {
    flex: 1 1 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
    &:nth-child(3n - 2) {
      margin-left: 0;
    }
  }
`;

export const ShowMore = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;
