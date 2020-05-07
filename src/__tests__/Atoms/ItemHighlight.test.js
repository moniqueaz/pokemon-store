import React from 'react';
import { shallow } from 'enzyme';
import ItemHighlight from '../../components/atoms/ItemHighlight';

const wrapper = shallow(
  <ItemHighlight height="300px" className="teste">
    <img src="/" alt="teste" />
  </ItemHighlight>
);

describe('<itemHeighlight />', () => {
  it('render item heighlight', () => {
    expect(wrapper.props().height).toEqual('300px');
    expect(wrapper.props().className).toEqual('teste');
    expect(wrapper.find('img').length).toBe(1);
  });
});
