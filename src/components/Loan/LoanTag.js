import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';

const LoanTag = ({ text }) => (
    <View style={styles.container}>
        <View style={[styles.tagContainer, text === 'Cancelled' && { backgroundColor: Constants.COLOR_LIGHT_GRAY }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
);

export default LoanTag;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    tagContainer: {
        backgroundColor: Constants.COLOR_ERROR,
        borderRadius: 12,
        paddingHorizontal: 12
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    }
})