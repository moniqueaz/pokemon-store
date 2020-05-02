import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiPlusCircle } from 'react-icons/fi';
import FormatPrice from '../../atoms/FormatPrice';
import Button from '../../atoms/Button';

import { Item, Type, Title, Price, Image, Bottom, Middle } from './styles';

const ItemsList = ({ data, addToCart }) => {
  const { id, image, link, type, price, name } = data;

  return (
    <Item>
      <Type>{type}</Type>
      <Middle>
        <a href={link}>
          <Image src={image} alt="" />
          <Title>{name}</Title>
        </a>
        <Price>
          <FormatPrice value={price} />
        </Price>
      </Middle>
      <Bottom>
        <Button full onClick={() => addToCart(data)}>
          Add to Cart <FiPlusCircle />
        </Button>
      </Bottom>
    </Item>
  );
};

ItemsList.defaultProps = {
  data: {},
  addToCart: () => undefined,
};

ItemsList.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade é responsavel por receber a função que será executada ao
   * clicar no button add to cart.
   */
  addToCart: PropTypes.func,
};

export default ItemsList;
