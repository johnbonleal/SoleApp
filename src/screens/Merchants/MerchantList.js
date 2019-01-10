import React from 'react';
import { FlatList, TouchableOpacity, ImageBackground, View, Text } from 'react-native';
import { ImageLoader, StarRating } from '../../components';

import { images, fonts } from '../../resources';

const IMAGE_HEIGHT = 190;
const ICON_HEIGHT = 35;
const ratingObj = { ratings: 3 };

const MerchantList = ({ data, onPressItem }) => (
    <FlatList
        style={{ padding: 8 }}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => <View style={{ marginVertical: 8 }}>
            <TouchableOpacity key={index} onPress={onPressItem}>
                <ImageBackground source={images.image2} style={{ height: IMAGE_HEIGHT, width: '100%', borderRadius: 8, overflow: 'hidden' }} >
                    <View style={{ height: IMAGE_HEIGHT / 4, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'flex-end', padding: 8 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginRight: 8 }}>10% OFF</Text>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 16, flexDirection: 'row' }}>
                    <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginRight: fonts.SMALL }}>
                        <ImageLoader source={images.image2} style={{ flex: 1, height: null, width: null }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>One night staycation</Text>
                        <Text style={{ fontSize: 15, color: '#9B9B9B' }}>Beach House</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 5 }}>
                                <StarRating ratingObj={ratingObj} />
                            </View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#9B9B9B' }}>70</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>}
    />
);

export default MerchantList;