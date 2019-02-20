import React from 'react';
import { TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { NavigationService } from '../configs/NavigationService';
import { images } from '../resources';
import StarRating from './StarRating';
import ListItemStyles from '../styles/ListItemStyle';

const ratingObj = { ratings: 3 };

const RectangleListItem = ({ item, withIcon, onPressItem }) => {
    const { attributes } = item;
    return (
        <TouchableOpacity style={ListItemStyles.container} onPress={() => NavigationService.navigate('MerchantView', item)} >
            <ImageBackground style={ListItemStyles.thumbnailContainer} source={{ uri: attributes && attributes.merchant_banner.medium.url }}>
                <View style={ListItemStyles.dealContainer}>
                    {withIcon && <View style={styles.iconContainer}>
                        <Image style={ListItemStyles.image} source={images.image2} />
                    </View>}
                    <Text style={ListItemStyles.deal}>{attributes && attributes.best_deal}</Text>
                </View>
            </ImageBackground>
            <View style={ListItemStyles.bottomContainer}>
                <Text style={ListItemStyles.merchantName}>{attributes && attributes.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={ListItemStyles.subtitle}>{`${attributes && attributes.category} • BGC • `}</Text>
                    <StarRating ratingObj={ratingObj} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RectangleListItem;