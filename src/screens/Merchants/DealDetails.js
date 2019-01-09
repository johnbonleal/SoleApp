import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const DealDetails = ({ title, subtitle, image, style, textStyle }) => (
    <View style={[{ flexDirection: 'row' }, style]}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
        </View>
        <View>
            <Text style={[styles.title, textStyle]}>{title}</Text>
            {subtitle}
        </View>
    </View>
);

export default DealDetails;

const styles = StyleSheet.create({
    imageContainer: { 
        height: 20, 
        width: 20, 
        marginRight: 8 
    },
    image: { 
        flex: 1, 
        height: null, 
        width: null, 
        tintColor: 'grey' 
    },
    title: { 
        fontSize: 15, 
        color: '#FFFFFF' 
    }
})