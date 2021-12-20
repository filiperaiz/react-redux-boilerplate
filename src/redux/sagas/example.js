import { takeEvery, put, spawn, call, select, delay } from 'redux-saga/effects'
import {
  Types as ExampleTypes,
  Actions as ExampleActions,
  Selectors as ExampleSelectors
} from 'redux/ducks/example'

export function* functionDispatch(params) {
  yield put(ExampleActions.exampleType(params))
}

function* fetchExample({ payload }) {
  try {
    const { example } = yield select(ExampleSelectors.getExampleState)

    delay(1000)

    if (example) {
      yield call(functionDispatch, payload)
    }
  } catch (error) {
    yield put(ExampleActions.exampleType())

    yield call(functionDispatch, 'params')

    throw new Error(`fetchExample -> ${error.message}`)
  }
}

function* watchFetchExample() {
  yield takeEvery(ExampleTypes.EXAMPLE_TYPE, fetchExample)
}

export default function* init() {
  yield spawn(watchFetchExample)
}
