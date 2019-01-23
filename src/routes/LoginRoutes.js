import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Login/OnBoarding';
import AboutUsScreen from '../screens/Login/AboutUs';
import LoginScreen from '../screens/Login/Login';
import ChangePinScreen from '../screens/Login/ChangePin';
import SignUpScreen from '../screens/Login/SignUp';

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
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: { header: null }
        },
        ChangePin: {
            screen: ChangePinScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'ChangePin'
    }
);

export default LoginRoutes;