import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, TextInput, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { FormField, Button, Footer } from '../../components/Login';
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
                    <View style={{width: '100%'}}>
                        <FormField icon={images.login_username} placeholder={"Membership ID Number"} />
                        <FormField icon={images.login_password} placeholder={"Password"} />
                        {/* <Button text={"Log In"}  /> */}
                        <Button
                            style={{ backgroundColor: '#F3721C', marginVertical: 12 }}
                            text={"Log In"}
                            onPress={() => NavigationService.navigate('AppDrawer')}
                        />
                    </View>
                </View>
                <Footer />
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

});