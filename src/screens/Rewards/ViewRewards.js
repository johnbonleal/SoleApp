import React, { Component } from 'react';
import { Dimensions, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import CategoryModal from './CategoryModal';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 150;
const IMAGE_HEIGHT = 190;

const FullListItem = props => (
    <View style={{ padding: 16 }}>
        <TouchableOpacity style={{ paddingHorizontal: 8 }}>
            <ImageBackground source={images.image2} style={{ height: IMAGE_HEIGHT, width: '100%', justifyContent: 'flex-end', borderRadius: 8, overflow: 'hidden' }} >
                <View style={{ height: IMAGE_HEIGHT / 4, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', alignItems: 'center', padding: 8 }}>
                    <View style={{ height: 27, width: 27, borderRadius: 27 / 2, overflow: 'hidden', marginRight: fonts.SMALL }}>
                        <Image source={images.image2} style={{ flex: 1, height: null, width: null }} />
                    </View>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>10% OFF</Text>
                </View>
            </ImageBackground>
            <View style={{ marginTop: 12 }}>
                <Text style={{ fontWeight: 'bold' }}>Free Bamboo</Text>
                <Text style={{ fontWeight: 'bold' }}>1000<Text style={{ fontWeight: 'normal' }}>Points</Text></Text>
            </View>

        </TouchableOpacity>

    </View>
)

export default class ViewRewards extends Component {
    state = {
        isCategoryModalVisible: false,
        category: 'All'
    }
    _toggleCategoryModal = () => {
        this.setState({ isCategoryModalVisible: !this.state.isCategoryModalVisible });
    }
    _onPressBack = () => {
        NavigationService.back();
    }
    _onPressItem = (item) => {
        this.setState({ category: item });
    }
    _onPressModalClose = () => {
        this._toggleCategoryModal();
    }
    render() {
        const { category } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#F3F2F2' }}>
                <Header
                    headerLeft={images.back}
                    headerTitle={"Merchants"}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground style={{ height: HEADER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg} >
                        <View style={{ marginTop: HEADER_MAX_HEIGHT / 3, padding: 16 }}>
                            <TouchableOpacity style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8, padding: 8 }} onPress={this._toggleCategoryModal}>
                                <Text style={{ color: "#F5A623", fontSize: fonts.LARGE, fontWeight: 'bold' }}>{category}</Text>
                                <Ionicons name={"ios-arrow-down"} size={25} color={"#F5A623"} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <FlatList
                        style={{ marginTop: HEADER_MAX_HEIGHT + 16 }}
                        data={["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"]}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => <FullListItem item={item} index={index} onPressItem={this._onPressItem} />}
                    />
                </ScrollView>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 10, padding: 16 }}>
                    <Text>1,800 Available Points</Text>
                </View>
                <CategoryModal
                    isVisible={this.state.isCategoryModalVisible}
                    onPressItem={this._onPressItem}
                    onPressModalClose={this._onPressModalClose}
                />
            </View>
        )
    }
}