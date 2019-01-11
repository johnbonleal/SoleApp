import React, { Component } from 'react';
import { Modal, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from './Header';
import TabularList from './TabularList';

import { images } from '../resources';

const APP_HEADER_HEIGHT = 90;

const locations = [
    { id: 1, title: "Caloocan City" },
    { id: 2, title: "Quezon City" },
    { id: 3, title: "Mandaluyong City" },
    { id: 4, title: "Muntinlupa City" },
    { id: 5, title: "Taguig City" },
    { id: 6, title: "Pasig City" },
    { id: 7, title: "Pasay City" },
    { id: 8, title: "Paranaque City" }
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
                        headerStyle={{position: 'relative'}}
                        onPressHeaderLeft={this.props.onPressModalClose}
                        withBackground
                    />
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