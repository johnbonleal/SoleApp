import React from 'react';
import { TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { NavigationService } from '../configs/NavigationService';
import { images } from '../resources';
import StarRating from './StarRating';
import ListItemStyles from '../styles/ListItemStyle';

const ratingObj = { ratings: 3 };

const RectangleListItem = ({ item, withIcon, plain, onPressItem }) => {
    const { attributes } = item;
    return (
        <TouchableOpacity style={ListItemStyles.container} onPress={() => !plain ? NavigationService.navigate('MerchantView', item) : null} >
            <ImageBackground
                style={ListItemStyles.thumbnailContainer}
                source={
                    attributes ?
                        (
                            attributes.merchant ?
                                { uri: attributes.merchant.merchant_banner.medium.url } :
                                { uri: attributes.merchant_banner.medium.url }
                        )
                        :
                        item.src
                }
            >
                {
                    !plain &&
                    <View style={ListItemStyles.dealContainer}>
                        {withIcon && <View style={ListItemStyles.iconContainer}>
                            <Image style={ListItemStyles.image} source={item.merchant ? { uri: item.merchant.logo.medium.url } : images.image2} />
                        </View>}
                        <Text style={ListItemStyles.deal}>{attributes && (attributes.merchant ? attributes.merchant.best_deal : attributes.best_deal)}</Text>
                    </View>
                }
            </ImageBackground>
            {
                !plain &&
                <View style={ListItemStyles.bottomContainer}>
                    <Text style={ListItemStyles.merchantName}>{attributes && (attributes.merchant ? attributes.merchant.name : attributes.name)}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={ListItemStyles.subtitle}>{attributes && (`${attributes.merchant ? attributes.merchant.category : attributes.category} • BGC • `)}</Text>
                        <StarRating ratingObj={ratingObj} />
                    </View>
                </View>
            }
        </TouchableOpacity>
    )
}

export default RectangleListItem;