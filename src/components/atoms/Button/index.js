import React from 'react';
import PropTypes from 'prop-types';
import { textButtonColor, backgroundButtonColor } from '../../../styles/theme';

import { ButtonStyle } from './styles';

const Button = ({
  children,
  color,
  bgColor,
  full,
  onClick,
  size,
  className,
  disabled,
}) => {
  const handleToClick = () => {
    onClick();
  };
  return (
    <ButtonStyle
      className={className}
      color={color}
      bgColor={bgColor}
      full={full}
      type="button"
      onClick={handleToClick}
      size={size}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  children: '',
  color: textButtonColor,
  bgColor: backgroundButtonColor,
  full: false,
  size: 'small',
  disabled: false,
};

Button.propTypes = {
  /**
   * Essa propriedade é responsavel por receber o conteudo do componente Button.
   */
  children: PropTypes.any,
  /**
   * Essa propriedade é responsavel por alterar a cor do texto.
   */
  color: PropTypes.func,
  /**
   * Essa propriedade é responsavel por alterar a cor do boutton
   */
  bgColor: PropTypes.func,
  /**
   * Essa propriedade quando incluida força a largura do button para 100%.
   */
  full: PropTypes.bool,
  /**
   * Essa propriedade define a grossura do componente.
   */
  size: PropTypes.string,
  /**
   * Essa propriedade é responsavel por ativar ou desativar o button.
   */
  disabled: PropTypes.bool,
};

export default Button;
