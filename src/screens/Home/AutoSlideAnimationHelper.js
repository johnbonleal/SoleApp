import React, { Component } from 'react';
import { LayoutAnimation, Animated, Dimensions, PanResponder } from 'react-native';

import { images } from '../../resources';

const data = [
    { 
        idx: 1, 
        items: [
            { src: images.beach_1, type: 'img' }, 
            { src: images.beach_2, type: 'img' },
            { src: images.beach_3, type: 'img' },
            { src: images.beach_4, type: 'img' }
        ]
    }
];

class AutoSlideAnimationHelper {
    constructor() {
        this.paused = false;
        this.indicatorAnim = new Animated.Value(0);

        this.data = data;
        this.deckIdx = 0;
    }
    ///////////////////////////////////
    // Toggle Indicator Animation
    ///////////////////////////////////

    pause = () => {
        this.setPaused(true);
        this.indicatorAnim.stopAnimation();
    }

    play = () => {
        if (this.paused) {
            this.setPaused(false);
            this.animateIndicator(false);
        }
    }

    animateIndicator = (reset = true) => {
        if (reset) this.indicatorAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(this.indicatorAnim, {
                toValue: 1,
                duration: 5000 * (1 - this.indicatorAnim._value),
            }).start(({ finished }) => {
                // if (finished) this.onNextItem();
            });
        });
    }

    ///////////////////////////////////
    // Navigate Story Items
    ///////////////////////////////////
    onNextItem = () => {
        if (this.paused) return this.play();

        const story = this.currentStory;

        // if (story.idx >= story.items.length - 1)
        //     return this.onNextDeck();

        this.animateIndicator();
        this.setStoryIdx(story.id + 1);
    }
    onPrevItem = () => {
        if (this.backOpacity == 1) this.setBackOpacity(0);

        const story = this.currentStory;

        if (story.id == 0)
            return this.onPrevDeck();

        this.animateIndicator();
        this.setStoryIdx(story.id - 1);
    }

    ///////////////////////////////////
    // Setter Methods
    ///////////////////////////////////

    setPaused = (paused) => {
        this.paused = paused;
    }

    setDeckIdx = (deckIdx) => {
        this.deckIdx = deckIdx;
    }

    setStoryIdx(idx) {
        this.currentStory.id = idx;
    }

    ///////////////////////////////////
    // Computed properties
    ///////////////////////////////////

    get currentStory() {
        if (this.data.length <= 0) return null;
        return this.data[this.deckIdx];
    }
}

export default new AutoSlideAnimationHelper();