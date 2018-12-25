import { createStackNavigator } from 'react-navigation';

import VRewardsScreen from '../screens/Rewards/VRewards';
import AllRewardsScreen from '../screens/Rewards/AllRewards';
import ViewRewardScreen from '../screens/Rewards/ViewReward';

const RewardsRoutes = createStackNavigator(
    {
        VRewards: { 
            screen: VRewardsScreen,
            navigationOptions: {
                header: null
            }
        },
        AllRewards: {
            screen: AllRewardsScreen,
            navigationOptions: {
                header: null
            }
        },
        ViewReward: {
            screen: ViewRewardScreen,
            navigationOptions: {
                header: null
            }
        }
    }
);

export default RewardsRoutes;