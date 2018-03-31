import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header title="new Title" subtitle="new subtitle" />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Header with default title correctly', () => {
  const wrapper = shallow(<Header subtitle="new subtitle" />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});
