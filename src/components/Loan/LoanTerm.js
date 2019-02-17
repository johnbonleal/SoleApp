import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '../CheckBox';

const LoanTerms = ({
    name,
    text,
    handleChangeValue
}) => (
        <View style={styles.container}>
            <CheckBox name={name} handleChangeValue={handleChangeValue} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.required}>*</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );

export default LoanTerms;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    required: {
        fontSize: 16,
        color: 'red',
        marginHorizontal: 8
    },
    text: {
        flex: 1,
        fontSize: 16
    }
})