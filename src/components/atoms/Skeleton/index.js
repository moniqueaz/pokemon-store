import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

const Skeleton = ({ height, width, border }) => {
  return <Item width={width} height={height} border={border} />;
};

Skeleton.defaultProps = {
  height: '50px',
  width: '100px',
  border: '0px',
};

Skeleton.propTypes = {
  /**
   * Essa propriedade é responsavel por definir a altura do component
   */
  height: PropTypes.string,
  /**
   * Esssa propriedade é responsavel por definir a altura do componente.
   */
  width: PropTypes.string,
  /**
   * Essa propriedade é responsavel por definir o raio da borda do componente.
   */
  border: PropTypes.string,
};

export default Skeleton;
