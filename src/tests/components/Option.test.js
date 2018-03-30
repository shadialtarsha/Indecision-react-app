import React from 'react';
import { shallow } from 'enzyme';
import { Option } from '../../components/Option';
import options from '../fixtures/options';

test('should render Option correctly with option', () => {
  const wrapper = shallow(<Option count={0} optionText={options[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should called onRemove on click', () => {
  const option = options[0];
  const onRemove = jest.fn();
  const wrapper = shallow(<Option count={0} optionText={option} onRemove={onRemove} />);
  wrapper.find('button').simulate('click');
  expect(onRemove).toHaveBeenLastCalledWith(option);
});
