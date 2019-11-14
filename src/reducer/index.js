import {combineReducers} from 'redux';
import translateReducer from './translateReducer';
import authReducer from './authReducer';
import pictureReducer from './pictureReducer';

const rootReducer = combineReducers({
    lang : translateReducer,
    getPicture: pictureReducer,
    auth: authReducer
})

export default rootReducer