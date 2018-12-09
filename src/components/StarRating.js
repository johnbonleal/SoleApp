import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

import { images } from '../resources';

type Props = {
    ratingObj: {
        ratings: number;
        views: number;
    }
};

export default class StarRating extends Component<Props> {
    render() {
        let ratingObj = this.props.ratingObj;

        let stars = [];

        for (var i = 1; i <= 5; i++) {
            let path = images.rating_filled;
            if (i > ratingObj.ratings) {
                path = images.rating_empty;
            }
            stars.push((<View key={i} style={styles.imageContainer} ><Image style={styles.image} source={path} /></View>));
        }
        return (
            <View style={styles.container}>
                { stars }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        width: 13,
        height: 13
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        tintColor: '#4A4A4A'
    }
});