import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { OverlayStyle } from './styles';

const Overlay = ({ onClick, show }) => {
  return <OverlayStyle onClick={onClick} show={show} />;
};

Overlay.defaultProps = {
  onClick: () => undefined,
  show: false,
};

Overlay.propTypes = {
  /**
   * Essa propriedade é responsavel por receber uma função que será executado no
   * no click do modal.
   */
  onClick: PropTypes.func,
  /**
   * Essa propriedade definie se o componente está sendo exibido ou não
   */
  show: PropTypes.bool,
};

export default Overlay;
