import { createStackNavigator } from 'react-navigation';

import MerchantsScreen from '../screens/Merchants/Merchants';

const MerchantRoutes = createStackNavigator(
    {
        Merchants: {
            screen: MerchantsScreen,
            navigationOptions: { header: null }
        },
    },
    {
        initialRouteName: 'Merchants'
    }
);

export default MerchantRoutes;