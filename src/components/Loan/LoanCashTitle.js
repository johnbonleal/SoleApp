import React from 'react';
import { Text, Animated } from 'react-native';
import { Constants } from '../../configs';
import styles from '../../styles/LoanStyles';

const LoanCashTitle = ({ title, style }) => (
    <Animated.Text
        style={[
            styles.loanHeaderTitle,
            { color: Constants.COLOR_AVAILA_PRIMARY },
            style
        ]}
    >
        {title}
    </Animated.Text>
);

export default LoanCashTitle;