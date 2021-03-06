import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { NavigationService } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

class OnBoarding extends Component {
    render() {
        return (
            <View style={[styles.container, styles.centered]}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.availa_bg} />
                </View>
                <View style={styles.content}>
                    <View style={styles.welcome}>
                        <Text style={styles.text1}>Welcome to</Text>
                        <Text style={styles.text2}>Availa</Text>
                        <Text style={styles.text3}>
                            Borrow as much as ₱30,000.00 payable up to 90 days, exclusive to our corporate partners!
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => NavigationService.navigate('HomeAvaila')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default OnBoarding;