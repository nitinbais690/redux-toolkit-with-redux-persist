import {call, takeEvery, put} from 'redux-saga/effects';
import API from '../api';
import {peopleActions} from '../slices/people';

export function* fetchPeopleSaga({payload}: {payload: number}) {
  try {
    let result = yield call(() => API(`people`));
    yield put(peopleActions.getTaskSuccess(result.data.results));
  } catch (e) {
    yield put(peopleActions.getTaskError(e));
  }
}

export default function* peopleSaga() {
  yield takeEvery(peopleActions.getTask().type, fetchPeopleSaga);
}
