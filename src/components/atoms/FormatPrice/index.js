import React from 'react';
import PropTypes from 'prop-types';

import {} from './styles';

const FormatPrice = ({ value, currency }) => {
  return (
    <>
      {currency} {(value / 100).toFixed(2).replace('.', ',')}
    </>
  );
};

FormatPrice.defaultProps = {
  value: 0,
  currency: 'R$',
};

FormatPrice.propTypes = {
  /**
   * Essa propriedade é responsavel por informar o valor que será formatado
   */
  value: PropTypes.number,
  /**
   * Essa propriedade é responsavel por defini a moeda
   */
  currency: PropTypes.string,
};

export default FormatPrice;
