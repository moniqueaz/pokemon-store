import React, { useState, useEffect } from 'react';
import Skeleton from '../../atoms/Skeleton';

const ProductSkeleton = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('400px');

  useEffect(() => {
    const result = window.innerWidth;
    if (result >= 1024 && result < 1366) {
      setWidth('590px');
      setHeight('269px');
    } else if (result >= 1366) {
      setWidth('790px');
      setHeight('370px');
    } else {
      setWidth(`${result - 20}px`);
      setHeight('300px');
    }
  }, []);

  return <Skeleton width={width} height={height} border="10px" />;
};

export default ProductSkeleton;
