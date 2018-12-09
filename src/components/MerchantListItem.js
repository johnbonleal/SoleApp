import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { images } from '../resources';
import ListItemStyles from '../styles/ListItemStyle';

const MerchantListItem = props => (
    <TouchableOpacity id={props.item.id} key={props.index} style={styles.container} onPress={props.onPressItem} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={images.image2} />
        </View>
        <Text style={styles.merchantName}>The Big Cup</Text>
    </TouchableOpacity>
);

export default MerchantListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    imageContainer: {
        height: 96, 
        width: 96, 
        borderRadius: 48, 
        overflow: 'hidden'
    },
    image: {
        flex: 1, 
        height: null, 
        width: null
    },
    merchantName: {
        fontSize: 13,
        marginVertical: 8, 
        color: '#4A4A4A'
    }
});