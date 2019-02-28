import React from 'react';
import { Animated, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Constants } from '../configs';
import { fonts } from '../resources';

const FixedButton = ({
    text,
    onPress,
    disabled,
    style
}) => (
        <Animated.View style={[styles.container, style]}>
            <TouchableOpacity
                style={[
                    styles.button,
                    disabled && { backgroundColor: Constants.COLOR_DARK_GRAY }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </Animated.View>
    );

export default FixedButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        elevation: 10,
        padding: 16,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    button: {
        backgroundColor: '#FFA701',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 16
    },
    text: {
        fontSize: fonts.MEDIUM,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});