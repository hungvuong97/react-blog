import {combineReducers} from 'redux';
import translateReducer from './translateReducer';

const rootReducer = combineReducers({
    lang : translateReducer
})

export default rootReducer