import React from 'react';
import { shallow } from 'enzyme';
import Image from '../../components/atoms/Image';

const wrapper = shallow(<Image src="/" atl="teste" className="teste" />);

describe('<Image />', () => {
  it('render image', () => {
    expect(wrapper.props().src).toEqual('/');
    // expect(image.props().alt).toEqual('teste');
    expect(wrapper.props().className).toEqual('teste');
  });
});
