import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native';

import { Header, RectangleList, SquareList, CircleList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';
import Dashboard from './Dashboard';
import styles from '../../styles/HomeStyle';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

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
            inputRange: [0, 150],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)'],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.container}>
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
                    <ImageBackground style={styles.backgroundImage} source={images.image2} >
                        <View style={styles.greetingsContainer} >
                            <Text style={styles.greetings}>Hi, John</Text>
                        </View>
                        <View style={{ flex: 1 }} ></View>
                    </ImageBackground>
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