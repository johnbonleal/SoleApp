import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { images, fonts } from '../resources';
import StarRating from './StarRating';
import ListItemStyles from '../styles/ListItemStyle';

const ratingObj = { ratings: 3 };

const ListItem = props => (
    <TouchableOpacity style={ListItemStyles.container} onPress={props.onPressItem} >
        <ImageBackground style={ListItemStyles.thumbnailContainer} source={images.sample}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: 8 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>10% OFF</Text>
            </View>
        </ImageBackground>
        <View style={ListItemStyles.bottomContainer} >
            <Text style={{ color: '#4A4A4A', fontSize: fonts.SMALL }}>Pancakes with Sauce</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#4A4A4A' }}>792 m • BGC • </Text>
                <StarRating ratingObj={ratingObj} />
            </View>
        </View>
    </TouchableOpacity>
)

export default ListItem;