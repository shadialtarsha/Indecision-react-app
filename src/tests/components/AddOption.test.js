import React from 'react';
import { shallow } from 'enzyme';
import { AddOption } from '../../components/AddOption';
import options from '../fixtures/options';

test('should render AddOption correctly with no options', () => {
  const wrapper = shallow(<AddOption />);
  expect(wrapper).toMatchSnapshot();
});

test('should render AddOption correctly with options', () => {
  const wrapper = shallow(<AddOption options={options} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const value = options[0];
  const wrapper = shallow(<AddOption options={options} />);
  wrapper.find('form').simulate('submit', {
    preventDefault() {},
    target: { option: { value } },
  });
  expect(wrapper.state('error')).toBeTruthy();
});

test('should set option when input change', () => {
  const value = 'New option';
  const wrapper = shallow(<AddOption options={options} />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value },
    });
  expect(wrapper.state('option')).toBe(value);
});

test('should call onSumbit prop for valid submission', () => {
  const onAddOptionSpy = jest.fn();
  const wrapper = shallow(<AddOption options={options} onAddOption={onAddOptionSpy} />);
  wrapper.setState({ option: 'new input' });
  wrapper.find('form').simulate('submit', {
    preventDefault() {},
  });
  expect(wrapper.state('error')).toBe(undefined);
  expect(onAddOptionSpy).toHaveBeenLastCalledWith('new input');
});
