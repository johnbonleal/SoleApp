import React from 'react';
import { View, Image, Animated, TouchableOpacity } from 'react-native';
import { images } from '../resources';

const APP_HEADER_HEIGHT = 56;

const Header = props => (
    <Animated.View style={{ height: APP_HEADER_HEIGHT, position: 'absolute', top: 0, width: '100%', justifyContent: 'center', alignItems: 'flex-end', backgroundColor: props.headerBgColor, paddingHorizontal: 16, zIndex: 99 }}>
        <TouchableOpacity onPress={props.onPress} style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'white', overflow: 'hidden' }} >
            <Image style={{ flex: 1, height: null, width: null }} source={images.profile} />
        </TouchableOpacity>
    </Animated.View>
);

export default Header;