import selectedOptionReducer from '../../reducers/selectedOption';
import options from '../fixtures/options';

test('should select the passed option', () => {
  const option = options[0];
  const action = {
    type: 'SELECT_OPTION',
    option,
  };
  expect(selectedOptionReducer(options, action)).toBe(option);
});

test('should reset the selected option', () => {
  const action = {
    type: 'RESET_OPTION',
  };
  expect(selectedOptionReducer(options, action)).toBeFalsy();
});
