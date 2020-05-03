import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import FormatPrice from '../../atoms/FormatPrice';
import Button from '../../atoms/Button';

import { Container, Overlay, Content, Message } from './styles';

const Modal = ({ children, show }) => {
  const [open, setOpen] = useState(show);
  const handleToClose = () => {
    console.log('close');
  };

  useEffect(() => {
    console.log(open);
  }, []);

  return (
    <Container show={open}>
      <Overlay onClick={() => setOpen(false)} />
      <Content>
        <Button className="modal__close" onClick={() => setOpen(false)}>
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
