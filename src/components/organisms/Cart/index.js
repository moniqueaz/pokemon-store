import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX, FiShoppingCart } from 'react-icons/fi';
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
  List,
} from './styles';

const Cart = ({ theme }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  const storage = JSON.parse(localStorage.getItem(`cart-${theme.mode}`));
  const storageCatalog = JSON.parse(localStorage.getItem(`list-${theme.mode}`));

  const removeToCart = id => {
    dispatch(MapDispachToActions.removeToCart(id, theme));
  };

  // useEffect(() => {
  //   setList(cart);
  // }, [cart]);

  useEffect(() => {
    setCount(cart.length);
    setTotal(
      cart.reduce((total, { price }) => {
        return total + price;
      }, 0)
    );
  }, [cart]);

  const handleToCart = items => {
    dispatch(MapDispachToActions.initToCart(items));
  };

  useEffect(() => {
    if (storage && storageCatalog) {
      if (storage) {
        if (storage.length) {
          // setList(storage);
          handleToCart(storage);
        }
      }
    } else {
      localStorage.setItem(`cart-${theme.mode}`, JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Button className="button__cart" onClick={() => setShow(!show)}>
        <FiShoppingCart />
        <Count>{cart.length}</Count>
      </Button>
      <Container show={show}>
        <Content>
          <Header>
            <Title>Cart</Title>
            <Count>{count === 1 ? '1 item' : `${count} items`}</Count>
            <ButtonClose onClick={() => setShow(false)}>
              <FiX />
            </ButtonClose>
          </Header>
          <List>
            {cart.length ? (
              <ul>
                {cart.map(item => {
                  return (
                    <li key={item.id}>
                      <ItemCart
                        data={item}
                        isLoader={false}
                        onDelete={removeToCart}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <Empty>Empty cart</Empty>
            )}
          </List>
          <Bottom>
            <Total>
              Total: <FormatPrice value={total} />
            </Total>
            <Button full size="large">
              Finaly
            </Button>
          </Bottom>
        </Content>
      </Container>
    </>
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
