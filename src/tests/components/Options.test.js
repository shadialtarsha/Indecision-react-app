import React from 'react';
import { shallow } from 'enzyme';
import { Options } from '../../components/Options';
import options from '../fixtures/options';

test('should render Options correctly with no options', () => {
  const wrapper = shallow(<Options options={[]} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('p').text()).toBeTruthy();
});

test('should render Options correctly with options data', () => {
  const wrapper = shallow(<Options options={options} />);
  expect(wrapper).toMatchSnapshot();
});

test('should remove all options on click', () => {
  const onRemoveAllSpy = jest.fn();
  const wrapper = shallow(<Options options={options} onRemoveAll={onRemoveAllSpy} />);
  wrapper.find('button').simulate('click');
  expect(onRemoveAllSpy).toHaveBeenCalledWith();
});
