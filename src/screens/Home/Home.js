import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';

import { Header, RectangleList, SquareList, CircleList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';
import Dashboard from './Dashboard';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const TOP_CONTAINER_MAX_HEIGHT = 200;
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
    _onPressProfileImage = () => {
        NavigationService.toggleDrawer();
    }
    render() {
        const headerBgColor = this.state.initHeaderBgColor.interpolate({
            inputRange: [0, 200],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.7)'],
            extrapolate: 'clamp',
        });
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    onPressHeaderRight={this._onPressProfileImage}
                    headerStyle={{ alignItems: 'flex-end', backgroundColor: headerBgColor }}
                    headerRight={images.profile}
                    headerRightStyle={{ borderRadius: 18, backgroundColor: 'white', overflow: 'hidden' }}
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.initHeaderBgColor } } }],
                    )}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={{ height: TOP_CONTAINER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.image2} >
                        <View style={{ flex: 1, justifyContent: 'flex-end' }} >
                            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginLeft: 16 }}>Hi, John</Text>
                        </View>
                        <View style={{ flex: 1 }} ></View>
                    </ImageBackground>
                    <View style={{ height: DASHBOARD_MAX_HEIGHT, marginTop: TOP_CONTAINER_MAX_HEIGHT - (DASHBOARD_MAX_HEIGHT / 2), marginBottom: 16, paddingHorizontal: 16, backgroundColor: 'transparent' }}>
                        <Dashboard />
                    </View>
                    <View style={{ paddingHorizontal: 16, marginVertical: 16 }}>
                        <Text style={{ fontSize: fonts.MEDIUM, marginBottom: 12 }}>Venteny Services</Text>
                        <View style={{ height: DASHBOARD_MAX_HEIGHT, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', elevation: 3, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
                                <View style={{ height: 120, width: 120, overflow: 'hidden' }}>
                                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }} source={images.merchant} />
                                </View>
                                <Text style={{ fontSize: fonts.EXTRA_SMALL, marginTop: 5 }}>MERCHANTS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', elevation: 3, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 120, width: 120, overflow: 'hidden' }}>
                                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }} source={images.loan} />
                                </View>
                                <Text style={{ fontSize: fonts.EXTRA_SMALL, marginTop: 5 }}>LOAN CASH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <RectangleList
                        data={sampleData}
                        title={"New Merchants"}
                        isCollapsible
                        onPressItem={this._onPressItem}
                        onPressAll={this._onPressAllItems}
                    />
                    <SquareList
                        data={sampleData}
                        title={"Recommended Deals"}
                        onPressCategoryItem={this._onPressCategoryItem}
                    />
                    <RectangleList
                        data={sampleData}
                        title={"Top Deals"}
                        isCollapsible
                        onPressItem={this._onPressItem}
                        onPressAll={this._onPressAllItems}
                    />
                    <CircleList
                        style={{marginVertical: 16}}
                        listStyle={{ marginLeft: 8, marginTop: 8 }}
                        data={sampleData}
                        title={"Merchant Partners"}
                        onPressItem={this._onPressMerchantItem}
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
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