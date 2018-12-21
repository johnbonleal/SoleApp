import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images, fonts } from '../resources';

const ICON_HEIGHT = 30;

const TabularListItem = ({ item, index, onPressItem, withIcons, collapsible }) => (
    <View key={index} style={{ paddingHorizontal: 16, paddingBottom: 16 }} >
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={(() => onPressItem(item.title))}>
            <View style={{flexDirection: 'row'}}>
                {withIcons && <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, backgroundColor: '#F7F7F7', overflow: 'hidden', marginHorizontal: 8 }}>
                    <Image source={item.avatar} style={{ flex: 1, height: null, width: null }} />
                </View>}
                <Text style={{ fontSize: fonts.REGULAR, alignSelf: 'center', marginLeft: 8 }}>{item.title}</Text>
            </View>
            {collapsible && <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'black'} />}
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#D8D8D8', marginTop: 16 }} />
    </View>
);

export default TabularListItem;