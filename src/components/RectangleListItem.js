import React from 'react';
import { TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { NavigationService } from '../configs/NavigationService';
import { images, fonts } from '../resources';
import StarRating from './StarRating';
import ListItemStyles from '../styles/ListItemStyle';

const ratingObj = { ratings: 3 };

const RectangleListItem = ({ item, withIcon, onPressItem }) => (
    <TouchableOpacity style={ListItemStyles.container} onPress={()=>NavigationService.navigate('MerchantView')} >
        <ImageBackground style={ListItemStyles.thumbnailContainer} source={images.sample}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', alignItems: 'center', padding: 8 }}>
                {withIcon && <View style={{ height: 27, width: 27, borderRadius: 27 / 2, overflow: 'hidden', marginRight: fonts.SMALL }}>
                    <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                </View>}
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>10% OFF</Text>
            </View>
        </ImageBackground>
        <View style={ListItemStyles.bottomContainer}>
            <Text style={{ color: '#4A4A4A', fontSize: fonts.SMALL }}>Pancakes with Sauce</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#4A4A4A' }}>792 m • BGC • </Text>
                <StarRating ratingObj={ratingObj} />
            </View>
        </View>
    </TouchableOpacity>
)

export default RectangleListItem;