import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { textButtonColor, backgroundButtonColor } from '../../../styles/theme';

import { ButtonStyle } from './styles';

const Button = ({ children, color, bgColor, full, onClick, size }) => {
  const handleToClick = () => {
    onClick();
  };
  return (
    <ButtonStyle
      color={color}
      bgColor={bgColor}
      full={full}
      type="button"
      onClick={handleToClick}
      size={size}
    >
      {typeof children !== 'string'
        ? children.map((child, index) => {
            return <span key={index}>{child}</span>;
          })
        : children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  children: '',
  color: css`
    ${textButtonColor}
  `,
  bgColor: css`
    ${backgroundButtonColor}
  `,
  full: false,
  size: 'small',
};

Button.propTypes = {
  /**
   * Essa propriedade é responsavel por receber o conteudo do componente Button.
   */
  children: PropTypes.any,
  /**
   * Essa propriedade é responsavel por alterar a cor do texto.
   */
  color: PropTypes.string,
  /**
   * Essa propriedade é responsavel por alterar a cor do boutton
   */
  bgColor: PropTypes.string,
  /**
   * Essa propriedade quando incluida força a largura do button para 100%.
   */
  full: PropTypes.bool,
  /**
   * Essa propriedade define a grossura do componente.
   */
  size: PropTypes.string,
};

export default Button;
