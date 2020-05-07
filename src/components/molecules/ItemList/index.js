import React from 'react';
import PropTypes from 'prop-types';
import FormatPrice from '../../atoms/FormatPrice';
import AddToCart from '../../atoms/AddToCart';
import Item from '../../atoms/ItemHighlight';
import Image from '../../atoms/Image';

import { Type, Title, Price, Bottom, Middle } from './styles';

const ItemsList = ({ data }) => {
  const { image, link, type, price, name } = data;

  return (
    <Item>
      <Type>{type}</Type>
      <Middle>
        <a href={link}>
          <Image src={image} alt={name} className="itemList__image" />
          <Title>{name}</Title>
        </a>
        <Price>
          <FormatPrice value={price} />
        </Price>
      </Middle>
      <Bottom>
        <AddToCart data={data} />
      </Bottom>
    </Item>
  );
};

ItemsList.defaultProps = {
  data: {},
};

ItemsList.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.object,
};

export default ItemsList;
