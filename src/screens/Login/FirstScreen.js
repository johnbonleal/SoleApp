import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.splash_1} />
                </View>
                <View style={{flex: 1}} />
                <View style={{flex: 1}}>
                    <Text style={styles.title}>Get as much</Text>
                    <Text style={styles.title}>as 65% discounts</Text>
                    <Text style={styles.description}>from over 1,500 merchant stores nationwide!</Text>
                </View>
            </View>
        )
    }
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        flex: 1, 
        height: null, 
        width: null
    },
    title: {
        fontSize: 34, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    description: {
        fontSize: 21, 
        color: '#FFFFFF'
    }
});