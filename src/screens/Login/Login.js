import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, TextInput, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { FormField, Button } from '../../components/Login/';
import { NavigationService } from '../../configs/NavigationService';
import { LoginImageData } from '../../utils/Data';
import { images } from '../../resources';
import Carousel from '../../utils/Carousel';

const { width, height } = Dimensions.get('window');

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Carousel style={{ ...StyleSheet.absoluteFill }} data={LoginImageData} imageGradient={images.login_gradient} />
                <View style={{ flex: 0.6, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 }}>
                    <View style={{ height: height / 9, width: width * 0.7 }}>
                        <Image style={styles.image} source={images.venteny_logo} resizeMode={'contain'} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <FormField icon={images.login_username} placeholder={"Membership ID Number"} />
                        <FormField icon={images.login_password} placeholder={"Password"} />
                        <Button onPress={() => NavigationService.navigate('AppDrawer')} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerTitle}>NOT READY TO SIGN UP?</Text>
                    <Text style={styles.footerDescription}>EXPLORE NOW</Text>
                </View>
            </View >
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
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