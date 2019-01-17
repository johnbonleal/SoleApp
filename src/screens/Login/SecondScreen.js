import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { images } from '../../resources';

class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={{ flex: 1, height: null, width: null }} source={images.splash_2} />
                </View>
            </View>
        )
    }
}

export default SecondScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});