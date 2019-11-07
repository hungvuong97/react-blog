import {all, fork} from 'redux-saga/effects';
import * as translateSaga from './translateSaga';

export default function * rootSaga() {
    yield all(
        [...Object.values(translateSaga)].map(fork)
    )
}