import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { database } from '../../firebase/firebase';
import options from '../fixtures/options';
import {
  startAddOption,
  addOption,
  startRemoveOption,
  removeOption,
  startRemoveAll,
  removeAll,
  startSetOptions,
  setOptions,
} from '../../actions/options';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const optionsData = {};
  options.forEach(({ id, text }) => {
    optionsData[id] = { text };
  });
  database
    .ref(`users/${uid}/options`)
    .set(optionsData)
    .then(() => done());
});

test('should setup add option action object', () => {
  const option = options[0];
  expect(addOption(option)).toEqual({
    type: 'ADD_OPTION',
    option,
  });
});

test('should add option to database and store', done => {
  const store = createMockStore(defaultAuthState);
  const option = {
    text: 'New option',
  };
  store
    .dispatch(startAddOption(option.text))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_OPTION',
        option: {
          id: expect.any(String),
          ...option,
        },
      });
      return database.ref(`users/${uid}/options/${actions[0].option.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(option);
      done();
    });
});

test('should setup remove all action object', () => {
  expect(removeAll()).toEqual({
    type: 'REMOVE_ALL',
  });
});

test('should remove all options from store and firebase', done => {
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startRemoveAll())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_ALL',
      });
      return database.ref(`users/${uid}/options`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup remove option action object', () => {
  const option = options[1];
  expect(removeOption(option.id)).toEqual({
    type: 'REMOVE_OPTION',
    id: option.id,
  });
});

test('should remove option from store and database', done => {
  const store = createMockStore(defaultAuthState);
  const { id } = options[2];
  store
    .dispatch(startRemoveOption(id))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_OPTION',
        id,
      });
      return database.ref(`users/${uid}/options/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup set options action object', () => {
  expect(setOptions(options)).toEqual({
    type: 'SET_OPTIONS',
    options,
  });
});

test('should fetch options from firebase', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetOptions()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_OPTIONS',
      options,
    });
    done();
  });
});
