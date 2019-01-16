import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ICON_HEIGHT = 230;

const ContactOption = ({ image, text, onPressItem }) => (
    <TouchableOpacity style={styles.container} onPress={()=>onPressItem(text)}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer} >
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

export default ContactOption;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    imageContainer: {
        height: ICON_HEIGHT, 
        width: ICON_HEIGHT
    },
    image: {
        flex: 1, 
        height: null, 
        width: null
    },
    textContainer: {
        backgroundColor: '#FFB000', 
        borderRadius: 20, 
        paddingVertical: 3, 
        paddingHorizontal: 12
    },
    text: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    }
})