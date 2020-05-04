import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Layout from '../../templates/Default';
import { findItemByProductId } from '../../../utils';
import {
  pokemon as pokemonAPI,
  ability as abilityAPI,
  abilityWithoutBaseURL,
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
  Wrapper,
  Button,
  Details,
  Stats,
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
      console.log('ability: ', ability);
      mountDescription(ability);
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
      {!idLoader ? (
        <Wrapper>
          <Top>
            <ItemHighlight height="auto" className="product__image">
              <Image src={product.image} alt={product.name} />
            </ItemHighlight>
            <Info>
              <Title>{product.name}</Title>
              <FormatPrice value={product.price} />
              <Button>
                <AddToCart data={product} />
              </Button>
              {infor && (
                <>
                  <Details>
                    <img src={infor.sprites.front_default} alt={infor.name} />
                    <p>Base Experience: {infor.base_experience}</p>
                    <p>Heigth: {infor.height} </p>
                    <p>Weight: {infor.weight / 100}</p>
                    <p>
                      Types:{' '}
                      {infor.types.map(({ type }, index) => {
                        return <span key={index}>{type.name}</span>;
                      })}
                    </p>
                  </Details>
                  <Stats>
                    {infor.stats.map(({ stat, base_stat, effort }, index) => {
                      return (
                        <div key={index}>
                          <p>{stat.name}</p>
                          <p>{base_stat}</p>
                          <p>{effort}</p>
                        </div>
                      );
                    })}
                  </Stats>
                </>
              )}
            </Info>
          </Top>
          <Description>
            <h3>Abilitys</h3>
            {ability &&
              ability.map(abil => {
                return (
                  <div>
                    <h4>{abil.name.replace(/-/g, ' ')}</h4>
                    <h5>Effect</h5>
                    <p>{abil.effect_entries[[0]].effect}</p>
                    <h5>Short Effect</h5>
                    <p>{abil.effect_entries[0].short_effect}</p>
                  </div>
                );
              })}
          </Description>
        </Wrapper>
      ) : (
        <div>Empty</div>
      )}
    </Layout>
  );
};

export default withTheme(Product);
