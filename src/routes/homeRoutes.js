import { createStackNavigator } from 'react-navigation';

import ShoeScreen from '../screens/Home/home';
import MerchantViewScreen from '../screens/Home/merchantView';
import MerchantListScreen from '../screens/Home/merchantList';

const MerchantRoute = createStackNavigator(
    {
        Home: {
            screen: ShoeScreen,
            navigationOptions: { headerTitle: 'Home'}
        },
        MerchantView: {
            screen: MerchantViewScreen,
            navigationOptions: { headerTitle: 'MerchantView'}
        },
        MerchantList: {
            screen: MerchantListScreen,
            navigationOptions: { headerTitle: 'MerchantList'}
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default MerchantRoute;