import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import RootReducer from '../reducers/RootReducer';
import { rootSaga } from '../sagas/RootSaga';
import { axios } from '../services/Api';

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
        stateReconciler: autoMergeLevel2
    };

    const persistedReducer = persistCombineReducers(persistConfig, RootReducer);
    const store = compose(applyMiddleware(...middlewares))(createStore)(persistedReducer);
    const persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};