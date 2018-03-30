import optionsReducer from '../../reducers/options';
import options from '../fixtures/options';
import localStorage from '../__mocks__/localStorage';

test('should setup default options array', () => {
  const state = optionsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove option', () => {
  const action = {
    type: 'REMOVE_OPTION',
    option: options[0],
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([options[1], options[2]]);
});

test('should not remove option if it is not exist', () => {
  const action = {
    type: 'REMOVE_OPTION',
    option: 'new input',
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([...options]);
});

test('should remove all options', () => {
  const action = {
    type: 'REMOVE_ALL',
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([]);
});

test('should add an option', () => {
  const option = 'new input';
  const action = {
    type: 'ADD_OPTION',
    option,
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([...options, option]);
});
