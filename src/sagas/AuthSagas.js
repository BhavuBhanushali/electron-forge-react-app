import { call, put, takeLatest } from 'redux-saga/effects';
import {
  postLoginSuccess,
  POST_LOG_IN_REQUEST
} from '../actions/authActions';
// import { postLoginRequestApiCall } from 'api/firebaseauth';

function* postLoginRequestSagaHandler({ payload }) {
  const { email, password, onSuccess } = payload;
  // try {
  //   let response = yield call(postLoginRequestApiCall, { email, password });
  //   if (response) {
  //      yield put(postLoginSuccess(response))
  //     onSuccess && onSuccess(true);
  //   } else {
  //     throw new Error('Auth Failed');
  //   }
  // } catch (e) {
  //   onSuccess && onSuccess(false);
  // }
}

export function* authenticationSagas() {
  yield takeLatest(POST_LOG_IN_REQUEST, postLoginRequestSagaHandler);
}
