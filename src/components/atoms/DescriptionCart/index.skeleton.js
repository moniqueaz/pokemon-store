import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const SekeletonStyle = styled.div`
  p {
    margin: 5px 0;
  }
`;

const DescriptionCartSkeleton = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('400px');

  useEffect(() => {
    const result = window.innerWidth;
    if (result >= 1024 && result < 1366) {
      setWidth('590px');
    } else if (result >= 1366) {
      setWidth('790px');
    } else {
      setWidth(`${result - 20}px`);
      setHeight('500px');
    }
  }, []);

  return (
    <SekeletonStyle>
      <Skeleton width="245px" height="35px" />
      <br />
      <Skeleton width="200px" height="25px" />
      <br />
      <Skeleton width="200px" height="20px" />
      <p>
        <Skeleton width={width} height="15px" />
      </p>
      <p>
        <Skeleton width={width} height="15px" />
      </p>
      <br />
      <Skeleton width={width} height="20px" />
      <p>
        <Skeleton width={width} height="15px" />
      </p>
      <p>
        <Skeleton width={width} height="15px" />
      </p>
    </SekeletonStyle>
  );
};

DescriptionCartSkeleton.defaultProps = {};

DescriptionCartSkeleton.propTypes = {};

export default DescriptionCartSkeleton;
