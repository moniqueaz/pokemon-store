import React from 'react';
import PropTypes from 'prop-types';
import { FiPlusCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import { withTheme } from 'styled-components';
import Button from '../Button';

const AddToCart = ({ theme, data }) => {
  const dispatch = useDispatch();

  const handleToCart = item => {
    dispatch(MapDispachToActions.addToCart(item, theme));
  };

  return (
    <Button full onClick={() => handleToCart(data)}>
      Add to Cart <FiPlusCircle />
    </Button>
  );
};

AddToCart.defaultProps = {
  onClick: () => undefined,
  data: {},
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
};

export default withTheme(AddToCart);
