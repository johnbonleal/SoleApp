import React, { Component } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import BannerModal from './BannerModal';
import LogoModal from './LogoModal';

import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 200;
const ICON_HEIGHT = 35;

class ViewReward extends Component {
    state = {
        isBannerModalVisible: false,
        isLogoModalVisible: false
    }
    _onPressBack = () => {
        NavigationService.back();
    }
    _toggleBannerModal = () => {
        this.setState({ isBannerModalVisible: !this.state.isBannerModalVisible });
    }
    _toggleLogoModal = () => {
        this.setState({ isLogoModalVisible: !this.state.isLogoModalVisible });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Header
                    headerLeft={images.back}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ScrollView>
                    <TouchableOpacity onPress={this._toggleBannerModal}>
                        <ImageBackground style={{ height: HEADER_MAX_HEIGHT, width: '100%' }} source={images.header_bg} />
                    </TouchableOpacity>
                    <View style={{ padding: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8, borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', padding: 8 }}>
                                <TouchableOpacity style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginRight: fonts.SMALL }} onPress={this._toggleLogoModal}>
                                    <Image source={images.image2} style={{ flex: 1, height: null, width: null }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: fonts.MEDIUM }}>Bamboo House</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity style={{ paddingHorizontal: 24, paddingVertical: 3, borderRadius: 20, borderWidth: 1, borderColor: '#FFA701', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFA701', fontSize: fonts.SMALL }}>BRANCHES</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginVertical: 8, alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: fonts.LARGE, textAlign: 'center' }}>Free Premium Bamboo</Text>
                            <Text style={{ fontSize: 15, color: '#9B9B9B', textAlign: 'center', marginBottom: 5 }}>1,000 points</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#FFA701', borderRadius: 5, paddingHorizontal: 16 }}>
                                    <Text style={{ color: 'white', fontSize: fonts.SMALL }}>5 left</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Get a <Text style={{ fontWeight: 'bold' }}>Free Premium Bamboo </Text>at Bamboo House using your V-Rewards points!</Text>
                        </View>
                        <View style={{ borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}>
                            <View style={{ marginVertical: 8 }}>
                                <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', marginBottom: 5 }}>Terms & Conditions</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>• Libero tempore, cum soluta nobis</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>• Soluta nobis est eligendi optio</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>• Optio cumque nihil impedit quo minus id</Text>
                            </View>
                            <View style={{ marginVertical: 8 }}>
                                <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', marginBottom: 5 }}>About Bamboo House</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Bamboo House has ibero tempore soluta.</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', fontWeight: 'bold', marginVertical: 5 }}>Contact Info</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ height: 20, width: 20, marginRight: 8 }}>
                                        <Image style={{ flex: 1, height: null, width: null, tintColor: '#9B9B9B' }} source={images.phone} />
                                    </View>
                                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>0991231234</Text>
                                </View>
                                <Ionicons name={"ios-arrow-forward"} size={20} color={"#9B9B9B"} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                            <View style={{ height: 20, width: 20, marginRight: 8 }}>
                                <Image style={{ flex: 1, height: null, width: null, tintColor: '#9B9B9B' }} source={images.location} />
                            </View>
                            <View>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', fontWeight: 'bold' }}>Bamboo House Paranaque</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Unit 2348 Town Center</Text>
                                <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Paranaque, Metro Manila</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', elevation: 10, padding: 16 }}>
                        <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 5, paddingVertical: 16 }}>
                            <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <BannerModal isBannerModalVisible={this.state.isBannerModalVisible} toggleBannerModal={this._toggleBannerModal} />
                <LogoModal isLogoModalVisible={this.state.isLogoModalVisible} toggleLogoModal={this._toggleLogoModal} />
            </View>
        )
    }
}

export default ViewReward;