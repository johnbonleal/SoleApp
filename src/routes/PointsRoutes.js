import { createStackNavigator } from 'react-navigation';

import PointsScreen from '../screens/Rewards/Points';
import PointsHistoryScreen from '../screens/Rewards/PointHistory';

const PointsRoutes = createStackNavigator(
    {
        Points: {
            screen: PointsScreen,
            navigationOptions: { header: null }
        },
        PointHistory: {
            screen: PointsHistoryScreen,
            navigationOptions: { header: null }
        },
    },
    {
        initialRouteName: 'Points'
    }
);

export default PointsRoutes;