import {
    take, 
    put,
    call,
    takeEvery,
    takeLatest,
    all
} from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import setAuthToken from '../../src/setAuthToken';
function* workLoginUser(action){
    const res = yield call(axios.post,"http://127.0.0.1:5000/api/user/login", action.payload);
    const {token} = res.data;
    console.log(token)
    // localStorage.setItem('jwtToken', token);
    // setAuthToken(token)

    const decoded = jwt_decode(token);
    yield put({type: "Login_Success", payload: decoded})
}
export function* watchloginUser(){
    yield takeLatest("Login_Request", workLoginUser);
}