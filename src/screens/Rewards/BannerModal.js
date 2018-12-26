import React, { Component } from 'react';
import { Dimensions, Modal, View, Text, Image } from 'react-native';
import { Header } from '../../components';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const Gallery = ({isActive}) => (
    <View style={{ height: 50, width: 50, marginHorizontal: 6 }}>
        <Image style={{ flex: 1, height: null, width: null, backgroundColor: 'rgba(0,0,0,0.5)' }} source={images.image2} />
    </View>
);

class BannerModal extends Component {
    state = {
        isActive: false
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={this.props.isBannerModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex: 1, backgroundColor: '#000000' }}>
                    <Header headerLeft={images.close} onPressHeaderLeft={this.props.toggleBannerModal} headerStyle={{ position: 'relative' }} />
                    <Text style={{ fontSize: fonts.REGULAR, color: '#FFFFFF', textAlign: 'right', marginRight: 16 }}>Bamboo House</Text>
                    <View style={{ height: height * 0.6, backgroundColor: '#FFFFFF', marginVertical: 8 }}>
                        <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 8 }}>
                        {sampleData.length > 0 && sampleData.map((item, index) => {
                            if (index < sampleData.length - 1) {
                                return <Gallery key={index} />
                            }
                        })}
                    </View>
                </View>
            </Modal>
        )
    }
}

export default BannerModal;