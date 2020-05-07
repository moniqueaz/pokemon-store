import React from 'react';
import PropTypes from 'prop-types';
// import { GiPlainArrow } from 'react-icons/gi';
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
  ScrollArea,
} from './styles';

const InfoProduct = ({ data, isLoader, infor }) => {
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
      <ScrollArea>
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
      </ScrollArea>
    </>
  ) : (
    <Skeleton />
  );
};

InfoProduct.defaultProps = {
  data: {},
  infor: {},
  isLoader: true,
};

InfoProduct.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.object,
  /**
   * Essa propriedade é responsavel por realizar a carga dos detalhes do produto.
   */
  infor: PropTypes.object,
  /**
   * Essa propriedade é responsavel por exibir o loader do componente.
   */
  isLoader: PropTypes.bool,
};

export default InfoProduct;
