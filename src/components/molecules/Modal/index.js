import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import Button from '../../atoms/Button';

import { Container, Overlay, Content, Message } from './styles';

const Modal = ({ children, onOpen, show }) => {
  return (
    <Container show={show}>
      <Overlay onClick={() => onOpen(false)} />
      <Content>
        <Button className="modal__close" onClick={() => onOpen(false)}>
          <FiX />
        </Button>
        <Message>{children}</Message>
      </Content>
    </Container>
  );
};

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  /**
   * Essa propriedade é responsavel por defini a exibição do modal.
   */
  shoe: PropTypes.bool,
};

export default Modal;
