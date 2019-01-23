import React, { PureComponent } from 'react';
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

class StarRating extends PureComponent<Props> {
    render() {
        const { style, ratingObj } = this.props;
        let ratingObject = ratingObj;

        let stars = [];

        for (var i = 1; i <= 5; i++) {
            let path = images.rating_filled;
            if (i > ratingObject.ratings) {
                path = images.rating_empty;
            }
            stars.push((<View key={i} style={styles.imageContainer} ><Image style={styles.image} source={path} /></View>));
        }
        return (
            <View style={[styles.container, style]}>
                { stars }
            </View>
        );
    }
}

export default StarRating;

const styles = StyleSheet.create({
    container: {
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
        tintColor: '#FFA701'
    }
});