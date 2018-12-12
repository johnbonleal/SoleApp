import { createStackNavigator, createAppContainer } from 'react-navigation';

import TrashScreen from '../screens/Trash';
import ProfileRoutes from './ProfileRoutes';
import MainDrawer from './DrawerNavigator';

const noHeaderNavOptions = () => ({ header: null });

const AppNavigator = createStackNavigator(
    {
        Trash: { screen: TrashScreen },
        AppDrawer: { screen: MainDrawer },
        Profile: { screen: ProfileRoutes }
    },
    {
        mode: 'modal',
        initialRouteName: 'AppDrawer',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator);