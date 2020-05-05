import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Image, Title, Item, Container } from './styles';

const Minicart = ({ item }) => {
  const { image, name, productId } = item;
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (productId !== product.productId) {
      if (!!product.productId) {
        setProduct(item);
        if (item.id) {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 2000);
        }
      } else {
        setProduct(item);
      }
    }
  }, [item]);

  return (
    <Item show={show}>
      <Container>
        <Image src={image} alt={name} />
        <Title>{name}</Title>
      </Container>
    </Item>
  );
};

Minicart.defaultProps = {
  item: {},
};

Minicart.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  item: PropTypes.object,
};

export default Minicart;
