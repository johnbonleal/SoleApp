import { createStackNavigator } from 'react-navigation';

import MerchantsScreen from '../screens/Merchants/Merchants';
import MerchantViewScreen from '../screens/Merchants/MerchantView';
import MerchantBranchesScreen from '../screens/Merchants/MerchantBranches';
import MerchantNearbyScreen from '../screens/Merchants/MerchantNearby';

const MerchantRoutes = createStackNavigator(
    {
        Merchants: {
            screen: MerchantsScreen,
            navigationOptions: { header: null }
        },
        MerchantView: {
            screen: MerchantViewScreen,
            navigationOptions: { header: null }
        },
        MerchantBranch: {
            screen: MerchantBranchesScreen,
            navigationOptions: { header: null }
        },
        MerchantNearby: {
            screen: MerchantNearbyScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Merchants'
    }
);

export default MerchantRoutes;