import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Footer extends Component {
    render() {
        const { style } = this.props;
        return (
            <View style={[styles.footer, style]}>
                <Text style={styles.footerTitle}>NOT READY TO SIGN UP?</Text>
                <Text style={styles.footerDescription}>EXPLORE NOW</Text>
            </View>
        )
    }
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 32
    },
    footerTitle: {
        fontSize: 12,
        color: '#FFDA9E',
        marginRight: 16
    },
    footerDescription: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});