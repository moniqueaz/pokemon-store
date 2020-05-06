import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from '../../components/atoms/Skeleton';

const skeleton = shallow(
  <Skeleton width="400px" height="400px" border="4px" />
);

describe('<Skeleton />', () => {
  it('render skeleton', () => {
    expect(skeleton.props().width).toEqual('400px');
    expect(skeleton.props().height).toEqual('400px');
    expect(skeleton.props().border).toEqual('4px');
  });
});
