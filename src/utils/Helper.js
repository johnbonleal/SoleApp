import React from 'react';
import { Animated } from 'react-native';

const translateX = new Animated.Value(Constants.SCREEN_WIDTH * 2);
const opacity = new Animated.Value(0);

export const startAnimation = () => {
    Animated.parallel([
        Animated.spring(translateX, {
            toValue: 0,
            friction: 5,
            tension: 5
        }),
        Animated.timing(opacity, {
            toValue: 1
        })
    ]).start();
}

export const dismissAnimation = () => {
    Animated.parallel([
        Animated.spring(translateX, {
            toValue: -100
        }),
        Animated.timing(opacity, {
            toValue: 0
        })
    ]).start();
}