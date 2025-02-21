import { all, fork } from 'redux-saga/effects'
import * as AuthSagas from './AuthSagas'

export default function* rootSaga() {
  yield all([
    ...Object.values(AuthSagas),
  ].map(fork))
}
