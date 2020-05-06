import React from 'react';
import { shallow } from 'enzyme';
import ItemHighlight from '../../components/atoms/ItemHighlight';

const itemHighlight = shallow(
  <ItemHighlight height="300px" className="teste">
    <img src="/" alt="teste" />
  </ItemHighlight>
);

describe('<itemHeighlight />', () => {
  it('render item heighlight', () => {
    expect(itemHighlight.props().height).toEqual('300px');
    expect(itemHighlight.props().className).toEqual('teste');
    expect(itemHighlight.find('img').length).toBe(1);
  });
});
