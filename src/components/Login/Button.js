import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';
import Spinner from 'react-native-spinkit';

const Button = ({
    style,
    text,
    textStyle,
    isLoading,
    disabled,
    onPress
}) => (
        <TouchableOpacity
            style={[styles.button, style, disabled && { backgroundColor: '#5E5E5E' }]}
            disabled={disabled}
            onPress={onPress}
        >
            {
                isLoading ?
                    <Spinner type="ThreeBounce" size={50} color="#EFB881" /> :
                    <Text style={[styles.buttonText, textStyle]}>{text}</Text>
            }
        </TouchableOpacity>
    );

export default Button;

const styles = StyleSheet.create({
    button: {
        height: Constants.BUTTON_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Constants.BUTTON_HEIGHT / 2
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
});