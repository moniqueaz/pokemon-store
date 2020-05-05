import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  p {
    margin: 5px 0;
  }
`;

const InforCartSkeleton = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('400px');

  useEffect(() => {
    const result = window.innerWidth;
    if (result >= 1024) {
      setWidth(`${result - 20}px`);
    } else {
      setWidth(`${result - 20}px`);
    }
  }, []);

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

InforCartSkeleton.defaultProps = {};

InforCartSkeleton.propTypes = {};

export default InforCartSkeleton;
