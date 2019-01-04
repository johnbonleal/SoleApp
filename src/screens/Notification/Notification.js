import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Modal, ImageBackground, TouchableOpacity } from 'react-native';
import { Header, TabularList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';

import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 90;
const HEADER_BACKGROUND_HEIGHT = 140;
const IMAGE_CENTER_HEIGHT = 70;

const categories = [
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email },
    { title: "Message from Venteny", description: "Enjoy amazing offers!", avatar: images.email }
];

class Notification extends Component {
    state = {
        isNotificationVisible: false
    }
    _onPressBack = () => {
        NavigationService.back();
    }
    _onPressItem = () => {
        this._toggleNotificationModal();
    }
    _toggleNotificationModal = () => {
        this.setState({ isNotificationVisible: !this.state.isNotificationVisible });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <ScrollView>
                    <Header
                        headerTitle={"Notifications"}
                        headerStyle={{ zIndex: 10 }}
                        headerLeft={images.close}
                        onPressHeaderLeft={this._onPressBack}
                        headerRight={images.trash}
                        headerRightStyle={{ tintColor: '#FFFFFF' }}
                    />
                    <View style={{ height: HEADER_MAX_HEIGHT }} >
                        <Image style={{ flex: 1, height: null, width: null }} source={images.header_bg} />
                    </View>
                    <View style={{ padding: 16 }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 8, paddingVertical: 16 }}>
                            <TabularList
                                data={categories}
                                leftIconContainerStyle={{ backgroundColor: '#F5A623', height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
                                leftIconStyle={{ height: 14, width: 14, borderRadius: 0, backgroundColor: 'transparent' }}
                                descriptionStyle={{ fontSize: 14, color: '#9B9B9B' }}
                                withIcons
                                collapsible
                                onPressItem={this._onPressItem}
                            />
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isNotificationVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ flex: 1 }}>
                        <Header
                            headerLeft={images.back}
                            onPressHeaderLeft={this._toggleNotificationModal}
                        />
                        <ImageBackground style={{ height: HEADER_BACKGROUND_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.image2} />
                        <View style={{ height: IMAGE_CENTER_HEIGHT, width: IMAGE_CENTER_HEIGHT, backgroundColor: '#FFA701', borderRadius: IMAGE_CENTER_HEIGHT / 2, borderWidth: 3, borderColor: '#FFFFFF', alignSelf: 'center', marginTop: HEADER_BACKGROUND_HEIGHT - (IMAGE_CENTER_HEIGHT / 2) }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.close} />
                        </View>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: fonts.MEDIUM, textAlign: 'center' }}>Message from Venteny</Text>
                            <View style={{marginVertical: 20, marginHorizontal: 16}}>
                                <Text style={{ fontSize: 25, color: '#4A4A4A', marginBottom: 5 }}>Enjoy Amazing Offers</Text>
                                <Text style={{ fontSize: 15, color: '#9B9B9B' }}>Dec 07 2018 13:43 PM</Text>
                            </View>
                            <Text style={{ fontSize: 18, color: '#4A4A4A', marginHorizontal: 16 }}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', justifyContent: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 10, padding: 16, shadowOffset: {width: 0, height: 1}, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                            <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16 }}>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>CHECK NEW OFFERS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Notification;