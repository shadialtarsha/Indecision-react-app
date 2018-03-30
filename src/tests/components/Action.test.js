import React from 'react';
import { shallow } from 'enzyme';
import { Action } from '../../components/Action';
import options from '../fixtures/options';

test('should render Action correctly with no options', () => {
  const wrapper = shallow(<Action options={[]} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('button').props().disabled).toBeTruthy();
});

test('should render Action correctly with options', () => {
  const wrapper = shallow(<Action options={options} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('button').props().disabled).toBeFalsy();
});

test('should pick an option on click', () => {
  const selectOptionSpy = jest.fn();
  const wrapper = shallow(<Action options={options} selectOption={selectOptionSpy} />);
  wrapper.find('button').simulate('click');
  expect(selectOptionSpy).toHaveBeenCalled();
});
