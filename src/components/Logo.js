import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ICON_HEIGHT = 220;

const Logo = ({ image, text, textContainerStyle, textStyle }) => (
    <View style={styles.container} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} resizeMode={'cover'} />
        </View>
        <View style={[styles.textContainer, textContainerStyle]} >
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    </View>
);

export default Logo;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
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
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ICON_HEIGHT - 32
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
});