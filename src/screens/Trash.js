import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { images, fonts } from '../resources';

const { width, height } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 200;

export const PROFILE_DATA = [
    {
        title: 'Full Name',
        description: 'John Leal'
    },
    {
        title: 'Email',
        description: 'john_leal@venteny.com'
    },
    {
        title: 'Position',
        description: 'Software Engineer'
    },
    {
        title: 'Company',
        description: 'Venteny Inc'
    },
    {
        title: 'Birthdate',
        description: '07/10/1996'
    },
    {
        title: 'Membership Number',
        description: '430206'
    },
    {
        title: 'Country',
        description: 'PH'
    }
];

const Indicator = ({ animate, indicatorAnim, width, currentIndex, i, setWidthFromLayout }) => {
    let style = {};

    if (animate) {
        style = {
            width: indicatorAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, width],
                extrapolate: 'clamp'
            })
        };
        } else if (currentIndex > i) { // seen
            style = { flex: 1 };
        } else if (currentIndex <= i) { // coming
            style = { width: 0 };
    }
    return (
        <View style={styles.line} onLayout={setWidthFromLayout}>
            <Animated.View style={[styles.progress, style]} />
        </View>
    )
}
export default class Trash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicatorAnim: new Animated.Value(0),
            currentIndex: 0,
            wdith: 0,
        }
    }
    componentDidMount() {
        this._animateIndicator()
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
    setWidthFromLayout = event => {
        const { width } = event.nativeEvent.layout;
        this.setState({ width });
    }
    renderIndicators = () => {
        const { currentIndex, width } = this.state;
        return (

            <View style={[styles.indicatorWrap, { zIndex: 99 }]}>
                <View style={styles.indicators}>
                    {data[0].items.map((item, i) => (
                        <Indicator
                            key={i} i={i}
                            animate={currentIndex == i}
                            currentIndex={currentIndex}
                            setWidthFromLayout={this.setWidthFromLayout}
                            width={width}
                            indicatorAnim={this.state.indicatorAnim}
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
                <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'red' }} onPress={this._increment}>
                    <Image style={{ flex: 1, height: null, width: null }} source={data[0].items[currentIndex].src} />
                </TouchableWithoutFeedback>
                {this.renderIndicators()}
            </View>
        )
    }
}

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