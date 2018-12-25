import React, { Component } from 'react';
import { Dimensions, Modal, View, Text } from 'react-native';
import { Header } from '../../components';

import { images, fonts } from '../../resources';
const { width, height } = Dimensions.get('window');

const BannerModal = ({isBannerModalVisible, toggleBannerModal }) => (
    <Modal
        animationType="fade"
        transparent={false}
        visible={isBannerModalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <Header headerLeft={images.close} onPressHeaderLeft={toggleBannerModal} headerStyle={{ position: 'relative' }} />
            <Text style={{ fontSize: fonts.REGULAR, color: '#FFFFFF', textAlign: 'right', marginRight: 16 }}>Bamboo House</Text>
            <View style={{ height: height * 0.7, backgroundColor: '#FFFFFF' }}>
            </View>
        </View>
    </Modal>
);

export default BannerModal;