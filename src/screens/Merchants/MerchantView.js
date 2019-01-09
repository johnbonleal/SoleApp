import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MerchantLocation from './MerchantLocation';
import DealDetails from './DealDetails';
import { Header, StarRating } from '../../components';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');

const ICON_HEIGHT = 25;
const DARK_BACKGROUND_HEIGHT = 200;
const ratingObj = { ratings: 3 };

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MerchantView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header
                    headerLeft={images.back}
                />
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={{ height: height * 0.8, width: '100%' }} source={images.beach}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 16 }}>
                            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>HOTELS & RESORT</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' }}>One night staycation</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginRight: 8 }}>
                                    <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' }}>BEACH HOUSE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <StarRating ratingObj={ratingObj} />
                                </View>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FFFFFF' }}>70</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ height: DARK_BACKGROUND_HEIGHT, backgroundColor: '#000000', justifyContent: 'space-around', padding: 16 }}>
                        <DealDetails
                            title={"Mandaluyong, BGC, Cal..."}
                            subtitle={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: 'grey', marginRight: 5 }}>SEE ALL BRANCHES</Text>
                                <Ionicons name={"ios-arrow-forward"} size={16} color={'grey'} />
                            </View>}
                            image={images.location}
                        />
                        <DealDetails
                            title={"25% OFF on published rate (room only)"}
                            image={images.percentage}
                        />
                        <DealDetails
                            title={"Place notes here"}
                            image={images.clipboard}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF' }}>
                        <View style={{ padding: 16 }}>
                            <View style={{ borderBottomColor: '#D8D8D8', borderBottomWidth: 1, paddingBottom: 16 }}>
                                <View style={{ marginVertical: 8 }}>
                                    <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', marginBottom: 5 }}>Terms & Conditions</Text>
                                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', marginLeft: 8 }}>• Libero tempore, cum soluta nobis</Text>
                                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', marginLeft: 8 }}>• Soluta nobis est eligendi optio</Text>
                                    <Text style={{ fontSize: fonts.MEDIUM, color: '#9B9B9B', marginLeft: 8 }}>• Optio cumque nihil impedit quo minus id</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 16 }}>
                                <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', marginBottom: 5 }}>About Beach House</Text>
                                <Text style={{ fontSize: fonts.MEDIUM }} numberOfLines={4}>
                                    Excepteur qui enim deserunt commodo do. Incididunt non magna anim sit est do. Eiusmod laborum amet aliqua sunt ex excepteur aliquip sunt quis ea occaecat velit incididunt. Magna culpa laborum nulla sint laborum enim mollit elit officia excepteur sit. Proident occaecat reprehenderit non adipisicing mollit reprehenderit. Commodo excepteur ad aliquip amet magna nostrud deserunt do veniam fugiat.
                            </Text>
                            </View>
                        </View>
                        <View style={{ height: 200, width: '100%' }}>
                            <MerchantLocation region={{ latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }} />
                        </View>
                        <View style={{ padding: 16 }}>
                            <View style={{ marginVertical: 8 }}>
                                <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', marginVertical: 5 }}>Contact Details</Text>
                                <DealDetails
                                    title={"beachhouse@gmail.com"}
                                    image={images.email}
                                    style={{ marginVertical: 8, alignItems: 'center' }}
                                    textStyle={{ color: '#000000' }}
                                />
                                <DealDetails
                                    title={"1241-12453-1235"}
                                    image={images.phone}
                                    style={{ marginVertical: 8, alignItems: 'center' }}
                                    textStyle={{ color: '#000000' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', elevation: 10, padding: 16, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                        <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16 }}>
                            <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Scan QR Code</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default MerchantView;