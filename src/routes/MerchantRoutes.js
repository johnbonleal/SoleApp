import { createStackNavigator } from 'react-navigation';

import MerchantsScreen from '../screens/Merchants/Merchants';
import MerchantViewScreen from '../screens/Merchants/MerchantView';

const MerchantRoutes = createStackNavigator(
    {
        Merchants: {
            screen: MerchantsScreen,
            navigationOptions: { header: null }
        },
        MerchantView: {
            screen: MerchantViewScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Merchants'
    }
);

export default MerchantRoutes;