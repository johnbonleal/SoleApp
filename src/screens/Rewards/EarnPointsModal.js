import React, { Component } from 'react';
import { Dimensions, Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Logo } from '../../components';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');
const BUTTON_HEIGHT = 56;

class EarnPointsModal extends Component {
    render() {
        const { isVisible, toggleIsVisible } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <View style={{ height: height * 0.9, width: width * 0.8, justifyContent: 'space-around', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 16 }}>
                        <TouchableOpacity style={{height: 14, width: 14}} onPress={toggleIsVisible}>
                            <Image style={{flex: 1, height: null, width: null, tintColor: '#FFA701'}} source={images.close} />
                        </TouchableOpacity>
                        <Logo image={images.earn_points} text={"How to earn points?"} />
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Step: 1 <Text style={{fontWeight: 'normal'}}>Select desired merchant</Text></Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Step: 2 <Text style={{fontWeight: 'normal'}}>Select "Scan QR Code" at the bottom part of the merchant page</Text></Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Step: 3 <Text style={{fontWeight: 'normal'}}>Merchant will show a QR Code</Text></Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Step: 4 <Text style={{fontWeight: 'normal'}}>Merchant will input the total amount transacted</Text></Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Step: 5 <Text style={{fontWeight: 'normal'}}>Earn points (2% of the total bill)</Text></Text>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Browse Perks & Discounts</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default EarnPointsModal;

const styles = StyleSheet.create({
    button: {
        height: BUTTON_HEIGHT,
        backgroundColor: '#FFA701',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: fonts.MEDIUM,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});