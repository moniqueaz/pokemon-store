import React from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

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

const Cart = ({ data, onClose }) => {
  const handleToClose = () => {
    onClose();
  };

  return (
    <Container>
      <Header>
        <Title>Cart</Title>
        <Count>0 items</Count>
        <ButtonClose onClick={handleToClose}>
          <FiX />
        </ButtonClose>
      </Header>
      <Content>
        {data.length ? (
          <ul>
            {data.map(item => {
              return (
                <li>
                  <ItemCart key={item.id} data={item} isLoader={false} />
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
          Total: <FormatPrice value={20000} />
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

export default Cart;
