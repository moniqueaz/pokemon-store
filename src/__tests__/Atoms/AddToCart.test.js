import React from 'react';
import { shallow } from 'enzyme';
import AddToCart from '../../components/atoms/AddToCart';

const wrapper = shallow(<AddToCart data={{}} theme="fire" size="small" />);

describe('<AddToCart />', () => {
  it('render button addToCart', () => {
    expect(typeof wrapper.props().data).toBe('object');
    expect(wrapper.props().size).toEqual('small');
    expect(wrapper.props().theme).toEqual('fire');
  });
});
