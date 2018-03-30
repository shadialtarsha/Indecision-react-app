import { selectOption, resetOption } from '../../actions/selectedOption';
import options from '../fixtures/options';

test('should setup select option action object', () => {
  const option = options[0];
  expect(selectOption(option)).toEqual({
    type: 'SELECT_OPTION',
    option,
  });
});

test('should setup reset option action object', () => {
  expect(resetOption()).toEqual({
    type: 'RESET_OPTION',
  });
});
