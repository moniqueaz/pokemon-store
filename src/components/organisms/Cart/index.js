import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import FormatPrice from '../../atoms/FormatPrice';

import Button from '../../atoms/Button';
import ItemCart from '../../molecules/ItemCart';

import {
  Container,
  Header,
  Content,
  ButtonClose,
  Title,
  Total,
  Bottom,
  Empty,
  Count,
} from './styles';

const Cart = ({ data, onClose, theme }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleToClose = () => {
    onClose();
  };

  const handleToCart = id => {
    dispatch(MapDispachToActions.removeToCart(id, theme));
  };

  useEffect(() => {
    setCount(data.length);
    setTotal(
      data.reduce((total, { price }) => {
        return total + price;
      }, 0)
    );
  }, [data]);

  return (
    <Container>
      <Header>
        <Title>Cart</Title>
        <Count>{count === 1 ? '1 item' : `${count} ìtems`}</Count>
        <ButtonClose onClick={handleToClose}>
          <FiX />
        </ButtonClose>
      </Header>
      <Content>
        {data.length ? (
          <ul>
            {data.map(item => {
              return (
                <li key={item.id}>
                  <ItemCart
                    data={item}
                    isLoader={false}
                    onDelete={handleToCart}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <Empty>Empty cart</Empty>
        )}
      </Content>
      <Bottom>
        <Total>
          Total: <FormatPrice value={total} />
        </Total>
        <Button full size="large">
          Finaly
        </Button>
      </Bottom>
    </Container>
  );
};

Cart.defaultProps = {
  data: [],
  onClose: () => undefined,
};

Cart.propTypes = {
  /**
   * Essa propriedade é responsavel por fornecer a carga do componente.
   */
  data: PropTypes.array,
  /**
   * Essa propriedade é responsavel por informar a função que serar executada
   * no click do close.
   */
  onClose: PropTypes.func,
};

export default withTheme(Cart);
