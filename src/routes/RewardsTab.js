import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ExploreRewardsScreen from '../screens/Rewards/ExploreRewards';
import MyRewardsScreen from '../screens/Rewards/MyRewards';

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : 0;
const HEADER_MAX_HEIGHT = 120 - STATUS_BAR_HEIGHT;

const RewardsTabNavigator = createMaterialTopTabNavigator(
    {
        Explore: {
            screen: ExploreRewardsScreen,
            navigationOptions: {
                tabBarLabel: 'Explore'
            }
        },
        MyRewards: {
            screen: MyRewardsScreen,
            navigationOptions: {
                tabBarLabel: 'My Rewards'
            }
        }
    },
    {
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: 'rgb(12,157,197)',
            inactiveTintColor: 'black',
            indicatorStyle: {
                backgroundColor: 'white',
                height: 8
            },
            labelStyle: {
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 18
            },
            tabStyle: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            style: {
                backgroundColor: 'transparent',
                marginTop: HEADER_MAX_HEIGHT - (Platform.OS === "ios" ? 16 : 35)
            },
            statusBarStyle: 'light-content',
            upperCaseLabel: false
        },
    }
);

export default RewardsTabNavigator;