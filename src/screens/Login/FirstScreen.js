import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={{flex: 1, height: null, width: null}} source={images.splash_1} />
                </View>
                <View>
                    <Text style={{fontSize: 34, fontWeight: 'bold', color: '#FFFFFF'}}>Get as much</Text>
                    <Text style={{fontSize: 34, fontWeight: 'bold', color: '#FFFFFF'}}>as 65% discounts</Text>
                    <Text style={{fontSize: 21, color: '#FFFFFF'}}>from over 1,500 merchant stores nationwide!</Text>
                </View>
            </View>
        )
    }
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    }
});