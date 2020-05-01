import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch, FiX } from 'react-icons/fi';

import { Form, Input, Button, Image } from './styles';

const Search = ({ value, onSubmit }) => {
  const [input, setInput] = useState(value);

  const handleToSearch = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={e => handleToSearch(e)}>
      <Image />
      <Input
        type="text"
        value={input}
        placeholder="Qual o seu pokemon"
        required
        onChange={e => setInput(e.target.value)}
      />
      <Button type="button" onClick={() => setInput('')}>
        <FiX />
      </Button>
      <Button type="submit">
        <FiSearch />
      </Button>
    </Form>
  );
};

Search.defaultProps = {};

Search.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Search;
