import React from 'react';
import { Animated } from 'react-native';
import { Constants } from '../configs';

var _ = require('lodash');

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

export const getFirstName = name => {
    if (_.isString(name)) {
        const splitNameIntoArray = name.split(' ');
        let firstName = splitNameIntoArray[0];
        if (splitNameIntoArray[0] === 'Ma.' || splitNameIntoArray[0] === 'Ma') {
            firstName = `${splitNameIntoArray[0]} ${splitNameIntoArray[1]}`;
        }
        return firstName;
    }
}

export const removeEmpty = (obj) => {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
        else if (obj[key] == null || obj[key] == undefined) delete obj[key];
    });
    return obj;
};