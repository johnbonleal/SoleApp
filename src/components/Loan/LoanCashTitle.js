import React from 'react';
import { Text } from 'react-native';
import { Constants } from '../../configs';
import styles from '../../styles/LoanStyles';

const LoanCashTitle = ({ title }) => (
    <Text
        style={[
            styles.loanHeaderTitle,
            { color: Constants.COLOR_AVAILA_PRIMARY }
        ]}
    >
        {title}
    </Text>
);

export default LoanCashTitle;