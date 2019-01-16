import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, Image, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { Indicator } from '../../components';

import { images } from '../../resources';

const ICON_HEIGHT = 230;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicatorAnim: new Animated.Value(0),
            currentIndex: 0,
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={images.contact_email} />
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.text}>Send us a message</Text>
                </View>
            </View>
        )
    }
}

export default Test;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        height: ICON_HEIGHT,
        width: ICON_HEIGHT,
        position: 'absolute'
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    textContainer: {
        backgroundColor: '#FFB000',
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: ICON_HEIGHT - 32
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})