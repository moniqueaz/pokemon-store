import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import List from '../../organisms/List';

import {} from './styles';

const SearchResult = ({ match }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    // mountCatalog();
  }, []);

  useEffect(() => {
    listPokemon.length && setIsLoader(false);
  }, [listPokemon]);

  return <List data={listPokemon} isLoader={isLoader} message="Empty!!" />;
};

export default withTheme(SearchResult);
