import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { images } from '../resources';

const AvailaImage = () => (
    <View style={styles.container}>
        <Image style={styles.image} source={images.availa_logo} resizeMode={'cover'} />
    </View>
);

export default AvailaImage;

const styles = StyleSheet.create({
    container: {
        height: 36, 
        width: 138
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
})