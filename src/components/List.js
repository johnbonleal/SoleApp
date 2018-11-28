import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';

const { width, height } = Dimensions.get('window');

const List = props => (
    <View style={{ height: height / 3 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={props.onPressAllItems} >
                <Text style={{ color: 'gray', fontSize: 16, marginRight: 8 }}>See all</Text>
                <Ionicons name={"ios-arrow-forward"} size={18} color={"gray"} />
            </TouchableOpacity>
        </View>
        <FlatList
            style={{ marginLeft: 16 }}
            horizontal
            data={props.data}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <ListItem item={item} index={index} {...props} />}
        />
    </View>
);

export default List;