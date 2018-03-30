import { addOption, removeOption, removeAll } from '../../actions/options';
import options from '../fixtures/options';

test('should setup add option action object', () => {
  const option = options[0];
  expect(addOption(option)).toEqual({
    type: 'ADD_OPTION',
    option,
  });
});

test('should setup remove option action object', () => {
  const option = options[1];
  expect(removeOption(option)).toEqual({
    type: 'REMOVE_OPTION',
    option,
  });
});

test('should setup remove all action object', () => {
  expect(removeAll()).toEqual({
    type: 'REMOVE_ALL',
  });
});
