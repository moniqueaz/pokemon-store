import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Image = ({ src, alt, className }) => {
  const [imageFallBack, setImageFallBack] = useState(src);

  useEffect(() => {
    setImageFallBack(src);
  }, [src]);

  return (
    <img
      src={imageFallBack}
      alt={alt}
      onError={() => setImageFallBack('/images/missingno.png')}
      className={className}
    />
  );
};

Image.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

Image.propTypes = {
  /**
   * Essa propriedade é responsavel por definir o caminho da imagem.
   */
  src: PropTypes.string,
  /**
   * Essa propriedade é responsavel por definir o alt da imagem.
   */
  alt: PropTypes.string,
  /**
   * Essa propriedade é responsavel por inserir uma classe ao componente.
   */
  className: PropTypes.string,
};

export default withTheme(Image);
