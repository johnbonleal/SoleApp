import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import { NavigationBar } from '../../components';
import { Footer, Button } from '../../components/Login';
import { NavigationService } from '../../configs/NavigationService';

import { images } from '../../resources';

class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                />
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.splash_3} resizeMode={"cover"} />
                </View>
                <View style={{flex: 1}} />
                <View style={{flex: 2}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFFFFF'}}>WE DELIVER:</Text>
                    <Text style={{fontSize: 50, fontWeight: 'bold', color: '#FFFFFF'}}>EMPLOYEE HAPPINESS</Text>
                    <Text style={{fontSize: 20, color: '#FFFFFF'}}>Spreading happiness to over 110,000 exclusive community members with our perks and discounts, reloadable card, microfinancing solution, and web-based incentives and benefits tool.</Text>
                </View>
                <View style={styles.contentBottom}>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={[styles.button, { backgroundColor: '#F3721C' }]}
                            text={"Learn More"}
                        // onPress={()=>NavigationService.navigate('SignIn')}
                        />
                        <Button
                            style={[styles.button, { backgroundColor: '#FFFFFF' }]}
                            textStyle={{ color: '#F3721C' }}
                            text={"Contact Us"}
                        onPress={()=>NavigationService.navigate('ContactUs', { isAthenticated: false })}
                        />
                    </View>
                    <Footer style={{ position: 'relative', bottom: 0 }} />
                </View>
            </View>
        )
    }
}

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
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