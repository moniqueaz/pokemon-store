import React from 'react';
import { shallow } from 'enzyme';
import Image from '../../components/atoms/Image';

const image = shallow(<Image src="/" atl="teste" className="teste" />);

describe('<Image />', () => {
  it('render image', () => {
    expect(image.props().src).toEqual('/');
    // expect(image.props().alt).toEqual('teste');
    expect(image.props().className).toEqual('teste');
  });
});
