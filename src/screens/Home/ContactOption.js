import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const ICON_HEIGHT = 230;

const ContactOption = ({ image, buttonTitle, onPressItem }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT }}>
            <Image style={{ flex: 1, height: null, width: null }} source={image} />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#FFB000', borderRadius: 20, paddingVertical: 3, paddingHorizontal: 12 }} onPress={onPressItem} >
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#FFFFFF' }}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>
);

export default ContactOption;