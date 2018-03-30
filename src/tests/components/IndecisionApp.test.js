import React from 'react';
import { shallow } from 'enzyme';
import IndecisionApp from '../../components/IndecisionApp';

test('should render IndecisionApp correctly', () => {
  const wrapper = shallow(<IndecisionApp />);
  expect(wrapper).toMatchSnapshot();
});
