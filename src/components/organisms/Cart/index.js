import React from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

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
} from './styles';

const Cart = ({ data, onClose }) => {
  const handleToClose = () => {
    onClose();
  };

  return (
    <Container>
      <Header>
        <Title>Cart</Title>
        <Total>0 items</Total>
        <ButtonClose onClick={handleToClose}>
          <FiX />
        </ButtonClose>
      </Header>
      <Content>
        {data.length ? (
          <>
            <ul>
              {data.map(item => {
                return (
                  <li>
                    <ItemCart key={item.id} data={item} isLoader={false} />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <Empty>Empty cart</Empty>
        )}
      </Content>
      <Bottom>
        <Button full>Finaly</Button>
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

export default Cart;
