import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { images, fonts } from '../resources';

const CircleListItem = ({ index, item, onPressItem }) => (
    <TouchableOpacity style={styles.container} onPress={onPressItem} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.avatar} />
        </View>
        <Text style={styles.merchantName}>{item.title}</Text>
    </TouchableOpacity>
);

export default CircleListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    imageContainer: {
        height: 70,
        width: 70,
        backgroundColor: '#F2F2F2',
        borderRadius: 35,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    merchantName: {
        fontSize: fonts.SMALL,
        marginVertical: 8,
        color: '#4A4A4A'
    }
});