import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Login/OnBoarding';
import AboutUsScreen from '../screens/Login/AboutUs';
import LoginScreen from '../screens/Login/Login';
import CreateProfileScreen from '../screens/Login/CreateProfile';
import ChangePinScreen from '../screens/Login/ChangePin';

import ProfileScreen from '../screens/Profile/Profile';
import EditProfileScreen from '../screens/Profile/EditProfile';

import MainDrawer from './DrawerNavigator';
import MyCardScreen from '../screens/Home/MyCard';
import ScanQRScreen from '../screens/ScanQR/Scanqr';
import PerkRoutes from './PerkRoutes';

import ContactUsScreen from '../screens/Home/ContactUs';

const LoginRoutes = createStackNavigator(
    {
        OnBoarding: { screen: OnBoardingScreen },
        AboutUs: { screen: AboutUsScreen },
        SignIn: { screen: LoginScreen },
        CreateProfile: { screen: CreateProfileScreen },
        ChangePin: { screen: ChangePinScreen }
    },
    {
        headerMode: 'none'
    }
);

const ProfileRoutes = createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
        EditProfile: { screen: EditProfileScreen }
    },
    {
        headerMode: 'none'
    }
);

const MainRoutes = createStackNavigator(
    {
        AppDrawer: { screen: MainDrawer },
        MyCard: { screen: MyCardScreen },
        ScanQR: { screen: ScanQRScreen },
        Perks: { screen: PerkRoutes },
        Profile: { screen: ProfileRoutes }
    },
    {
        headerMode: 'none'
    }
);

const HomeRoutes = createStackNavigator(
    {
        Login: { screen: LoginRoutes },
        Main: { screen: MainRoutes },
        ContactUs: { screen: ContactUsScreen }
    },
    {
        headerMode: 'none'
    }
);

export default HomeRoutes;