import React from 'react';
import { Dimensions, View, Animated, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ImageLoader from './ImageLoader';
import { images, fonts } from '../resources';
import { NavigationService } from '../configs/NavigationService';

var _ = require('lodash');

const { width, height } = Dimensions.get('window');
const APP_HEADER_HEIGHT = 56;

// TODO: Fix HeaderRight
const Header = ({ headerLeft, onPressHeaderLeft, onPressHeaderRight, headerRight, headerTitle, headerRightStyle, headerLeftStyle, headerStyle, imageStyle, withBackground }) => (
    <Animated.View style={[styles.headerContainer, headerStyle]}>
        {withBackground && <Animated.View style={[{ ...StyleSheet.absoluteFill }, imageStyle]}>
            <Image style={{ flex: 1, height: null, width: null }} source={images.header_bg} />
        </Animated.View>}
        <View style={styles.header}>
            <View>
                {headerLeft && <TouchableOpacity onPress={onPressHeaderLeft || NavigationService.back} style={[styles.imageContainer, headerLeftStyle]} >
                    <ImageLoader style={styles.image} source={headerLeft} />
                </TouchableOpacity>}
            </View>
            <View style={{ alignItems: 'center' }}>
                {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
            </View>
            <View>
                <TouchableOpacity onPress={onPressHeaderRight} style={{ justifyContent: 'center' }} >
                    {_.isString(headerRight) ?
                        <Text style={{ color: 'white' }}>{headerRight}</Text> :
                        <View style={[styles.imageContainer, !_.isString(headerRight) && headerRightStyle]}>
                            <ImageLoader style={styles.image} source={headerRight} />
                        </View>
                    }
                </TouchableOpacity>
            </View>
        </View>
    </Animated.View >
);

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        height: height / 7.5, 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        justifyContent: 'flex-end',
        zIndex: 99
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    imageContainer: {
        height: 24,
        width: 24
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        tintColor: '#FFFFFF'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})