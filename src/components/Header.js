import React from 'react';
import { Dimensions, View, Image, Animated, TouchableOpacity, Text } from 'react-native';
import { fonts } from '../resources';

var _ = require('lodash');

const { width, height } = Dimensions.get('window');
const APP_HEADER_HEIGHT = 56;

// TODO: Fix HeaderRight
const Header = ({ headerLeft, onPressHeaderLeft, onPressHeaderRight, headerRight, headerTitle, headerRightStyle, headerLeftStyle, headerStyle }) => (
    <Animated.View style={[{ height: APP_HEADER_HEIGHT, position: 'absolute', top: height / 35, left: 0, right: 0, zIndex: 99 }, headerStyle]}>
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16}}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
            {headerLeft && <TouchableOpacity onPress={onPressHeaderLeft} style={[{ height: 24, width: 24 }, headerLeftStyle]} >
                <Image style={{ flex: 1, height: null, width: null, tintColor: 'white' }} source={headerLeft} />
            </TouchableOpacity>}
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
            {headerTitle && <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: 'white' }}>{headerTitle}</Text>}
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={onPressHeaderRight} style={{ justifyContent: 'center' }} >
                {_.isString(headerRight) ?
                    <Text style={{ color: 'white' }}>{headerRight}</Text>:
                    <View style={[{ height: 24, width: 24 }, !_.isString(headerRight) && headerRightStyle]}>
                        <Image style={{ flex: 1, height: null, width: null, tintColor: '#FFFFFF' }} source={headerRight}/>
                    </View>
                }
            </TouchableOpacity>
        </View>
        </View>
    </Animated.View>
);

export default Header;