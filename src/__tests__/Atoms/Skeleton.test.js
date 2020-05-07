import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from '../../components/atoms/Skeleton';

const wrapper = shallow(<Skeleton width="400px" height="400px" border="4px" />);

describe('<Skeleton />', () => {
  it('render skeleton', () => {
    expect(wrapper.props().width).toEqual('400px');
    expect(wrapper.props().height).toEqual('400px');
    expect(wrapper.props().border).toEqual('4px');
  });
});
