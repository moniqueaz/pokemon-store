import React from 'react';
import { shallow } from 'enzyme';
import DescriptionProduct from '../../components/atoms/DescriptionProduct';

const DescriptionProduct = shallow(
  <DescriptionProduct ability={[]} isLoader={false} />
);

describe('<Button />', () => {
  it('render button with text', () => {
    expect(typeof DescriptionProduct.props().data).toBe('array');
    expect(DescriptionProduct.props().isLoader).toEqual(false);
  });
});
