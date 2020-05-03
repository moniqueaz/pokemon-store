import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withTheme } from 'styled-components';
import { type } from '../../../services/api';
import List from '../../organisms/List';
import Layout from '../../templates/Default';

import { filterList, mountValueSearch } from '../../../utils';

import {} from './styles';

const Catalog = ({ theme, location }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const { search } = location;
  const history = useHistory();
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

    localStorage.setItem(`list-${theme.mode}`, JSON.stringify(result));
    mountList(result);
  };

  const mountCatalog = async () => {
    if (storage) {
      if (storage.length) {
        mountList(storage);
      } else {
        const pokemon = await getType();
        mountItem(pokemon);
      }
    } else {
      const pokemon = await getType();
      mountItem(pokemon);
    }
  };

  const mountList = list => {
    if (search.length) {
      const result = filterList(mountValueSearch(search), list);
      !result.length && history.push('/');
      setListPokemon(result);
    } else {
      setListPokemon(list);
    }
  };

  useEffect(() => {
    setIsLoader(true);
    mountCatalog();
  }, [search]);

  useEffect(() => {
    listPokemon.length && setIsLoader(false);
    console.log('listPokemon: ', listPokemon);
  }, [listPokemon]);

  return (
    <Layout>
      <List data={listPokemon} isLoader={isLoader} />
    </Layout>
  );
};

export default withTheme(Catalog);
