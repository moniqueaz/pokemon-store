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
  onClick: PropTypes.func,
};

export default Overlay;
