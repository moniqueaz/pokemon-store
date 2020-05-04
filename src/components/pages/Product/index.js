import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Layout from '../../templates/Default';
import { findItemByProductId } from '../../../utils';
import FormatPrice from '../../atoms/FormatPrice';
import ItemHighlight from '../../atoms/ItemHighlight';
import AddToCart from '../../atoms/AddToCart';

import {
  Image,
  Info,
  Top,
  Description,
  Title,
  Item,
  Wrapper,
  Button,
} from './styles';

const Product = ({ theme, location }) => {
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const history = useHistory();
  const [idLoader, setIsLoader] = useState(true);

  const mountProduct = id => {
    const list = JSON.parse(localStorage.getItem(`list-${theme.mode}`));
    const item = findItemByProductId(id, list);
    if (item) {
      setProduct(item);
      history.push(`/product/${id}/${item.originalName}`);
    } else {
      history.push('/notfound');
    }
  };

  useEffect(() => {
    mountProduct(productId);
  }, []);

  useEffect(() => {
    setIsLoader(false);
  }, [location]);

  return (
    <Layout>
      {!idLoader && (
        <Wrapper>
          <Top>
            <ItemHighlight height="auto" className="product__image">
              <Image src={product.image} alt={product.name} />
            </ItemHighlight>
            <Info>
              <Title>{product.name}</Title>
              <FormatPrice value={product.price} />
              <Item>{product.type}</Item>
              <Button>
                <AddToCart data={product} />
              </Button>
            </Info>
          </Top>
          <Description>Description</Description>
        </Wrapper>
      )}
    </Layout>
  );
};

export default withTheme(Product);
