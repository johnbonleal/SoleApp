import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';

import { CategoryList, List, MerchantList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';
import Dashboard from './Dashboard';

const { width, height } = Dimensions.get('window');
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const TOP_CONTAINER_MAX_HEIGHT = 200;
const APP_HEADER_HEIGHT = 56;
const DASHBOARD_MAX_HEIGHT = 157;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initHeaderBgColor: new Animated.Value(0)
        };
    }
    _onPressItem = item => {
        NavigationService.navigate("MerchantView");
    }
    _onPressAllItems = item => {
        NavigationService.navigate("MerchantList");
    }
    _onPressCategoryItem = item => {

    }
    _onPressMerchantItem = item => {

    }
    render() {
        const { initHeaderBgColor } = this.state;
        const headerBgColor = initHeaderBgColor.interpolate({
            inputRange: [0, 200],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)'],
            extrapolate: 'clamp',
        });
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Animated.View style={{ height: APP_HEADER_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: headerBgColor, paddingHorizontal: 16, elevation: 1 }}>
                    <TouchableOpacity style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'white' }}></TouchableOpacity>
                </Animated.View>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: initHeaderBgColor } } }],
                    )}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={{ height: TOP_CONTAINER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.image2} >
                        <View style={{ flex: 1, justifyContent: 'flex-end' }} >
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginLeft: 16 }}>Hi, John</Text>
                            {/* <Text style={{ fontSize: 26, color: 'white', marginLeft: 16 }}>Good morning, <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>John Leal!</Text></Text> */}
                        </View>
                        <View style={{ flex: 1 }} ></View>
                    </ImageBackground>

                    <View style={{ height: DASHBOARD_MAX_HEIGHT, marginTop: TOP_CONTAINER_MAX_HEIGHT - (DASHBOARD_MAX_HEIGHT / 2), marginBottom: 16, paddingHorizontal: 16, backgroundColor: 'transparent' }}>
                        <Dashboard />
                    </View>
                    <View style={{ paddingHorizontal: 16, marginVertical: 16 }}>
                        <Text style={{ fontSize: 20, marginBottom: 12 }}>Venteny Services</Text>
                        <View style={{ height: DASHBOARD_MAX_HEIGHT, flexDirection: 'row' }}>
                            <View style={{ flex: 1, backgroundColor: 'white', elevation: 3, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                <View style={{ height: 120, width: 120 }}>
                                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={images.merchant} />
                                </View>
                                <Text style={{ fontSize: 13 }}>MERCHANTS</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', elevation: 3, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 120, width: 120 }}>
                                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={images.loan} />
                                </View>
                                <Text style={{ fontSize: 13 }}>LOAN CASH</Text>
                            </View>
                        </View>
                    </View>
                    <List data={sampleData} title={"New Merchants"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <CategoryList data={sampleData} title={"Recommended Deals"} onPressCategoryItem={this._onPressCategoryItem} />
                    <List data={sampleData} title={"Top Deals"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <MerchantList data={sampleData} title={"Merchant Partners"} onPressMerchantItem={this._onPressMerchantItem} />
                </ScrollView>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    searchContainer: {
        backgroundColor: '#f2f2f2',
        height: 45,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    }
})