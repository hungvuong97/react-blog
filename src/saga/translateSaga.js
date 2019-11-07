import {
    take, 
    put,
    call,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';

function* workTranslate(action) {
    yield put({type: "TRANSLATE_SUCCESS", payload: action});
}

export function* watchTranslate(){
    yield takeLatest("TRANSLATE_REQUEST", workTranslate)
}