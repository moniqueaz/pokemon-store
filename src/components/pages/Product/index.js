import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Layout from '../../templates/Default';
import { findItemByProductId } from '../../../utils';
import {
  pokemon as pokemonAPI,
  abilityWithoutBaseURL,
} from '../../../services/api';
import Skeleton from './index.skeleton';
import ItemHighlight from '../../atoms/ItemHighlight';
import InfoProduct from '../../molecules/InfoProduct';
import DescriptionProduct from '../../atoms/DescriptionProduct';
import Image from '../../atoms/Image';

import { Info, Top, Description, Wrapper } from './styles';

const Product = ({ theme, location }) => {
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState();
  const [infor, setInfor] = useState();
  const [ability, setAbility] = useState([]);
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
    let result = [];
    for (let abilitie of abilities) {
      result.push(await abilityWithoutBaseURL.get(abilitie.ability.url));
    }
    setAbility(
      result.map(res => {
        return { ...res.data };
      })
    );
  };

  useEffect(() => {
    mountProduct(productId);
  }, []);

  useEffect(() => {
    if (infor) {
      getAbility(infor.abilities);
    }
  }, [infor]);

  useEffect(() => {
    if (product) {
      setIsLoader(false);
      getProduct(product.id);
    }
  }, [product]);

  return (
    <Layout>
      <Wrapper>
        <Top height={window.innerHeight} width={window.innerWidth}>
          {false ? (
            <ItemHighlight height="auto" className="product__image">
              <Image
                src={product.image}
                alt={product.name}
                className="product__image"
              />
            </ItemHighlight>
          ) : (
            <Skeleton />
          )}
          <Info>
            <InfoProduct data={product} isLoader={!infor} infor={infor} />
          </Info>
        </Top>
        <Description>
          <DescriptionProduct ability={ability} isLoader={!ability.length} />
        </Description>
      </Wrapper>
    </Layout>
  );
};

export default withTheme(Product);
