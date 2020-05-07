import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/atoms/Button';
import { FiX } from 'react-icons/fi';

const wrapper = shallow(
  <Button
    color={() => {
      return 'red';
    }}
    bgColor={() => {
      return 'blue';
    }}
    className="teste"
    size="small"
    disabled={false}
    full={false}
    type="button"
    onClick={() => undefined}
  >
    <>
      <FiX />
      Text
    </>
  </Button>
);

describe('<Button />', () => {
  it('render button with text', () => {
    expect(typeof wrapper.props().color).toBe('function');
    expect(typeof wrapper.props().bgColor).toBe('function');
    expect(wrapper.props().size).toEqual('small');
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.props().full).toEqual(false);
    expect(wrapper.props().type).toEqual('button');
    expect(wrapper.props().className).toEqual('teste');
    expect(typeof wrapper.props().onClick).toBe('function');
    expect(wrapper.text()).toEqual('<FiX />Text');
  });
});
