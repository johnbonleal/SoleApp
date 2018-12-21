import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircleListItem from './CircleListItem';
import { fonts } from '../resources';

const CircleList = ({title, onPressItem, isCollapsible, data, listStyle, titleStyle, style}) => (
    <View style={style} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            {title && <Text style={[{ fontSize: fonts.MEDIUM }, titleStyle]}>{title}</Text>}
            {isCollapsible && <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={onPressItem} >
                <Text style={{ color: '#000', fontSize: fonts.TINY, color: 'gray', marginRight: 8 }}>SEE ALL</Text>
                <Ionicons name={"ios-arrow-forward"} size={10} color={"#D8D8D8"} />
            </TouchableOpacity>}
        </View>
        <FlatList
            style={listStyle}
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <CircleListItem item={item} index={index} onPressItem={onPressItem}/>}
        />
    </View>
);

export default CircleList;