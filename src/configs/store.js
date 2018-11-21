import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers/RootReducer';
import rootSaga from '../sagas/RootSaga';
import { axios } from '../services/api';

const sagaMiddleware = createSagaMiddleware();

export default () => {
    const middlewares = [];

    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }
    middlewares.push(axiosMiddleware(axios));
    middlewares.push(sagaMiddleware);

    const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducers);
    const store = compose(applyMiddleware(...middlewares))(createStore)(persistedReducer);
    const persistor = persistStore(store);

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    return { store, persistor };
};