import getOptions from '../../utils/getOptions';
import options from '../fixtures/options';
import localStorage from '../__mocks__/localStorage';

test('should return empty array if no local storage', () => {
  expect(getOptions('options-test')).toEqual([]);
});

test('should return options from local storage', () => {
  localStorage.setItem('options-test', JSON.stringify(options));
  expect(getOptions('options-test')).toEqual(options);
});
