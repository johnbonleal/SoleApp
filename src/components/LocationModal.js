import React, { Component } from 'react';
import { Modal, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from './Header';
import TabularList from './TabularList';

import { images } from '../resources';

const APP_HEADER_HEIGHT = 90;

const locations = [
    { title: "Caloocan City" },
    { title: "Quezon City" },
    { title: "Mandaluyong City" },
    { title: "Muntinlupa City" },
    { title: "Taguig City" },
    { title: "Pasig City" },
    { title: "Pasay City" },
    { title: "Paranaque City" }
];

class LocationModal extends Component {
    _onPressItem = item => {
        this.props.onPressItem(item);
        this.props.onPressModalClose();
    }
    _onPressCategoryItem = (item) => {
        this.setState({ category: item });
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <StatusBar
                        backgroundColor={'transparent'}
                        translucent
                    />
                    <Header
                        headerLeft={images.close}
                        headerTitle={"Location"}
                        onPressHeaderLeft={this.props.onPressModalClose}
                    />
                    <ImageBackground style={{ height: APP_HEADER_HEIGHT, width: '100%' }} source={images.header_bg} />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <TabularList
                            style={{ marginTop: 16 }}
                            data={locations}
                            onPressItem={this._onPressItem}
                        />
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

export default LocationModal;