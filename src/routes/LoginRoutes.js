import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Login/OnBoarding';
import AboutUsScreen from '../screens/Login/AboutUs';
import LoginScreen from '../screens/Login/Login';

const LoginRoutes = createStackNavigator(
    {
        OnBoarding: {
            screen: OnBoardingScreen,
            navigationOptions: { header: null }
        },
        AboutUs: {
            screen: AboutUsScreen,
            navigationOptions: { header: null }
        },
        SignIn: {
            screen: LoginScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'OnBoarding'
    }
);

export default LoginRoutes;