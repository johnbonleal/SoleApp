import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';
// import MerchantViewScreen from '../screens/Merchants/MerchantView';
// import MerchantListScreen from '../screens/Home/MerchantList';
import MerchantRoute from '../routes/MerchantRoutes';
import TestScreen from '../screens/Home/Test';

const HomeRoute = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { header: null }
        },
        Merchant: {
            screen: MerchantRoute,
            navigationOptions: { header: null }
        },
        Test: {
            screen: TestScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default HomeRoute;