import React from 'react';
import { Dimensions, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { images } from '../resources';
import ListItemStyles from '../styles/ListItemStyle';

const { width, height } = Dimensions.get('window');

const CategoryListItem = props => (
    <TouchableOpacity id={props.item.id} key={props.index} style={{height: 170, width: width / 3, borderRadius: 10, marginHorizontal: 4, overflow: 'hidden'}} onPress={props.onPressItem} >
        <ImageBackground style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} source={images.image2}>
            <Text style={{ fontSize: 20, color: 'white' }}>BIRTHDAY</Text>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: '300' }}>DEALS</Text>
        </ImageBackground>
    </TouchableOpacity>
);

export default CategoryListItem;