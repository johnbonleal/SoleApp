import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Loan/OnBoarding';
import HomeAvailaScreen from '../screens/Loan/Home';

const LoanRoutes = createStackNavigator(
    {
        OnBoarding: { screen: OnBoardingScreen },
        HomeAvaila: { screen: HomeAvailaScreen }
    },
    {
        headerMode: 'none'
    }
);

export default LoanRoutes;