import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .skeleton {
    &__item {
      margin-bottom: 10px;

      @media (min-width: 768px) {
        flex: 0 0 calc(50% - 10px);
        max-width: calc(50% - 10px);
        & + div {
          margin-left: 10px;
        }
        @media (max-width: 1023px) {
          &:nth-child(2n - 1) {
            margin-left: 0;
          }
        }
      }
      @media (min-width: 1024px) {
        flex: 0 0 calc(33.333% - 10px);
        max-width: calc(33.333% - 10px);
        &:nth-child(3n - 2) {
          margin-left: 0;
        }
        & + div {
          margin-left: 10px;
        }
      }
    }
  }
`;

const ListSkeleton = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('400px');

  useEffect(() => {
    const result = window.innerWidth;
    if (result >= 768 && result < 1024) {
      setWidth(`${result / 2 - 10}px`);
    } else if (result >= 1024 && result < 1366) {
      setWidth(`${result / 3 - 22}px`);
    } else if (result >= 1366) {
      setWidth('430px');
    } else {
      setWidth(`${result - 20}px`);
      setHeight('300px');
    }
  }, []);

  return (
    <SekeletonStyle>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
      <div className="skeleton__item">
        <Skeleton width={width} height={height} border="10px" />
      </div>
    </SekeletonStyle>
  );
};

export default ListSkeleton;
