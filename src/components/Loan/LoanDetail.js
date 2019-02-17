import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';

var _ = require('lodash');

const LoanDetail = ({
    icon,
    title,
    value,
    containerStyle,
    valueTextStyle
}) => (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.titleContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={icon} resizeMode={"contain"} />
                </View>
                <Text style={styles.title}>{title}: </Text>
            </View>
            <View style={{ flex: 1 }}>
                {!_.isString(value) ? value :
                    <Text style={[styles.value, valueTextStyle]}>{value}</Text>
                }
            </View>
        </View>
    );

export default LoanDetail;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    imageContainer: {
        height: 20, 
        width: 20, 
        marginRight: 8
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    title: {
        fontSize: 15, 
        color: Constants.COLOR_LIGHT_GRAY
    },
    value: {
        fontSize: 15, 
        fontWeight: 'bold', 
        color: Constants.COLOR_DARK_GRAY
    }
})