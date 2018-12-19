import React, { Component } from 'react';
import { Modal, View, ScrollView, ImageBackground, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components';

import { images, fonts } from '../../resources';

const ICON_HEIGHT = 24;
const APP_HEADER_HEIGHT = 56;

const CategoryListItem = ({ item, onPressItem }) => (
    <TouchableOpacity style={{ paddingHorizontal: 16, paddingBottom: 16 }} onPress={(() => onPressItem(item))}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginHorizontal: 8 }}>
                <Image source={images.image2} style={{ flex: 1, height: null, width: null }} />
            </View>
            <Text style={{ fontSize: fonts.REGULAR, marginLeft: 8 }}>{item}</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#D8D8D8', marginTop: 16 }} />
    </TouchableOpacity>
)

class CategoryModal extends Component {
    _onPressItem = item => {
        this.props.onPressItem(item);
        this.props.onPressModalClose();
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex: 1 }}>
                    <Header
                        headerLeft={images.close}
                        headerTitle={"Category"}
                        onPressHeaderLeft={this.props.onPressModalClose}
                    />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <ImageBackground style={{ height: APP_HEADER_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg} />
                        <FlatList
                            style={{ marginTop: APP_HEADER_HEIGHT + 16 }}
                            data={["All", "Accessories & Apparels", "Beauty & Wellness", "Electronics & Appliances", "Fitness & Sports", "Hotels & Resorts", "Medical", "Paymaya / VISA", "Restaurants & Bars", "Services", "Things To Do", "Travel"]}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => <CategoryListItem item={item} index={index} onPressItem={this._onPressItem} />}
                        />
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

export default CategoryModal;