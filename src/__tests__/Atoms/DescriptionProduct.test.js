import React from 'react';
import { shallow, mount } from 'enzyme';
import DescriptionProduct from '../../components/atoms/DescriptionProduct';

const descriptionProduct = mount(
  <DescriptionProduct
    ability={[
      {
        name: 'Teste',
        effect_entries: [{ effect: 'effect', short_effect: 'short_effect' }],
      },
    ]}
    isLoader={false}
  />
);

describe('<DescriptionProduct />', () => {
  it('render description product', () => {
    // expect(typeof descriptionProduct.props().ability).toBe('array');
    expect(descriptionProduct.props().isLoader).toEqual(false);
  });
});
