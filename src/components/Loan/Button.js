import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';

const Button = ({
    title,
    containerStyle,
    textStyle,
    onPress
}) => (
        <TouchableOpacity style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        height: Constants.BUTTON_HEIGHT,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Constants.COLOR_SUPER_LIGHT_GRAY,
        backgroundColor: Constants.COLOR_LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})