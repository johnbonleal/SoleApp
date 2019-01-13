import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Dimensions, ImageBackground, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MerchantLocation from './MerchantLocation';
import DealDetails from './DealDetails';
import { Header, StarRating, Indicator } from '../../components';

import { images, fonts } from '../../resources';
import { NavigationService } from '../../configs/NavigationService';
import Helpers from '../../utils/AutoSlideAnimation';

const { width, height } = Dimensions.get('window');

const ICON_HEIGHT = 25;
const MERCHANT_BACKGROUND_HEIGHT = height * 0.8;
const ratingObj = { ratings: 3 };

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class MerchantView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            indicatorAnim: new Animated.Value(0)
        };
    }
    componentDidMount() {
        Helpers.
    }
    renderHeader = () => {
        const { scrollY } = this.state;
        const animatedHeaderOpacity = scrollY.interpolate({
            inputRange: [height + 28, height + 29],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        return (
            <Header
                headerLeft={images.back}
                imageStyle={{ opacity: animatedHeaderOpacity }}
                withBackground
            />
        )
    }
    renderBackground = () => {
        const { scrollY } = this.state;
        return (
            <TouchableWithoutFeedback
                onPress={store.onNextItem}
                delayPressIn={200}
                onPressIn={store.pause}
            >
                <View style={{ flex: 1, backgroundColor: '#000000' }}>
                    <Animated.View
                        style={{
                            height: MERCHANT_BACKGROUND_HEIGHT,
                            transform: [{
                                scale: scrollY.interpolate({
                                    inputRange: [-MERCHANT_BACKGROUND_HEIGHT, 0, MERCHANT_BACKGROUND_HEIGHT],
                                    outputRange: [2, 1, 1]
                                })
                            }]
                        }}>
                        <Image style={{ flex: 1, height: null, width: null }} source={images.beach_1} />
                    </Animated.View>
                    <ImageBackground style={{ ...StyleSheet.absoluteFillObject }} source={images.gradient_3}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 16, zIndex: 99 }}>
                            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>HOTELS & RESORT</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFFFFF' }}>One night staycation</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
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
                            {this.renderIndicator()}
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    renderIndicator = () => {
        return (
            <View style={{ height: 30, alignItems: 'center', paddingHorizontal: 8, flexDirection: 'row' }}>
                <Indicator animate />
            </View>
        )
    }
    render() {
        const { scrollY } = this.state;
        const animatedButtonBackground = scrollY.interpolate({
            inputRange: [120, 121],
            outputRange: ['#000000', '#FFFFFF'],
            extrapolate: 'clamp'
        });
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                {this.renderHeader()}
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    )}
                >
                    {this.renderBackground()}
                    <View style={{ height: height / 4, backgroundColor: '#000000', justifyContent: 'space-around', padding: 16 }}>
                        <DealDetails
                            title={"Mandaluyong, BGC, Cal..."}
                            subtitle={<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => NavigationService.navigate('MerchantBranch')}>
                                <Text style={{ fontSize: 12, color: 'grey', marginRight: 5 }}>SEE ALL BRANCHES</Text>
                                <Ionicons name={"ios-arrow-forward"} size={16} color={'grey'} />
                            </TouchableOpacity>}
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
                </ScrollView>
                <Animated.View style={{ backgroundColor: animatedButtonBackground, justifyContent: 'center', elevation: 10, padding: 16, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16 }}>
                        <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Scan QR Code</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    }
}

export default MerchantView;

const styles = StyleSheet.create({

});