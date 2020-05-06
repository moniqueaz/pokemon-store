import React from 'react';
import { shallow } from 'enzyme';
import AddToCart from '../../components/atoms/AddToCart';

const addToCart = shallow(<AddToCart data={{}} theme="fire" size="small" />);

describe('<Button />', () => {
  it('render button with text', () => {
    expect(typeof addToCart.props().data).toBe('object');
    expect(addToCart.props().size).toEqual('small');
    expect(addToCart.props().theme).toEqual('fire');
  });
});
