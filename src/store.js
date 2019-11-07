import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {logger} from 'redux-logger';
import rootReducer from './reducer';
import rootSaga from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function createStoreWithMiddleware() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store
}