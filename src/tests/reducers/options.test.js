import optionsReducer from '../../reducers/options';
import options from '../fixtures/options';

test('should setup default options array', () => {
  const state = optionsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove option', () => {
  const action = {
    type: 'REMOVE_OPTION',
    id: options[0].id,
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([options[1], options[2]]);
});

test('should not remove option if it is not exist', () => {
  const option = {
    id: '123abc',
    text: 'new input',
  };
  const action = {
    type: 'REMOVE_OPTION',
    option,
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
  const option = {
    id: '123abc',
    text: 'new input',
  };
  const action = {
    type: 'ADD_OPTION',
    option,
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([...options, option]);
});

test('should set options', () => {
  const action = {
    type: 'SET_OPTIONS',
    options: [options[0]],
  };
  const state = optionsReducer(options, action);
  expect(state).toEqual([options[0]]);
});
