import setOptions from '../../utils/setOptions';
import options from '../fixtures/options';
import localStorage from '../__mocks__/localStorage';

test('should set options in local storage', () => {
  setOptions('options-test', options);
  expect(JSON.parse(localStorage.getItem('options-test'))).toEqual(options);
});
