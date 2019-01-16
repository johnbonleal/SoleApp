import React, { Component } from 'react';
import { Modal, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from './Header';
import TabularList from './TabularList';
import { LocationData } from '../utils/Data';

import { images } from '../resources';

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
                            data={LocationData}
                            onPressItem={this._onPressItem}
                        />
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

export default LocationModal;