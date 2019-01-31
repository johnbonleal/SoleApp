import React from 'react';
import { Dimensions, Modal, View, Text, Image } from 'react-native';
import { NavigationBar } from '../../components';

import { images, fonts } from '../../resources';
const { width, height } = Dimensions.get('window');

const LogoModal = ({isLogoModalVisible, toggleLogoModal }) => (
    <Modal
        animationType="fade"
        transparent={false}
        visible={isLogoModalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <NavigationBar headerLeft={images.close} onPressHeaderLeft={toggleLogoModal} headerStyle={{ position: 'relative' }} />
            <Text style={{ fontSize: fonts.REGULAR, color: '#FFFFFF', textAlign: 'right', marginRight: 16 }}>Bamboo Logo</Text>
            <View style={{ height: height * 0.7, backgroundColor: '#FFFFFF', marginVertical: 8 }}>
                <Image style={{flex: 1, height: null, width: null}} source={images.image2} />
            </View>
        </View>
    </Modal>
);

export default LogoModal;