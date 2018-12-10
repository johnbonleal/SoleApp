import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListItem from './ListItem';
import { fonts } from '../resources';

const { width, height } = Dimensions.get('window');
console.log('Height: ', height, 'Width: ', width);
const List = props => (
    <View style={{ height: 240, marginVertical: 16 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text style={{ fontSize: fonts.MEDIUM }}>{props.title}</Text>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={props.onPressAllItems} >
                <Text style={{ color: '#000', fontSize: fonts.EXTRA_SMALL, color: 'gray', marginRight: 8 }}>SEE ALL</Text>
                <Ionicons name={"ios-arrow-forward"} size={12} color={"#D8D8D8"} />
            </TouchableOpacity>
        </View>
        <FlatList
            style={{ marginLeft: 8 }}
            horizontal
            data={props.data}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => <ListItem key={index} {...props} />}
        />
    </View>
);

export default List;