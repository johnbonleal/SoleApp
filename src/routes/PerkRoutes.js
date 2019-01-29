import { createStackNavigator } from 'react-navigation';

import MerchantsScreen from '../screens/Merchants/Merchants';
import MerchantViewScreen from '../screens/Merchants/MerchantView';
import MerchantBranchesScreen from '../screens/Merchants/MerchantBranches';
import MerchantNearbyScreen from '../screens/Merchants/MerchantNearby';

import PointsScreen from '../screens/Rewards/Points';
import PointsHistoryScreen from '../screens/Rewards/PointHistory';

import VRewardsScreen from '../screens/Rewards/VRewards';
import ViewAllRewardsScreen from '../screens/Rewards/ViewAllRewards';
import ViewRewardScreen from '../screens/Rewards/ViewReward';

const MerchantRoutes = createStackNavigator(
    {
        Merchants: { screen: MerchantsScreen },
        MerchantView: { screen: MerchantViewScreen },
        MerchantBranch: { screen: MerchantBranchesScreen },
        MerchantNearby: { screen: MerchantNearbyScreen }
    },
    {
        initialRouteName: 'Merchants',
        headerMode: 'none'
    }
);

const PointsRoutes = createStackNavigator(
    {
        Points: { screen: PointsScreen },
        PointHistory: { screen: PointsHistoryScreen }
    },
    {
        initialRouteName: 'Points',
        headerMode: 'none'
    }
);

const RewardsRoutes = createStackNavigator(
    {
        VRewards: { screen: VRewardsScreen },
        ViewAllRewards: { screen: ViewAllRewardsScreen },
        ViewReward: { screen: ViewRewardScreen }
    },
    {
        headerMode: 'none'
    }
);

const PerkRoutes = createStackNavigator(
    {
        Merchant: { screen: MerchantRoutes },
        Points: { screen: PointsRoutes },
        Rewards: { screen: RewardsRoutes }
    },
    {
        headerMode: 'none'
    }
);

export default PerkRoutes;