import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { OverlayStyle } from './styles';

const Overlay = ({ onClick }) => {
  return <OverlayStyle onClick={onClick} />;
};

Overlay.defaultProps = {
  onClick: () => undefined,
};

Overlay.propTypes = {
  /**
   * Essa propriedade é responsavel por receber uma função que será executado no
   * no click do modal.
   */
  onClick: PropTypes.func,
};

export default Overlay;
