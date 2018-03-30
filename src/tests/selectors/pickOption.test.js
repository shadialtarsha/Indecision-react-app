import pickOption from '../../selectors/pickOption';
import options from '../fixtures/options';

test('should pick option correctly', () => {
  const option = pickOption(options);
  expect(options).toEqual(expect.arrayContaining([option]));
});

test('should not pick option if the array is empty', () => {
  const option = pickOption([]);
  expect(option).toBeFalsy();
});
