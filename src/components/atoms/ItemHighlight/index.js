import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Item } from './styles';

const ItemHighlight = ({ children, height, className }) => {
  return (
    <Item height={height} className={className}>
      {children}
    </Item>
  );
};

ItemHighlight.defaultProps = {
  height: '400px',
  className: '',
};

ItemHighlight.propTypes = {
  /**
   * Essa propriedade defini a altra do componente.
   */
  height: PropTypes.string,
  /**
   * Essa propriedade é responsavel por receber uma classe.
   */
  className: PropTypes.string,
};

export default withTheme(ItemHighlight);
