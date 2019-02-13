import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeRoutes from './HomeRoutes';
import PerkRoutes from './PerkRoutes';
import LoanRoutes from './LoanRoutes';
import TestScreen from '../screens/Home/Test';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeRoutes },
        Perk: { screen: PerkRoutes },
        Loan: { screen: LoanRoutes },
        // Test Routes
        // Test: { screen: TestScreen }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator);