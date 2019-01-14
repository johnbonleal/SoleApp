import { createStackNavigator, createAppContainer } from 'react-navigation';

import TrashScreen from '../screens/Trash';
import ProfileRoutes from './ProfileRoutes';
import MyCardScreen from '../screens/Home/MyCard';
import ScanQRScreen from '../screens/ScanQR/Scanqr';
import RewardsRoutes from './RewardsRoutes';
import PointsRoutes from './PointsRoutes';
import MerchantRoutes from './MerchantRoutes';
import MainDrawer from './DrawerNavigator';
import ContactUsScreen from '../screens/Home/ContactUs';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        MyCard: { screen: MyCardScreen },
        ContactUs: { screen: ContactUsScreen },
        ScanQR: { screen: ScanQRScreen },
        Trash: { screen: TrashScreen },
        AppDrawer: { screen: MainDrawer },
        Profile: { screen: ProfileRoutes },
        Rewards: { screen: RewardsRoutes },
        Points: { screen: PointsRoutes },
        Merchant: { screen: MerchantRoutes },
        
    },
    {
        mode: 'modal',
        initialRouteName: 'AppDrawer',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator);