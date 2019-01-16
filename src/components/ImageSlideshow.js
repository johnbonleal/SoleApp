import React, { Component } from 'react';
import { View, Animated, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Indicator from './Indicator';
import StarRating from './StarRating';

import { images } from '../resources';

const ICON_HEIGHT = 25;
const ratingObj = { ratings: 3 };

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MERCHANT_BACKGROUND_HEIGHT = SCREEN_HEIGHT * 0.9;
class ImageSlideshow extends Component {
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
        const { data } = this.props;
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
        const { currentIndex, indicatorAnim } = this.state;
        const { data } = this.props;
        return (
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
        )
    }
    render() {
        const { currentIndex } = this.state;
        const { data } = this.props;
        return (
            <View style={{ height: MERCHANT_BACKGROUND_HEIGHT }}>
                <View style={styles.container}>
                    <View style={{ ...StyleSheet.absoluteFill }} >
                        <Image style={styles.image} source={data[0].items[currentIndex].src} />
                    </View>
                    <View style={{ ...StyleSheet.absoluteFill }}>
                        <Image style={styles.image} source={images.gradient_3} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>HOTELS & RESORT</Text>
                        <Text style={styles.description}>One night staycation</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                            <View style={styles.logo}>
                                <Image style={styles.image} source={images.image2} />
                            </View>
                            <Text style={styles.companyName}>BEACH HOUSE</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <StarRating style={{ marginRight: 5 }} ratingObj={ratingObj} />
                            <Text style={styles.reviewCount}>70</Text>
                        </View>
                        {this.renderIndicators()}
                    </View>
                </View>
            </View>
        )
    }
}

export default ImageSlideshow;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
        zIndex: 99
    },
    title: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    description: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    logo: {
        height: ICON_HEIGHT,
        width: ICON_HEIGHT,
        borderRadius: ICON_HEIGHT / 2,
        overflow: 'hidden',
        marginRight: 8
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    reviewCount: {
        fontSize: 12, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    indicatorWrap: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -16
    },
    indicators: {
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
    }
})