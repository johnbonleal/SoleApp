import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Loan/OnBoarding';
import HomeAvailaScreen from '../screens/Loan/Home';
import LoanCalculatorScreen from '../screens/Loan/LoanCalculator';

const LoanRoutes = createStackNavigator(
    {
        OnBoarding: { screen: OnBoardingScreen },
        HomeAvaila: { screen: HomeAvailaScreen },
        LoanCalculator: { screen: LoanCalculatorScreen }
    },
    {
        headerMode: 'none'
    }
);

export default LoanRoutes;