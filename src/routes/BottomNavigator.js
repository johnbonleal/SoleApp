import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            },
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                navigation.popToTop();
                defaultHandler();
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);