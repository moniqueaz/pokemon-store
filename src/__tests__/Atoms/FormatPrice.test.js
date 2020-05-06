import React from 'react';
import { shallow } from 'enzyme';
import FormatPrice from '../../components/atoms/FormatPrice';

const formatPrice = shallow(<FormatPrice value={1000} currency="$" />);

describe('<FormatPrice />', () => {
  it('render format price', () => {
    // expect(typeof formatPrice.props().value).toBe('number');
    // expect(formatPrice.props().value).toEqual(1000);
    // expect(formatPrice.props().currency).toEqual('$');
  });
});
