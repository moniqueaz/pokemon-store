import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  p {
    margin: 5px 0;
  }
`;

const DescriptionProductSkeleton = () => {
  const [width, setWidth] = useState('');

  useEffect(() => {
    const result = window.innerWidth;
    if (result >= 1024 && result < 1366) {
      setWidth('590px');
    } else if (result >= 1366) {
      setWidth('790px');
    } else {
      setWidth(`${result - 20}px`);
    }
  }, []);

  return (
    <SekeletonStyle>
      <Skeleton width="245px" height="35px" />
      <br />
      <Skeleton width="200px" height="25px" />
      <br />
      <Skeleton width="200px" height="20px" />
      <div>
        <Skeleton width={width} height="15px" />
      </div>
      <div>
        <Skeleton width={width} height="15px" />
      </div>
      <br />
      <Skeleton width={width} height="20px" />
      <div>
        <Skeleton width={width} height="15px" />
      </div>
      <div>
        <Skeleton width={width} height="15px" />
      </div>
    </SekeletonStyle>
  );
};

export default DescriptionProductSkeleton;
