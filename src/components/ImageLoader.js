import React, { Component } from 'react';
import { StyleSheet, Animated, View, Image } from 'react-native';
import PropTypes from 'prop-types';

class ImageLoader extends Component {
    thumbnailAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);
    bgAnimated = new Animated.Value(0);
    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
        }).start();
    }
    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
        }).start();
    }
    render() {
        const { thumbnailSource, source, style, ...props } = this.props;
        return (
            <Animated.View
                style={{
                    flex: 1, backgroundColor: this.imageAnimated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#e1e4e8', 'transparent'],
                        extrapolate: 'clamp'    
                    })
                }}>
                <Animated.Image
                    {...props}
                    source={thumbnailSource}
                    style={[style, { opacity: this.thumbnailAnimated }]}
                    onLoad={this.handleThumbnailLoad}
                    blurRadius={1}
                />
                <Animated.Image
                    {...props}
                    source={source}
                    style={[styles.imageOverlay, style, { opacity: this.imageAnimated }]}
                    onLoad={this.onImageLoad}
                />
            </Animated.View>
        )
    }
}

export default ImageLoader;

const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    container: {
        flex: 1
    },
});