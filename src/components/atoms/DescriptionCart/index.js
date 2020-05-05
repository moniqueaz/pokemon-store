import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Abilitys, Description } from './styles';

const DescriptionCart = ({ ability, isLoader }) => {
  return (
    !isLoader && (
      <Description>
        <h3>Abilitys</h3>
        {ability &&
          ability.map(abil => {
            return (
              <Abilitys>
                <h4>{abil.name.replace(/-/g, ' ')}</h4>
                <h5>Effect</h5>
                <p>{abil.effect_entries[[0]].effect}</p>
                <h5>Short Effect</h5>
                <p>{abil.effect_entries[0].short_effect}</p>
              </Abilitys>
            );
          })}
      </Description>
    )
  );
};

DescriptionCart.defaultProps = {
  ability: {},
};

DescriptionCart.propTypes = {
  /**
   * Essa propriedade recebe o objeto que será retornado com a funçaõ.
   */
  ability: PropTypes.object,
};

export default withTheme(DescriptionCart);
