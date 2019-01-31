import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { Button, Footer, FormField } from '../../components/Login';
import { NavigationService, Constants } from '../../configs';
import { LoginImageData } from '../../utils/Data';
import { images } from '../../resources';
import Carousel from '../../utils/Carousel';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Carousel style={{ ...StyleSheet.absoluteFill }} data={LoginImageData} imageGradient={images.login_gradient} />
                <View style={styles.content}>
                    <View style={{ height: Constants.SCREEN_HEIGHT / 9, width: Constants.SCREEN_WIDTH * 0.7 }}>
                        <Image style={styles.image} source={images.venteny_logo} resizeMode={'contain'} />
                    </View>
                    <View style={{width: '100%'}}>
                        <FormField icon={images.login_username} placeholder={"Membership ID Number"} />
                        <FormField icon={images.login_password} placeholder={"Password"} />
                        <Button
                            style={styles.button}
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
    content: {
        flex: 0.6, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    button: {
        backgroundColor: '#F3721C', 
        marginVertical: 12
    }
});