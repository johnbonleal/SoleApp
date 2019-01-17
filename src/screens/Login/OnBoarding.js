import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import Swiper from 'react-native-swiper';

class OnBoarding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <FirstScreen />
                {/* <Swiper loop={true} autoplay={true}>
                    <FirstScreen />
                    <SecondScreen />
                </Swiper> */}
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <View style={{flexDirection: 'row'}}></View>
                </View>
            </View>
        )
    }
}

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});