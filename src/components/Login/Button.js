import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BUTTON_HEIGHT = 56;

const Button = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
    button: {
        height: BUTTON_HEIGHT,
        backgroundColor: '#F3721C',
        flexDirection: 'row', 
        borderRadius: BUTTON_HEIGHT / 2, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        marginVertical: 12
    },
    buttonText: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
});