import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeRoute from './homeRoutes';
import NearbyScreen from '../screens/Nearby/nearby';
import ProfileScreen from '../screens/Profile/profile';
import ScanQRScreen from '../screens/ScanQR/scanqr';

const noHeaderNavOptions = () => ({ header: null });

const HomeTabNav = createBottomTabNavigator(
    {
        Home: HomeRoute,
        Nearby: NearbyScreen,
        Profile: ProfileScreen,
        ScanQR: ScanQRScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Home":
                        iconName = "ios-home";
                        break;
                    case "Nearby":
                        iconName = "ios-compass";
                        break;
                    case "Profile":
                        iconName = "ios-person";
                        break;
                    case "ScanQR":
                        iconName = "ios-qr-scanner";
                        break;
                    default:
                        break;
                }
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            }
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
            screen: HomeTabNav,
            navigationOptions: noHeaderNavOptions
        }
    }
);

export default createAppContainer(AppNavigator);