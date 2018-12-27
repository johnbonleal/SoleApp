import React from 'react';
import { Modal, View, Image, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from '../../components';

import { images } from '../../resources';

const ScanQRModal = ({ isScanQrVisible, toggleScanQrModal, onPressScanQrProceed }) => (
    <Modal
        animationType="fade"
        transparent={false}
        visible={isScanQrVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1 }}>
            <Header
                headerLeft={images.close}
                onPressHeaderLeft={toggleScanQrModal}
            />
            <ImageBackground style={{ flex: 1, ...StyleSheet.absoluteFill, justifyContent: 'flex-end' }} source={images.qr_background} >
                <View style={{ height: '95%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '75%', width: '70%', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ height: 240, width: 240 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.mobile} resizeMode={'contain'} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' }}>Scan QR at partner stores to view offers</Text>
                        <TouchableOpacity style={{ height: 56, width: '60%', paddingVertical: 8, borderRadius: 28, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }} onPress={onPressScanQrProceed}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFAA00' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    </Modal>
)

export default ScanQRModal;