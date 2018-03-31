import React from 'react';
import { shallow } from 'enzyme';
import { OptionModal } from '../../components/OptionModal';
import options from '../fixtures/options';

test('should render OptionModal correctly with option', () => {
  const option = options[0];
  const wrapper = shallow(<OptionModal selectedOption={option.text} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render OptionModal correctly with no option', () => {
  const wrapper = shallow(<OptionModal selectedOption={undefined} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call resetOption on click', () => {
  const resetOptionSpy = jest.fn();
  const wrapper = shallow(<OptionModal resetOption={resetOptionSpy} />);
  wrapper.find('button').simulate('click');
  expect(resetOptionSpy).toHaveBeenCalled();
});
