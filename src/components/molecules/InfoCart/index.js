import React from 'react';
import PropTypes from 'prop-types';
import { GiPlainArrow } from 'react-icons/gi';
import FormatPrice from '../../atoms/FormatPrice';
import AddToCart from '../../atoms/AddToCart';

import Skeleton from './index.skeleton';

import {
  Title,
  Button,
  Details,
  Stats,
  Price,
  ProgressBar,
  Types,
} from './styles';

const InfoCart = ({ data, isLoader, infor }) => {
  const { price, name } = data;

  return !isLoader ? (
    <>
      <Title>{name}</Title>
      <Price>
        <FormatPrice value={price} />
      </Price>
      <Button>
        <AddToCart data={data} size="normal" />
      </Button>
      {infor && (
        <>
          <Details>
            <p>Base Experience: {infor.base_experience}</p>
            <p>Heigth: {infor.height} </p>
            <p>Weight: {infor.weight / 10}</p>
            <Types>
              Types:{' '}
              <ul>
                {infor.types.map(({ type }, index) => {
                  return <li key={index}>{type.name}</li>;
                })}
              </ul>
            </Types>
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
          {infor.sprites.front_default && (
            <img src={infor.sprites.front_default} alt={infor.name} />
          )}
        </>
      )}
    </>
  ) : (
    <Skeleton />
  );
};

InfoCart.defaultProps = {
  data: {},
  isLoader: true,
};

InfoCart.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade é responsavel por exibir o loader do componente.
   */
  isLoader: PropTypes.bool,
};

export default InfoCart;
