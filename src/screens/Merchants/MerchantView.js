import React, { Component } from 'react';
import { View, StatusBar, ScrollView, StyleSheet, Animated } from 'react-native';

import DealSummary from './Perks&Deals/DealSummary';
import DealContent from './Perks&Deals/DealContent';
import { NavigationBar, ImageSlideshow, FixedButton } from '../../components';

import { Constants } from '../../configs';
import { images } from '../../resources';
import { MerchantImageData } from '../../utils/Data';

class MerchantView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }
    render() {
        const { scrollY } = this.state;
        const { navigation } = this.props;
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
                            inputRange: [Constants.SCREEN_HEIGHT + 28, Constants.SCREEN_HEIGHT + 29],
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
                    {
                        (
                            navigation &&
                            navigation.state.params &&
                            navigation.state.params.attributes &&
                            navigation.state.params.attributes.merchant_galleries.length > 0
                        ) ?
                        <ImageSlideshow data={navigation.state.params.attributes} />:
                        <ImageSlideshow data={MerchantImageData} />
                    }
                    <DealSummary />
                    <DealContent />
                </ScrollView>
                <FixedButton
                    style={{
                        backgroundColor: scrollY.interpolate({
                            inputRange: [120, 121],
                            outputRange: [Constants.COLOR_BLACK, Constants.COLOR_WHITE],
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