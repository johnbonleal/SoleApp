import React, { Component } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Header, Branch } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import BannerModal from './BannerModal';
import LogoModal from './LogoModal';

import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 200;
const ICON_HEIGHT = 35;
const LOGO_HEIGHT = 60;
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];
class ViewReward extends Component {
    state = {
        isBannerModalVisible: false,
        isLogoModalVisible: false,
        current: 'Rewards'
    }
    _onPressBack = () => {
        if (this.state.current === 'Rewards') {
            NavigationService.back();
        } else {
            this.setState({ current: 'Rewards' });
        }
    }
    _toggleBannerModal = () => {
        if (this.state.current === 'Rewards') {
            this.setState({ isBannerModalVisible: !this.state.isBannerModalVisible });
        }
    }
    _toggleLogoModal = () => {
        this.setState({ isLogoModalVisible: !this.state.isLogoModalVisible });
    }
    _toggleBranches = () => {
        this.setState({ current: 'Branches' });
    }
    _showLocation = () => {

    }
    _renderRewards = () => (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}>
                    <TouchableOpacity style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginRight: fonts.SMALL }} onPress={this._toggleLogoModal}>
                        <Image source={images.image2} style={{ flex: 1, height: null, width: null }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: fonts.MEDIUM }}>Bamboo House</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity style={{ paddingHorizontal: 24, paddingVertical: 5, borderRadius: 20, borderWidth: 1, borderColor: '#FFA701', justifyContent: 'center' }} onPress={this._toggleBranches}>
                        <Text style={{ color: '#FFA701', fontSize: fonts.SMALL }}>BRANCHES</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: 8, paddingBottom: 16, alignItems: 'center', justifyContent: 'space-evenly' }}>
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
            <View style={{ borderBottomColor: '#D8D8D8', borderBottomWidth: 1, paddingBottom: 16 }}>
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
                <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                    <View style={{ height: 20, width: 20, marginRight: 8 }}>
                        <Image style={{ flex: 1, height: null, width: null, tintColor: '#9B9B9B' }} source={images.phone} />
                    </View>
                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>0991231234</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 8, paddingBottom: 16 }}>
                <View style={{ height: 20, width: 20, marginRight: 8 }}>
                    <Image style={{ flex: 1, height: null, width: null, tintColor: '#9B9B9B' }} source={images.location_dark} />
                </View>
                <View>
                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', fontWeight: 'bold' }}>Bamboo House Paranaque</Text>
                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Unit 2348 Town Center</Text>
                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B' }}>Paranaque, Metro Manila</Text>
                </View>
            </View>
        </View>
    )
    _renderBranches = () => (
        <Branch
            data={sampleData}
            onPressItem={this._showLocation}
        />
    )

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={this._toggleBannerModal}>
                        <ImageBackground style={{ height: HEADER_MAX_HEIGHT, width: '100%' }} source={images.header_bg} >
                            {this.state.current !== 'Rewards' &&
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ height: LOGO_HEIGHT, width: LOGO_HEIGHT, borderRadius: LOGO_HEIGHT / 2, overflow: 'hidden' }} onPress={this._toggleLogoModal}>
                                        <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 16 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: fonts.LARGE, textAlign: 'center', color: '#FFFFFF' }}>Free Premium Bamboo</Text>
                                        <Text style={{ fontSize: 15, color: '#9B9B9B', textAlign: 'center', color: '#FFFFFF' }}>Bamboo House • 1,000 points</Text>
                                    </View>
                                </View>
                            }
                            <Header
                                headerLeft={images.back}
                                onPressHeaderLeft={this._onPressBack}
                            />
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        {(this.state.current === 'Rewards') ? this._renderRewards() : this._renderBranches()}
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', elevation: 10, padding: 16, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16 }}>
                        <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Redeem</Text>
                    </TouchableOpacity>
                </View>
                <BannerModal isBannerModalVisible={this.state.isBannerModalVisible} toggleBannerModal={this._toggleBannerModal} />
                <LogoModal isLogoModalVisible={this.state.isLogoModalVisible} toggleLogoModal={this._toggleLogoModal} />
            </View>
        )
    }
}

export default ViewReward;