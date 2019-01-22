import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { fonts } from '../resources';
import SquareListItem from './SquareListItem';

const SquareList = ({title, data, onPress, style}) => (
    <View style={[{ flexGrow: 1, marginVertical: 16 }, style]} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text style={{ fontSize: fonts.MEDIUM }}>{title}</Text>
        </View>
        <FlatList
            style={{ marginLeft: 8,  marginTop: 8 }}
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <SquareListItem item={item} index={index} />}
        />
    </View>
);

export default SquareList;