import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './routes/AppNavigator';
import configureStore from './configs/store';
import { NavigationService } from './configs/NavigationService';

const { store, persistor } = configureStore();

export default class SoleApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}/>
                </PersistGate>
            </Provider>
        )
    }
}