import React from 'react';
import { shallow, mount } from 'enzyme';
import DescriptionProduct from '../../components/atoms/DescriptionProduct';

const abil = [
  {
    name: 'Teste',
    effect_entries: [{ effect: 'effect', short_effect: 'short_effect' }],
  },
  {
    name: 'Teste',
    effect_entries: [{ effect: 'effect', short_effect: 'short_effect' }],
  },
];

const wrapper = mount(<DescriptionProduct ability={abil} isLoader={false} />);

describe('<Button />', () => {
  it('render button with text', () => {
    const ability = wrapper.setProps(abil);
    expect(typeof ability).toBe('object');
    expect(wrapper.props().isLoader).toEqual(false);
  });
});
