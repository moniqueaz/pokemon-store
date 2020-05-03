import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { type } from '../../../services/api';
import List from '../../organisms/List';

import {} from './styles';

const Catalog = ({ theme, match }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const storage = JSON.parse(localStorage.getItem(`list-${theme.mode}`));

  const getType = async () => {
    const {
      data: { pokemon },
    } = await type.get('/');
    return pokemon;
  };

  const mountItem = data => {
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

    setListPokemon(result);
    localStorage.setItem(`list-${theme.mode}`, JSON.stringify(result));
  };

  const mountCatalog = async () => {
    if (storage) {
      if (storage.length) {
        setListPokemon(storage);
      } else {
        const pokemon = await getType();
        mountItem(pokemon);
      }
    } else {
      const pokemon = await getType();
      mountItem(pokemon);
    }
  };

  useEffect(() => {
    mountCatalog();
  }, []);

  useEffect(() => {
    listPokemon.length && setIsLoader(false);
  }, [listPokemon]);

  return <List data={listPokemon} isLoader={isLoader} />;
};

export default withTheme(Catalog);
