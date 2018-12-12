import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';

export default class Dashboard extends Component {
    _onPressEarnedPoints = () => {
        NavigationService.navigate('Points');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', elevation: 2, padding: 16, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: fonts.LARGE }}>Points</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this._onPressEarnedPoints}>
                        <Text style={{ fontSize: fonts.LARGE, marginRight: 16 }}>1,800</Text>
                        <Ionicons name={"ios-arrow-forward"} size={20} color={"#D8D8D8"} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#D8D8D8', alignSelf: 'center', marginVertical: 12 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.card} />
                        </View>
                        <Text style={{fontSize: fonts.EXTRA_SMALL}}>CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.scan_qr} />
                        </View>
                        <Text style={{fontSize: fonts.EXTRA_SMALL}}>SCAN QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.rewards} />
                        </View>
                        <Text style={{fontSize: fonts.EXTRA_SMALL}}>REWARDS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}