import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';
import MyCardScreen from '../screens/Home/MyCard';
import NearbyScreen from '../screens/Nearby/Nearby';
import ProfileScreen from '../screens/Profile/Profile';
import ScanQRScreen from '../screens/ScanQR/Scanqr';

import { images } from '../resources';

const AppDrawer = createDrawerNavigator(
    {
        MyCard: {
            screen: MyCardScreen,
            navigationOptions: {
                header: null,
                drawerIcon: ({ tintColor }) => {
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.card} />
                }
            }
        },
        Nearby: {
            screen: NearbyScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => {
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.card} />
                }
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => {
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.card} />
                }
            }
        },
        ScanQR: {
            screen: ScanQRScreen,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => {
                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.card} />
                }
            }
        }
    },
    {
        initialRouteName: 'MyCard',
        drawerPosition: 'right',
        drawerType: 'slide'
    }
)

export default AppDrawer;