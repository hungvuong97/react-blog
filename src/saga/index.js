import { all, fork } from 'redux-saga/effects';
import * as authSaga from './authSaga';
import * as getPictureSaga from './getPictureSaga'
export default function* rootSaga() {
    yield all(
        [...Object.values(authSaga), ...Object.values(getPictureSaga)].map(fork)
    )
}