import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Layout from '../../templates/Default';
import { findItemByProductId } from '../../../utils';
import {
  pokemon as pokemonAPI,
  ability as abilityAPI,
} from '../../../services/api';
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
  Details,
} from './styles';

const Product = ({ theme, location }) => {
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState();
  const [infor, setInfor] = useState();
  const [ability, setAbility] = useState();
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

  const getProduct = async idPokemon => {
    const result = await pokemonAPI.get(`/${idPokemon}`);
    setInfor(result.data);
  };

  const getAbility = async abilities => {
    // const result = await abilityAPI.get(`/${idAbility}`);
    // setAbility(result);
  };

  const mountDescription = description => {};

  const mountInfor = infor => {};

  useEffect(() => {
    mountProduct(productId);
  }, []);

  useEffect(() => {
    if (infor) {
      console.log('infor: ', infor);
      getAbility(infor.abilities);
      mountInfor(product);
    }
  }, [infor]);

  useEffect(() => {
    if (ability) {
      mountDescription(ability);
      console.log('ability: ', ability);
    }
  }, [ability]);

  useEffect(() => {
    if (product) {
      setIsLoader(false);
      getProduct(product.id);
    }
  }, [product]);

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
              {infor && (
                <Details>
                  <p>Sprites: </p>
                  <p>Heigth: </p>
                  <p>Weight: </p>
                  <p>Types: </p>
                </Details>
              )}
            </Info>
          </Top>
          <Description>Description</Description>
        </Wrapper>
      )}
    </Layout>
  );
};

export default withTheme(Product);
