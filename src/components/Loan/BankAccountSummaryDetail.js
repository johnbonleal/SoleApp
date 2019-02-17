import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';

const BankAccountSummaryDetail = ({
    icon,
    title,
    value,
    containerStyle
}) => (
        <View style={[{ flexDirection: 'row' }, containerStyle]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={icon} resizeMode={"contain"} />
            </View>
            <View>
                <Text style={styles.title}>{title}: </Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );

export default BankAccountSummaryDetail;

const styles = StyleSheet.create({
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
        fontSize: 18, 
        fontWeight: 'bold', 
        color: Constants.COLOR_DARK_GRAY
    }
});