import {
    take,
    put,
    call,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';
import axios from 'axios';

function* workGetPicture(action) {
    const formData = new FormData();
    formData.append("image", action.payload.image);
    console.log(formData)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const res = yield call(axios.post, "http://127.0.0.1:5000/api/get/picture", formData, config);
    yield put({ type: 'Get_Picture_Success', payload: res })
}

export function* watchGetPicture() {
    yield takeLatest("Get_Picture_Request", workGetPicture)
}