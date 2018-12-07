import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { images } from '../../resources';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={{ flex: 0, backgroundColor: '#FFF', padding: 16, elevation: 3, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Earned Points</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 5 }}>0.00</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', alignSelf: 'center', marginVertical: 16 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                        <Text>My Card</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                        <Text>QR Code</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 45, width: 45 }} source={images.app_icon}></Image>
                        <Text>V-Rewards</Text>
                    </View>
                </View>
            </View>
        )
    }
}