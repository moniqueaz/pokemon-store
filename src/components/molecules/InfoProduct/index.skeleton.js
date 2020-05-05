import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  p {
    margin: 5px 0;
  }
`;

const InforCartSkeleton = () => {
  return (
    <SekeletonStyle>
      <Skeleton width="245px" height="35px" />
      <br />
      <Skeleton width="100px" height="20px" />
      <br />
      <p>
        <Skeleton width="150px" height="20px" />
      </p>
      <p>
        <Skeleton width="90px" height="20px" />
      </p>
      <p>
        <Skeleton width="110px" height="20px" />
      </p>
      <p>
        <Skeleton width="85px" height="20px" />
      </p>
      <br />
      <p>
        <Skeleton width="200px" height="30px" />
      </p>
      <p>
        <Skeleton width="245px" height="30px" />
      </p>
      <p>
        <Skeleton width="150px" height="30px" />
      </p>
      <p>
        <Skeleton width="170px" height="30px" />
      </p>
      <p>
        <Skeleton width="70px" height="30px" />
      </p>
      <p>
        <Skeleton width="120px" height="30px" />
      </p>
      <br />
      <Skeleton width="245px" height="70px" />
    </SekeletonStyle>
  );
};

export default InforCartSkeleton;
