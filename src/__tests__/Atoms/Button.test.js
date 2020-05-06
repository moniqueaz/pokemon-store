import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Button from '../../components/atoms/Button';
import { FiX } from 'react-icons/fi';

const button = shallow(
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
    expect(typeof button.props().color).toBe('function');
    expect(typeof button.props().bgColor).toBe('function');
    expect(button.props().size).toEqual('small');
    expect(button.props().disabled).toEqual(false);
    expect(button.props().full).toEqual(false);
    expect(button.props().type).toEqual('button');
    expect(button.props().className).toEqual('teste');
    expect(typeof button.props().onClick).toBe('function');
    expect(button.text()).toEqual('<FiX />Text');
  });
});
