import { createStackNavigator, createAppContainer } from 'react-navigation';

import TrashScreen from '../screens/Trash';
import ProfileRoutes from './ProfileRoutes';
import MyCardScreen from '../screens/Home/MyCard';
import ScanQRScreen from '../screens/ScanQR/Scanqr';
import RewardsRoutes from './RewardsRoutes';
import MainDrawer from './DrawerNavigator';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        MyCard: { screen: MyCardScreen },
        ScanQR: { screen: ScanQRScreen },
        Trash: { screen: TrashScreen },
        AppDrawer: { screen: MainDrawer },
        Profile: { screen: ProfileRoutes },
        Rewards: { screen: RewardsRoutes }
    },
    {
        mode: 'modal',
        initialRouteName: 'AppDrawer',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator);