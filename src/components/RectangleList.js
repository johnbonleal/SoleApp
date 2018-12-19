import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RectangleListItem from './RectangleListItem';
import { fonts } from '../resources';

const RectangleList = ({title, isCollapsible, onPressAll, onPressItem, data, withIcon}) => (
    <View style={{ height: 240, marginVertical: 16 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            {title && <Text style={{ fontSize: fonts.MEDIUM }}>{title}</Text>}
            {isCollapsible && <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={onPressAll} >
                <Text style={{ color: '#000', fontSize: fonts.EXTRA_SMALL, color: 'gray', marginRight: 8 }}>SEE ALL</Text>
                <Ionicons name={"ios-arrow-forward"} size={12} color={"#D8D8D8"} />
            </TouchableOpacity>}
        </View>
        <FlatList
            style={{ marginLeft: 8 }}
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => <RectangleListItem key={index} onPressItem={onPressItem} withIcon={withIcon} />}
        />
    </View>
);

export default RectangleList;