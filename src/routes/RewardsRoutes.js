import { createStackNavigator } from 'react-navigation';

import VRewardsScreen from '../screens/Rewards/VRewards';
import ViewAllRewardsScreen from '../screens/Rewards/ViewAllRewards';
import ViewRewardScreen from '../screens/Rewards/ViewReward';

const RewardsRoutes = createStackNavigator(
    {
        VRewards: { 
            screen: VRewardsScreen,
            navigationOptions: {
                header: null
            }
        },
        ViewAllRewards: {
            screen: ViewAllRewardsScreen,
            navigationOptions: {
                header: null
            }
        },
        ViewReward: {
            screen: ViewRewardScreen,
            navigationOptions: {
                header: null
            }
        },
        
    }
);

export default RewardsRoutes;