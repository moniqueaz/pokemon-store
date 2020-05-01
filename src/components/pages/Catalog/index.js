import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { type } from '../../../services/api';

import {} from './style';

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
    console.log('pokemon: ', data);

    const result = data.map(({ pokemon }) => {
      const { name } = pokemon;
      return {
        name,
        price: Math.floor(Math.random() * (99 - 1 + 1) + 1)
          .toFixed(2)
          .replace('.', ','),
      };
    });
    console.log('result: ', result);

    setListPokemon(result);
  };

  useEffect(() => {
    getType();
  }, []);

  useEffect(() => {
    listPokemon.length && setIsLoader(false);
    console.log('listPokemon: ', listPokemon);
  }, [listPokemon]);

  return (
    !isLoader && (
      <ul>
        {listPokemon.map((pokemon, index) => {
          {
            console.log('pokemon: ', pokemon.name);
          }
          return (
            <li key={`${pokemon.name}_${index}`}>
              {pokemon.name} - {pokemon.price}
            </li>
          );
        })}
      </ul>
    )
  );
};

export default withTheme(Catalog);
