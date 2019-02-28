import React, { PureComponent } from 'react';
import { View, Animated, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ImageLoader from './ImageLoader';
import { images } from '../resources';
import { NavigationService, Constants } from '../configs';
import PropTypes from 'prop-types';

var _ = require('lodash');

// TODO: Fix HeaderRight
class NavigationBar extends PureComponent {
    render() {
        const {
            headerLeft,
            onPressHeaderLeft,
            onPressHeaderRight,
            headerRight,
            headerTitle,
            headerTitleStyle,
            headerRightStyle,
            headerRightImageStyle,
            headerLeftStyle,
            headerLeftImageStyle,
            headerStyle,
            imageStyle,
            withBackground
        } = this.props;
        return (
            <Animated.View style={[styles.headerContainer, headerStyle]}>
                {withBackground && <Animated.View style={[{ ...StyleSheet.absoluteFill }, imageStyle]}>
                    <Image style={styles.image} source={images.header_bg} />
                </Animated.View>}
                <View style={styles.header}>
                    <View>
                        {_.isString(headerLeft) ?
                            <Text style={{ color: Constants.COLOR_WHITE }}>{headerLeft}</Text> :
                            <TouchableOpacity onPress={onPressHeaderLeft || NavigationService.back} style={[styles.imageContainer, headerLeftStyle]} >
                                <ImageLoader style={[styles.image, { tintColor: Constants.COLOR_WHITE }, headerLeftImageStyle]} source={headerLeft} />
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {headerTitle && _.isString(headerTitle) ?
                            <Text style={[styles.headerTitle, headerTitleStyle]}>{headerTitle}</Text> :
                            headerTitle
                        }
                    </View>
                    <View>
                        <TouchableOpacity onPress={onPressHeaderRight} style={{ justifyContent: 'center' }} >
                            {_.isString(headerRight) ?
                                <Text style={{ color: Constants.COLOR_WHITE }}>{headerRight}</Text> :
                                headerRight
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View >
        )
    }
}

NavigationBar.propTypes = {
    headerLeft: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    headerTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    headerRight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.object
    ]),
    headerLeftStyle: PropTypes.object,
    headerTitleStyle: PropTypes.object,
    headerRightStyle: PropTypes.object,
    headerLeftImageStyle: PropTypes.object,
    headerRightImageStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    headerStyle: PropTypes.object
};

NavigationBar.defaultProps = {
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
    headerLeftStyle: {},
    headerTitleStyle: {},
    headerRightStyle: {},
    headerLeftImageStyle: {},
    headerRightImageStyle: {},
    imageStyle: {},
    headerStyle: {}
};

export default NavigationBar;

const styles = StyleSheet.create({
    headerContainer: {
        height: Constants.SCREEN_HEIGHT / 7.5,
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