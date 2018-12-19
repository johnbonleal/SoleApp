import { createStackNavigator } from 'react-navigation';

import RewardsScreen from '../screens/Rewards/Rewards';
import ViewRewardsScreen from '../screens/Rewards/ViewRewards';

const RewardsRoutes = createStackNavigator(
    {
        Rewards: { 
            screen: RewardsScreen,
            navigationOptions: {
                header: null
            }
        },
        ViewRewards: {
            screen: ViewRewardsScreen,
            navigationOptions: {
                header: null
            }
        }
    }
);

export default RewardsRoutes;