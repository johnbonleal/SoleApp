import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Loan/OnBoarding';
import HomeAvailaScreen from '../screens/Loan/Home';
import LoanCalculatorScreen from '../screens/Loan/LoanCalculator';
import LoanCashScreen from '../screens/Loan/LoanCash';

const LoanRoutes = createStackNavigator(
    {
        OnBoarding: { screen: OnBoardingScreen },
        HomeAvaila: { screen: HomeAvailaScreen },
        LoanCalculator: { screen: LoanCalculatorScreen },
        LoanCash: { screen: LoanCashScreen }
    },
    {
        headerMode: 'none'
    }
);

export default LoanRoutes;