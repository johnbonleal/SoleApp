import React from 'react';
import { View, Text, Animated } from 'react-native';
import styles from '../../styles/LoanStyles';

const Header = ({ title, subtitle, containerStyle }) => (
    <Animated.View style={[styles.loanCalculatorHeaderContainer, containerStyle]}>
        <View style={{ justifyContent: 'center', padding: 16 }}>
            <Text style={styles.loanHeaderTitle}>{title}</Text>
            <Text style={styles.loanHeaderSubtitle}>{subtitle}</Text>
        </View>
    </Animated.View>
);

export default Header;