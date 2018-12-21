import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';
import MerchantViewScreen from '../screens/Home/MerchantView';
import MerchantListScreen from '../screens/Home/MerchantList';
import PointsScreen from '../screens/Home/Points';

const MerchantRoute = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { header: null }
        },
        MerchantView: {
            screen: MerchantViewScreen,
            navigationOptions: { headerTitle: 'MerchantView'}
        },
        MerchantList: {
            screen: MerchantListScreen,
            navigationOptions: { headerTitle: 'MerchantList'}
        },
        Points: {
            screen: PointsScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default MerchantRoute;