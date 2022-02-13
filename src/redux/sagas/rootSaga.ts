import {all, call} from 'redux-saga/effects';
import peopleSaga from './people';

export default function* rootSaga() {
  yield all([call(peopleSaga)]);
}
