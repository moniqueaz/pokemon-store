import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import FormatPrice from '../../atoms/FormatPrice';

import { Image, Title, Button, Type, Price, Item, Info } from './styles';

const ItemCart = ({ data, onDelete, isLoader }) => {
  console.log('isLoader: ', isLoader);
  console.log('data: ', data);
  const { id, image, link, type, price, name } = data;
  const [loader, setLoader] = useState(isLoader);

  return (
    !loader && (
      <Item>
        <Image src={image} alt={name} />
        <Info>
          <Title>
            <a href={link}>{name}</a>
          </Title>
          <Type>
            type:
            <span> {type}</span>
          </Type>
          <Price>
            <span>
              <FormatPrice value={price} />
            </span>
          </Price>
        </Info>
        <Button
          onClick={() => onDelete(id)}
          type="button"
          className="item__trash"
        >
          <FiTrash2 />
        </Button>
      </Item>
    )
  );
};

ItemCart.defaultProps = {
  data: {},
  onDelete: () => undefined,
  isLoader: true,
};

ItemCart.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade é responsavel por receber a função quer será executada
   * ao tentar excluir um item.
   */
  onDelete: PropTypes.func,
  /**
   * Essa propriedade é responsavel por exibir o loader do componente.
   */
  isLoader: PropTypes.bool,
};

export default ItemCart;
