import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, Image, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { Indicator } from '../../components';
import AutoSlideAnimationHelper from './AutoSlideAnimationHelper';

import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

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
class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicatorAnim: new Animated.Value(0),
            currentIndex: 0,
        }
    }
    componentDidMount() {
        this._animateIndicator();
    }
    _increment = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex < data[0].items.length - 1 ? prevState.currentIndex + 1 : 0
        }));
    }
    _animateIndicator = (reset = true) => {
        if (reset) this.state.indicatorAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(this.state.indicatorAnim, {
                toValue: 1,
                duration: 5000 * (1 - this.state.indicatorAnim._value),
            }).start(({ finished }) => {
                if (finished) this._onNextItem();
            });
        });
    }
    _onNextItem = () => {
        this._animateIndicator();
        this._increment();
    }
    _setCurrentIndex = (currentIndex) => {
        this.setState({ currentIndex });
    }
    renderIndicators = () => {
        const { currentIndex, width, indicatorAnim } = this.state;
        
        return (

            <View style={[styles.indicatorWrap, { zIndex: 99 }]}>
                <View style={styles.indicators}>
                    {data[0].items.map((item, i) => (
                        <Indicator
                            key={i} i={i}
                            animate={currentIndex === i}
                            currentIndex={currentIndex}
                            indicatorAnim={indicatorAnim}
                        />
                    ))}
                </View>
            </View>

        )
    }
    render() {
        const { currentIndex } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback style={{ flex: 1}} >
                    <Image style={{ flex: 1, height: null, width: null }} source={data[0].items[currentIndex].src} />
                </TouchableWithoutFeedback>
                {this.renderIndicators()}
            </View>
        )
    }
}

export default Test;

const styles = StyleSheet.create({
    indicatorWrap: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0
    },
    indicators: {
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 8,
        flexDirection: 'row',
    },
    // Indicator
    line: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 1,
        height: 2,
    },
    progress: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: 2,
    },
})