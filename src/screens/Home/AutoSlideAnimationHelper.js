import React, { Component } from 'react';
import { LayoutAnimation, Animated, Dimensions, PanResponder, Alert } from 'react-native';

import { images } from '../../resources';

const data = [
    {
        idx: 1,
        items: [
            { id: 1, src: images.beach_1, type: 'img' },
            { id: 2, src: images.beach_2, type: 'img' },
            { id: 3, src: images.beach_3, type: 'img' },
            { id: 4, src: images.beach_4, type: 'img' }
        ]
    }
];

class AutoSlideAnimationHelper {
    constructor() {
    
        this.state = {
            paused: false,
            indicatorAnim: new Animated.Value(0),
            currentIndex: 0
        }
    }
    animateIndicator = (reset = true) => {
        const { indicatorAnim } = this.state;

        if (reset) indicatorAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(indicatorAnim, {
                toValue: 1,
                duration: 5000 * (1 - indicatorAnim._value),
            }).start(({ finished }) => {
                if (finished) this.onNextItem();
            });
        });
    }
    onNextItem = () => {
        this.animateIndicator();
        this.increment();
    }
    increment = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex < data[0].items.length - 1 ? prevState.currentIndex + 1 : 0
        }));
    }
    setCurrentIndex = index => {
        this.currentIndex = index;
    }
}

export default new AutoSlideAnimationHelper();