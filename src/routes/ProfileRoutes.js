import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/Profile/Profile';
import EditProfileScreen from '../screens/Profile/EditProfile';

const ProfileRoutes= createStackNavigator(
    {
        Profile: { 
            screen: ProfileScreen,
            navigationOptions: {
                header: null
            }
        },
        EditProfile: {
            screen: EditProfileScreen,
            navigationOptions: {
                header: null
            }
        }
    }
);

export default ProfileRoutes;