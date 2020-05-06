import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../../components/atoms/Overlay';

const overlay = shallow(<Overlay onClick={() => undefined} show={true} />);

describe('<Overlay />', () => {
  it('render overlay', () => {
    expect(overlay.props().show).toEqual(true);
    expect(typeof overlay.props().onClick).toBe('function');
  });
});
