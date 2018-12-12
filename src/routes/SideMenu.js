import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationService } from '../configs/NavigationService';

import { images, fonts } from '../resources';

const HEADER_MAX_HEIGHT = 200;

export default class SideMenu extends Component {
    _onPressProfileImage = () => {
        NavigationService.closeDrawer();
        NavigationService.navigate('Profile');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ImageBackground style={{ height: HEADER_MAX_HEIGHT, padding: 16, justifyContent: 'space-around', alignItems: 'flex-start' }} source={images.header_bg} >
                    <TouchableOpacity style={{ height: 80, width: 80, borderRadius: 40, overflow: 'hidden' }} onPress={this._onPressProfileImage}>
                        <Image style={{ height: null, width: null, flex: 1 }} source={images.profile} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: 'white' }}>John Leal</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: fonts.SMALL, color: 'white', marginRight: 5 }}>1,800 Available Points</Text>
                            <Ionicons name={"ios-arrow-forward"} size={13} color={'white'} />
                        </View>
                    </View>
                </ImageBackground>
                <DrawerItems {...this.props} />
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                    <View style={{ height: 20, width: 20, marginHorizontal: 16 }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} source={images.logout} />
                    </View>
                    <Text style={{ color: 'black', marginLeft: 16 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}