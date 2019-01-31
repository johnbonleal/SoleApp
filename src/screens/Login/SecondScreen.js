import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { images } from '../../resources';

class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.splash_2} />
                </View>
                <View style={{flex: 1}} />
                <View style={{flex: 1}}>
                    <Text style={styles.title}>Lowest interest rate</Text>
                    <Text style={styles.description}>
                        Borrow as much as ₱30,000.00 payable up to 90 days, exclusive to our corporate partners!
                    </Text>
                </View>
            </View>
        )
    }
}

export default SecondScreen;

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