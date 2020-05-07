import React from 'react';
import { mount } from 'enzyme';
import FormatPrice from '../../components/atoms/FormatPrice';

const number = 1000;

const wrapper = mount(<FormatPrice value={number} currency="$" />);

describe('<FormatPrice />', () => {
  it('render format price', () => {
    // const value = wrapper.value.setProps(number);
    // expect(typeof value).toBe('number');
    // expect(wrapper.props().value).toEqual(1000);
    // expect(wrapper.props().currency).toEqual('$');
  });
});
