import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { GiPlainArrow } from 'react-icons/gi';
import Layout from '../../templates/Default';
import { findItemByProductId } from '../../../utils';
import {
  pokemon as pokemonAPI,
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
  Price,
  ProgressBar,
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
              <Price>
                <FormatPrice value={product.price} />
              </Price>
              <Button>
                <AddToCart data={product} size="normal" />
              </Button>
              {infor && (
                <>
                  <Details>
                    {infor.sprites.front_default && (
                      <img src={infor.sprites.front_default} alt={infor.name} />
                    )}
                    <p>Base Experience: {infor.base_experience}</p>
                    <p>Heigth: {infor.height} </p>
                    <p>Weight: {infor.weight / 10}</p>
                    <p className="product__types">
                      Types:{' '}
                      <ul>
                        {infor.types.map(({ type }, index) => {
                          return <li key={index}>{type.name}</li>;
                        })}
                      </ul>
                    </p>
                  </Details>
                  <Stats>
                    {infor.stats.map(({ stat, base_stat }, index) => {
                      return (
                        <div key={index}>
                          <h3>
                            {stat.name.replace(/-/g, ' ')} - {base_stat}
                          </h3>
                          <ProgressBar value={base_stat} />
                          <div className=""></div>
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
                  <div className="product__descriptions">
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
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default withTheme(Product);
