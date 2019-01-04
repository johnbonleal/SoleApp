import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';

import { Header, RectangleList, SquareList, CircleList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';
import Dashboard from './Dashboard';
import styles from '../../styles/HomeStyle';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];
const TOP_CONTAINER_MAX_HEIGHT = 200;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0)
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
    renderBackgroundImage() {
        const { scrollY } = this.state;
        return (
            <Animated.View
                style={[styles.backgroundImage, {
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [-TOP_CONTAINER_MAX_HEIGHT, 0, TOP_CONTAINER_MAX_HEIGHT],
                            outputRange: [TOP_CONTAINER_MAX_HEIGHT / 2, 0, -TOP_CONTAINER_MAX_HEIGHT / 3]
                        })
                    }, {
                        scale: scrollY.interpolate({
                            inputRange: [-TOP_CONTAINER_MAX_HEIGHT, 0, TOP_CONTAINER_MAX_HEIGHT],
                            outputRange: [2, 1, 1]
                        })
                    }]
                }
                ]}>
                <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
            </Animated.View>
        );
    }
    render() {
        const headerBgColor = this.state.scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)'],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.container}>
                <Header
                    onPressHeaderRight={this._onPressProfileImage}
                    headerStyle={{ alignItems: 'flex-end', backgroundColor: headerBgColor, top: 0 }}
                    headerRight={images.profile}
                    headerRightStyle={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'white', overflow: 'hidden' }}
                />
                {this.renderBackgroundImage()}
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                    )}
                    scrollEventThrottle={16}
                >
                    <View style={styles.dashboardContainer}>
                        <Dashboard />
                    </View>
                    <View style={styles.servicesContainer}>
                        <Text style={styles.serviceTitle}>Venteny Services</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, { marginRight: 8 }]}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={images.merchant} />
                                </View>
                                <Text style={styles.buttonTitle}>MERCHANTS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={images.loan} />
                                </View>
                                <Text style={styles.buttonTitle}>LOAN CASH</Text>
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
                        style={{ marginVertical: 16 }}
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