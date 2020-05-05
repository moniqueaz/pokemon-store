import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Image, Title, Item, Container } from './styles';

const Minicart = ({ item }) => {
  const { image, name } = item;
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  const timer = () => {
    return setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  useEffect(() => {
    clearTimeout(timer);
    if (item.id) {
      if (!!product.productId) {
        setProduct(item);
      } else {
        setProduct(item);
      }
    }
  }, [item]);

  useEffect(() => {
    if (product.id) {
      setShow(true);
      timer();
    }
  }, [product]);

  useEffect(() => {
    clearTimeout(timer);
  }, []);

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
