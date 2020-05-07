import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from './index.skeleton';

import { Abilitys, Description } from './styles';

const DescriptionProduct = ({ ability, isLoader }) => {
  return !isLoader ? (
    <Description>
      <h3>Abilitys</h3>
      {ability &&
        ability.map((abil, index) => {
          return (
            <Abilitys key={index}>
              <h4>{abil.name.replace(/-/g, ' ')}</h4>
              <h5>Effect</h5>
              <p>{abil.effect_entries[0].effect}</p>
              <h5>Short Effect</h5>
              <p>{abil.effect_entries[0].short_effect}</p>
            </Abilitys>
          );
        })}
    </Description>
  ) : (
    <Skeleton />
  );
};

DescriptionProduct.defaultProps = {
  ability: [],
  isLoader: true,
};

DescriptionProduct.propTypes = {
  /**
   * Essa propriedade recebe um array de objetos que irá montar o componente.
   */
  ability: PropTypes.array,
  /**
   * Essa propriedade é responsavel pordefinir o estado do compoennete.
   */
  isLoader: PropTypes.bool,
};

export default DescriptionProduct;
