import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import LoginScreen from '../screens/Login/login';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: noHeaderNavOptions
        }
    },
    {
        initialRouteName: "Login"
    }
);

export default createNavigationContainer(AppNavigator);