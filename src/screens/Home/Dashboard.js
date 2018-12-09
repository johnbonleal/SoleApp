import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { images } from '../../resources';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', elevation: 2, padding: 16, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Points</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 16 }}>1,800</Text>
                        <Ionicons name={"ios-arrow-forward"} size={20} color={"#D8D8D8"} />
                    </View>

                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#D8D8D8', alignSelf: 'center', marginVertical: 12 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.card} />
                        </View>
                        <Text style={{fontSize: 13}}>CARD</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.scan_qr} />
                        </View>
                        <Text style={{fontSize: 13}}>SCAN QR</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 54, width: 54, marginBottom: 8 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.rewards} />
                        </View>
                        <Text style={{fontSize: 13}}>REWARDS</Text>
                    </View>
                </View>
            </View>
        )
    }
}