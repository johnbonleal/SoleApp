import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Constants, NavigationService } from '../../configs';
import { images } from '../../resources';

class OnBoarding extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                    <TouchableOpacity style={styles.button} onPress={()=>NavigationService.navigate('HomeAvaila')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    content: {
        height: '85%',
        width: '90%',
        paddingVertical: 16,
        justifyContent: 'space-between'
    },
    welcome: {
        height: '60%', 
        justifyContent: 'center'
    },
    text1: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    text2: {
        fontSize: 60, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    text3: {
        fontSize: 20, 
        color: '#FFFFFF', 
        marginTop: 12
    },
    button: {
        height: Constants.BUTTON_HEIGHT, 
        width: '100%', 
        borderRadius: Constants.BUTTON_HEIGHT / 2, 
        backgroundColor: '#FFFFFF', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#4BBBAE'
    }
})