import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';
import MerchantViewScreen from '../screens/Home/MerchantView';
import MerchantListScreen from '../screens/Home/MerchantList';
import TestScreen from '../screens/Home/Test';

const MerchantRoute = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { header: null }
        },
        MerchantView: {
            screen: MerchantViewScreen,
            navigationOptions: { headerTitle: 'MerchantView' }
        },
        MerchantList: {
            screen: MerchantListScreen,
            navigationOptions: { headerTitle: 'MerchantList' }
        },
        Test: {
            screen: TestScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Test'
    }
);

export default MerchantRoute;