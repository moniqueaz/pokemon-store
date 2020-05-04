import React from 'react';
import PropTypes from 'prop-types';
import { FiPlusCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import { withTheme } from 'styled-components';
import Button from '../Button';

const AddToCart = ({ theme, data, size }) => {
  const dispatch = useDispatch();

  const handleToCart = item => {
    dispatch(MapDispachToActions.addToCart(item, theme));
  };

  return (
    <Button full onClick={() => handleToCart(data)} size={size}>
      Add to Cart <FiPlusCircle />
    </Button>
  );
};

AddToCart.defaultProps = {
  onClick: () => undefined,
  data: {},
  size: 'small',
};

AddToCart.propTypes = {
  /**
   * Essa propriedade é resposavel por receber a função que será executada no
   * click do button.
   */
  onClick: PropTypes.func,
  /**
   * Essa propriedade recebe o objeto que será retornado com a funçaõ.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade defini a largura do button.
   */
  size: PropTypes.string,
};

export default withTheme(AddToCart);
