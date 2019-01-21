import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BUTTON_HEIGHT = 56;

const Button = ({ style, text, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
    button: {
        height: BUTTON_HEIGHT,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: BUTTON_HEIGHT / 2
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
});