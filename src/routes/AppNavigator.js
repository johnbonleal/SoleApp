import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeRoute from './HomeRoutes';
import NearbyScreen from '../screens/Nearby/Nearby';
import ProfileScreen from '../screens/Profile/Profile';
import ScanQRScreen from '../screens/ScanQR/Scanqr';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeRoute, navigationOptions: noHeaderNavOptions },
        Nearby: { screen: NearbyScreen },
        Profile: { screen: ProfileScreen },
        ScanQR: { screen: ScanQRScreen }
    }
);

export default createAppContainer(AppNavigator);