import React from 'react';
import { Dimensions, View, Animated, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ImageLoader from './ImageLoader';
import { images, fonts } from '../resources';
import { NavigationService } from '../configs/NavigationService';
import PropTypes from 'prop-types';

var _ = require('lodash');

const { width, height } = Dimensions.get('window');

// TODO: Fix HeaderRight
const Header = ({ headerLeft, onPressHeaderLeft, onPressHeaderRight, headerRight, headerTitle, headerTitleStyle, headerRightStyle, headerRightImageStyle, headerLeftStyle, headerLeftImageStyle, headerStyle, imageStyle, withBackground }) => (
    <Animated.View style={[styles.headerContainer, headerStyle]}>
        {withBackground && <Animated.View style={[{ ...StyleSheet.absoluteFill }, imageStyle]}>
            <Image style={styles.image} source={images.header_bg} />
        </Animated.View>}
        <View style={styles.header}>
            <View>
                {headerLeft && <TouchableOpacity onPress={onPressHeaderLeft || NavigationService.back} style={[styles.imageContainer, headerLeftStyle]} >
                    <ImageLoader style={[styles.image, {tintColor: '#FFFFFF'}, headerLeftImageStyle]} source={headerLeft} />
                </TouchableOpacity>}
            </View>
            <View style={{ alignItems: 'center' }}>
                {headerTitle && <Text style={[styles.headerTitle, headerTitleStyle]}>{headerTitle}</Text>}
            </View>
            <View>
                <TouchableOpacity onPress={onPressHeaderRight} style={{ justifyContent: 'center' }} >
                    {_.isString(headerRight) ?
                        <Text style={{ color: '#FFFFFF' }}>{headerRight}</Text> :
                        <View style={[styles.imageContainer, !_.isString(headerRight) && headerRightStyle]}>
                            <ImageLoader style={[styles.image, {tintColor: '#FFFFFF'}, headerRightImageStyle]} source={headerRight} />
                        </View>
                    }
                </TouchableOpacity>
            </View>
        </View>
    </Animated.View >
);

Header.propTypes = {
    headerLeft: PropTypes.string,
    headerTitle: PropTypes.string,
    headerRight: PropTypes.string,
    headerLeftStyle: PropTypes.object,
    headerTitleStyle: PropTypes.object,
    headerRightStyle: PropTypes.object,
    headerLeftImageStyle: PropTypes.object,
    headerRightImageStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    headerStyle: PropTypes.object
};

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
        width: null
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})