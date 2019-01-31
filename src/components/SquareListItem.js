import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Constants } from '../configs';

const SquareListItem = ({ item, index, onPress }) => (
    <TouchableOpacity key={item.id} style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={item.src} />
    </TouchableOpacity>
);

export default SquareListItem;

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: Constants.SCREEN_WIDTH / 3,
        borderRadius: 10,
        marginHorizontal: 4,
        overflow: 'hidden'
    },
    background: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    text2: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '300'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
})
