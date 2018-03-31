import { database } from '../firebase/firebase';

export const addOption = option => ({
  type: 'ADD_OPTION',
  option,
});

export const startAddOption = option => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return database
    .ref(`users/${uid}/options`)
    .push({ text: option })
    .then(ref => {
      dispatch(
        addOption({
          id: ref.key,
          text: option,
        })
      );
    })
    .catch(e => console.log(e));
};

export const removeOption = id => ({
  type: 'REMOVE_OPTION',
  id,
});

export const startRemoveOption = id => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return database
    .ref(`users/${uid}/options/${id}`)
    .remove()
    .then(() => {
      dispatch(removeOption(id));
    })
    .catch(e => console.log(e));
};

export const removeAll = () => ({
  type: 'REMOVE_ALL',
});

export const startRemoveAll = () => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return database
    .ref(`users/${uid}/options`)
    .remove()
    .then(() => {
      dispatch(removeAll());
    })
    .catch(e => console.log(e));
};

export const setOptions = options => ({
  type: 'SET_OPTIONS',
  options,
});

export const startSetOptions = () => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return database
    .ref(`users/${uid}/options`)
    .once('value')
    .then(snapshot => {
      const options = [];
      snapshot.forEach(childSnapshot => {
        options.push({
          id: childSnapshot.key,
          text: childSnapshot.val().text,
        });
      });
      dispatch(setOptions(options));
    })
    .catch(e => console.log(e));
};
