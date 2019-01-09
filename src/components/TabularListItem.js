import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images, fonts } from '../resources';

const ICON_HEIGHT = 30;

const TabularListItem = ({ item, index, onPressItem, withIcons, collapsible, leftIconContainerStyle, leftIconStyle, rightIconStyle, titleStyle, descriptionStyle, length }) => (
    <View key={index} style={{ paddingHorizontal: 16, paddingBottom: 16 }} >
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={(() => onPressItem(item.title))}>
            <View style={{ flexDirection: 'row' }}>
                {withIcons && <View style={leftIconContainerStyle}>
                    <View style={[{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, backgroundColor: '#F7F7F7', overflow: 'hidden', marginHorizontal: 8 }, leftIconStyle]}>
                        <Image source={item.avatar} style={{ flex: 1, height: null, width: null }} />
                    </View>
                </View>}
                <View style={{ alignSelf: 'center', marginLeft: 8 }}>
                    <Text style={[{ fontSize: fonts.REGULAR, paddingVertical: 0 }, titleStyle]}>{item.title}</Text>
                    {item.description && <Text style={[{ fontSize: fonts.REGULAR, paddingVertical: 0 }, descriptionStyle]}>{item.description}</Text>}
                </View>
            </View>
            {collapsible && <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'#000000'} />}
        </TouchableOpacity>
        {index < length - 1 && <View style={[{ height: 1, backgroundColor: '#D8D8D8', marginTop: 16 }, rightIconStyle]} />}
    </View>
);

export default TabularListItem;