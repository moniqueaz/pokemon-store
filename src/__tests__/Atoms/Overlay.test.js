import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../../components/atoms/Overlay';

const wrapper = shallow(<Overlay onClick={() => undefined} show={true} />);

describe('<Overlay />', () => {
  it('render overlay', () => {
    expect(wrapper.props().show).toEqual(true);
    expect(typeof wrapper.props().onClick).toBe('function');
  });
});
