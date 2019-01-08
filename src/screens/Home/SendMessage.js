import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { fonts } from '../../resources';

class SendMessage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: '#4A4A4A' }}>Send us a message</Text>
                <View style={{ flex: 1, marginVertical: 5 }}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Write a message"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16, paddingHorizontal: 24 }}>
                        <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Send</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default SendMessage;