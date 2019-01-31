import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/LoanStyles';

const Header = ({title, subtitle}) => (
    <View style={styles.loanCalculatorHeaderContainer}>
        <Text style={styles.loanHeaderTitle}>{title}</Text>
        <Text style={styles.loanHeaderSubtitle}>Calculate your lorem ipsum</Text>
    </View>
);

export default Header;