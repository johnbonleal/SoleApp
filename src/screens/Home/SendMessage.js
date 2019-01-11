import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { fonts } from '../../resources';
import ContactOption from './ContactOption';

class SendMessage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ContactOption image={images.contact_email} buttonTitle={"Send us a message"} />
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