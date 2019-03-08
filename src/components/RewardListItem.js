import React from 'react';
import { TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { NavigationService } from '../configs/NavigationService';
import { images } from '../resources';
import ListItemStyles from '../styles/ListItemStyle';

const RewardListItem = ({
    item,
    withIcon,
    onPressItem
}) => {
    console.log("Reward Item: ", item);
    const separatedDealAndMerchant = item && item.name.split(" - ");
    const deal = separatedDealAndMerchant[0];
    const merchant = separatedDealAndMerchant[1];
    return (
        <TouchableOpacity style={ListItemStyles.container} onPress={() => NavigationService.navigate('ViewReward', item)} >
            <ImageBackground
                style={ListItemStyles.thumbnailContainer}
                source={{ uri: item.product_image && item.product_image.medium.url }}
            >
                <View style={ListItemStyles.dealContainer}>
                    {withIcon && <View style={ListItemStyles.iconContainer}>
                        <Image style={ListItemStyles.image} source={{ uri: item.merchant && item.merchant.logo.thumb.url }} />
                    </View>}
                    <Text style={ListItemStyles.deal}>{merchant}</Text>
                </View>
            </ImageBackground>
            <View style={ListItemStyles.bottomContainer}>
                <Text style={ListItemStyles.merchantName}>{deal}</Text>
                <Text style={ListItemStyles.subtitle}>{item && (`${item.value} Points`)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RewardListItem;