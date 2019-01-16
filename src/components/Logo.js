import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ICON_HEIGHT = 230;

const Logo = ({ image, text }) => (
    <View style={styles.container} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer} >
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
);

export default Logo;

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
    },
});