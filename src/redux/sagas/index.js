import { all } from 'redux-saga/effects'

import Example from './example'

export default function* rootSaga() {
  yield all([Example()])
}
