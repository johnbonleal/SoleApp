import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Dimensions, StyleSheet, Animated } from 'react-native';

import DealSummary from './Perks&Deals/DealSummary';
import DealContent from './Perks&Deals/DealContent';
import { NavigationBar, ImageSlideshow, FixedButton } from '../../components';

import { images } from '../../resources';
import { MerchantImageData } from '../../utils/Data';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class MerchantView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }
    render() {
        const { scrollY } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                    imageStyle={{
                        opacity: scrollY.interpolate({
                            inputRange: [SCREEN_HEIGHT + 28, SCREEN_HEIGHT + 29],
                            outputRange: [0, 1],
                            extrapolate: 'clamp'
                        })
                    }}
                    withBackground
                />
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    )}
                >
                    <ImageSlideshow data={MerchantImageData} />
                    <DealSummary />
                    <DealContent />
                </ScrollView>
                <FixedButton
                    style={{
                        backgroundColor: scrollY.interpolate({
                            inputRange: [120, 121],
                            outputRange: ['#000000', '#FFFFFF'],
                            extrapolate: 'clamp'
                        })
                    }}
                    text={"Scan QR Code"} />
            </View>
        )
    }
}

export default MerchantView;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});