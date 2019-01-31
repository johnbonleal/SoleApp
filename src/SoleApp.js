import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './routes/AppNavigator';
import configureStore from './configs/Store';
import { NavigationService } from './configs/NavigationService';

const { store, persistor } = configureStore();
console.disableYellowBox = true;

export default class SoleApp extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef) }} />
                </PersistGate>
            </Provider>
        )
    }
}