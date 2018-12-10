import React from 'react';
import { Dimensions, View, Text, FlatList } from 'react-native';
import { fonts } from '../resources';
import CategoryListItem from './CategoryListItem';

const { width, height } = Dimensions.get('window');

const CategoryList = props => (
    <View style={{ flexGrow: 1, marginVertical: 16 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text style={{ fontSize: fonts.MEDIUM }}>{props.title}</Text>
        </View>
        <FlatList
            style={{ marginLeft: 8,  marginTop: 8 }}
            horizontal
            data={props.data}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <CategoryListItem item={item} index={index} {...props} />}
        />
    </View>
);

export default CategoryList;