import React, { Component } from 'react';
import { Modal, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from './Header';
import TabularList from './TabularList';

import { images } from '../resources';

const APP_HEADER_HEIGHT = 90;

const categories = [
    { title: "All", avatar: images.image2 },
    { title: "Accessories & Apparels", avatar: images.accessories_and_apparels_light },
    { title: "Beauty & Wellness", avatar: images.beauty_and_wellness_light },
    { title: "Electronics & Appliances", avatar: images.electronics_and_appliances_light },
    { title: "Fitness & Sports", avatar: images.fitness_and_sports_light },
    { title: "Hotels & Resorts", avatar: images.hotels_and_resorts_light },
    { title: "Medical", avatar: images.medical_light },
    { title: "Paymaya / VISA", avatar: images.paymaya_light },
    { title: "Restaurants & Bars", avatar: images.restaurants_and_bars_light },
    { title: "Services", avatar: images.services_light },
    { title: "Things To Do", avatar: images.things_to_do_light },
    { title: "Travel", avatar: images.travel_light }
];

class CategoryModal extends Component {
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
                        headerTitle={"Category"}
                        onPressHeaderLeft={this.props.onPressModalClose}
                    />
                    <ImageBackground style={{ height: APP_HEADER_HEIGHT, width: '100%' }} source={images.header_bg} />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <TabularList
                            style={{ marginTop: 16 }}
                            data={categories}
                            withIcons
                            onPressItem={this._onPressItem}
                        />
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

export default CategoryModal;