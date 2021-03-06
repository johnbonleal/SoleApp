import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SideMenu from './SideMenu';

import HomeScreen from '../screens/Home/Home';
import MyCardScreen from '../screens/Home/MyCard';
import VRewardsScreen from '../screens/Rewards/VRewards';
import HistoryScreen from '../screens/History/History';
import NotificationScreen from '../screens/Notification/Notification';
import TermsScreen from '../screens/Terms/Terms';
import HelpCenterScreen from '../screens/Help Center/HelpCenter';

import { images } from '../resources';

const drawerIcon = ({ tintColor, image }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={image} />

const MainDrawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: "Home",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={images.store} />
            }
        },
        MyCard: {
            screen: MyCardScreen,
            navigationOptions: {
                drawerLabel: "Virtual Card",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={images.card_dark} />
            }
        },
        VRewards: {
            screen: VRewardsScreen,
            navigationOptions: {
                drawerLabel: "Venteny Rewards",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={images.rewards_dark} />
            }
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                drawerLabel: "History",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={images.history} />

            }
        },
        Notification: {
            screen: NotificationScreen,
            navigationOptions: {
                drawerLabel: "Notifications",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.notification} />
            }
        },
        Terms: {
            screen: TermsScreen,
            navigationOptions: {
                drawerLabel: "Terms & Conditions",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.terms} />
            }
        },
        HelpCenter: {
            screen: HelpCenterScreen,
            navigationOptions: {
                drawerLabel: "Help Center",
                drawerIcon: ({ tintColor }) => <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={images.help_center} />
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'right',
        drawerType: 'slide',
        contentComponent: props => <SideMenu {...props} />,
        contentOptions: {
            activeTintColor: 'tomato',
            labelStyle: { fontWeight: 'normal' }
        }
    }
)

export default MainDrawer;