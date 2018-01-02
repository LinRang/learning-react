import { delay } from 'redux-saga'
import {
  put,
  take,
  takeEvery,
  all,
  call,
  select
} from "redux-saga/effects";

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // yield delay(1000)  // 不可测试
  yield call(delay, 1000)   // 可测试的
  yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  // while (true) {
  //   yield take('INCREMENT_ASYNC')
  //   yield call(delay, 1000)
  //   yield put({type: 'INCREMENT'})
  // }
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchIncrementIfOdd() {
  while (true) {
    yield take('INCREMENT_IF_ODD')
    const counter = yield select(state => {
      return state.counter
    })
    if ( counter % 2 !== 0 ) {
      yield put({type: 'INCREMENT'})
    }
  }
}

export function* watchFirstThreeTodosCreation() {
  for(let i = 0; i < 3; i++) {
    yield take('INCREMENT')
  }
  // yield put({type: 'SHOW_CONGRATULATION'})
  console.log('congratulations, you increase three times!!!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchFirstThreeTodosCreation(),
    watchIncrementIfOdd()
  ])
}

