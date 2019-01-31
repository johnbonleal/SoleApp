import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/LoanStyles';

const Header = ({title, subtitle}) => (
    <View style={styles.loanCalculatorHeaderContainer}>
        <Text style={styles.loanCalculatorTitle}>{title}</Text>
        <Text style={styles.loanCalculatorSubtitle}>Calculate your lorem ipsum</Text>
    </View>
);

export default Header;