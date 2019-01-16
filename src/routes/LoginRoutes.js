import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/Login';

const LoginRoutes = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default LoginRoutes;