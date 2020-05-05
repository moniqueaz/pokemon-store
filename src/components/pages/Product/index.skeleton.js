import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from '../../atoms/Skeleton';

const ProductSkeleton = () => {
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

  return <Skeleton width={width} height={height} border="10px" />;
};

ProductSkeleton.defaultProps = {};

ProductSkeleton.propTypes = {};

export default ProductSkeleton;
