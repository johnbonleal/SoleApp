import { createStackNavigator } from 'react-navigation';

import ShoeScreen from '../screens/Home/Home';
import MerchantViewScreen from '../screens/Home/MerchantView';
import MerchantListScreen from '../screens/Home/MerchantList';

const MerchantRoute = createStackNavigator(
    {
        Home: {
            screen: ShoeScreen,
            navigationOptions: { header: null }
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