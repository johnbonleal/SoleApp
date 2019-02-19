import { createStackNavigator } from 'react-navigation';

import OnBoardingScreen from '../screens/Loan/OnBoarding';
import HomeAvailaScreen from '../screens/Loan/Home';
import LoanCalculatorScreen from '../screens/Loan/LoanCalculator';
import LoanCashScreen from '../screens/Loan/LoanCash';
import LoanSummary from '../screens/Loan/LoanSummary';

const LoanRoutes = createStackNavigator(
    {
        OnBoardingAvaila: { screen: OnBoardingScreen },
        HomeAvaila: { screen: HomeAvailaScreen },
        LoanCalculator: { screen: LoanCalculatorScreen },
        LoanCash: { screen: LoanCashScreen },
        LoanSummary: { screen: LoanSummary }
    },
    {
        headerMode: 'none'
    }
);

export default LoanRoutes;