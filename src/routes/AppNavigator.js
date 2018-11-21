import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createNavigationContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ShoeScreen from '../screens/Home/shoes';
import NearbyScreen from '../screens/Nearby/nearby';
import ProfileScreen from '../screens/Profile/profile';
import ScanQRScreen from '../screens/ScanQR/scanqr';

const noHeaderNavOptions = () => ({ header: null });

const HomeTabNav = createBottomTabNavigator(
    {
        Shoes: ShoeScreen,
        Nearby: NearbyScreen,
        Profile: ProfileScreen,
        ScanQR: ScanQRScreen
    },
    {
        initialRouteName: "Shoes",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                return <Ionicons name={"md-qr-scanner"} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeTabNav
        }
    }
);

export default createNavigationContainer(AppNavigator);