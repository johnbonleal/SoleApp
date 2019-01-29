import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Footer, Button } from '../../components/Login';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import Swiper from 'react-native-swiper';
import { NavigationService, Constants } from '../../configs';

const Dot = ({style}) => (
    <View style={[{backgroundColor:'rgba(255,255,255,0.7)', width: 10, height: 10,borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}, style]} />
);

class OnBoarding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Swiper
                    loop
                    autoplay
                    autoplayTimeout={5}
                    paginationStyle={{ marginBottom: Constants.SCREEN_HEIGHT / 5 }}
                    dot={<Dot style={{backgroundColor: 'rgba(255,255,255,0.7)'}} />}
                    activeDot={<Dot style={{backgroundColor: '#F3721C'}} />}
                >
                    <FirstScreen />
                    <SecondScreen />
                </Swiper>
                <View style={styles.contentBottom}>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={[styles.button, {  backgroundColor: '#F3721C' }]}
                            textStyle={{color: '#FFFFFF'}}
                            text={"Join Venteny"}
                            onPress={()=>NavigationService.navigate('AboutUs')}
                        />
                        <Button
                            style={[styles.button, { backgroundColor: '#FFFFFF' }]}
                            textStyle={{color: '#F3721C'}}
                            text={"Log In"}
                            onPress={()=>NavigationService.navigate('SignIn')}
                        />
                    </View>
                    <Footer style={{ position: 'relative', bottom: 0 }} />
                </View>
            </View>
        )
    }
}

export default OnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        flex: 1,
        marginHorizontal: 8
    },
    contentBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 32,
        paddingHorizontal: 8
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 32
    }
});