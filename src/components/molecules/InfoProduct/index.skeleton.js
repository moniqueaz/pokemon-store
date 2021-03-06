import React from 'react';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  div {
    margin: 5px 0;
  }
`;

const InforCartSkeleton = () => {
  return (
    <SekeletonStyle>
      <Skeleton width="235px" height="35px" />
      <br />
      <Skeleton width="100px" height="20px" />
      <br />
      <div>
        <Skeleton width="150px" height="20px" />
      </div>
      <div>
        <Skeleton width="90px" height="20px" />
      </div>
      <div>
        <Skeleton width="110px" height="20px" />
      </div>
      <div>
        <Skeleton width="85px" height="20px" />
      </div>
      <br />
      <div>
        <Skeleton width="200px" height="30px" />
      </div>
      <div>
        <Skeleton width="235px" height="30px" />
      </div>
      <div>
        <Skeleton width="150px" height="30px" />
      </div>
      <div>
        <Skeleton width="170px" height="30px" />
      </div>
      <div>
        <Skeleton width="70px" height="30px" />
      </div>
      <div>
        <Skeleton width="120px" height="30px" />
      </div>
      <br />
      <Skeleton width="235px" height="70px" />
    </SekeletonStyle>
  );
};

export default InforCartSkeleton;
