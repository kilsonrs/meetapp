import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '~/store/ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Meetapp:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    yield call([AsyncStorage, 'setItem'], '@Meetapp:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    NavigationService.navigate('Main');
  } catch (err) {
    console.tron.log(err);
  }
}
