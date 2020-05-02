import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { type } from '../../../services/api';
import ItemList from '../../molecules/ItemList';

import {} from './styles';

const Catalog = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  const getType = async () => {
    const {
      data: { pokemon },
    } = await type.get('/');
    mountItem(pokemon);
  };

  const mountItem = data => {
    // console.log('pokemon: ', data);

    const result = data.map(({ pokemon }) => {
      const { name, url } = pokemon;
      const id = url.match(/\/\d*\/$/)[0].replace(/\//g, '');
      return {
        id,
        name,
        type: process.env.REACT_APP_TYPE,
        price: Math.floor(Math.random() * (9999 - 1000 + 1000) + 1000),
        image: `${process.env.REACT_APP_URL_IMAGE}/${id}.png`,
      };
    });
    // console.log('result: ', result);

    setListPokemon(result);
  };

  useEffect(() => {
    getType();
  }, []);

  useEffect(() => {
    listPokemon.length && setIsLoader(false);
    // console.log('listPokemon: ', listPokemon);
  }, [listPokemon]);

  return (
    !isLoader && (
      <>
        {/* <img src="/images/pokebola.png" alt="" /> */}
        <ul>
          {listPokemon.map((pokemon, index) => {
            {
              // console.log('pokemon: ', pokemon.name);
            }
            return (
              <li key={`${pokemon.name}_${index}`}>
                <ItemList data={pokemon} />
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};

export default withTheme(Catalog);
