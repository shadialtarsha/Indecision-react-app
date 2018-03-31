import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const uid = '123abc';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should setup logout action object', () => {
  const actoin = logout();
  expect(actoin).toEqual({
    type: 'LOGOUT',
  });
});
