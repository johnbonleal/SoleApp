import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { NavigationBar, ImageLoader, RectangleList, SquareList, CircleList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';
import { RecommendedDealsData } from '../../utils/Data';
import Dashboard from './Dashboard';
import styles from '../../styles/HomeStyle';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];
var _ = require('lodash');

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0)
        };
    }
    _getFirstName = name => {
        if (_.isString(name)) {
            const splitNameIntoArray = name.split(' ');
            let firstName = splitNameIntoArray[0];
            if (splitNameIntoArray[0] === 'Ma.' || splitNameIntoArray[0] === 'Ma') {
                firstName = `${splitNameIntoArray[0]} ${splitNameIntoArray[1]}`;
            }
            return firstName;
        }
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
    _onPressLoan = () => {
        let route = 'OnBoardingAvaila';
        if (this.props.loan && this.props.loan.isOnBoardingDismissed) route = 'HomeAvaila';
        NavigationService.navigate(route);
    }
    renderHeader() {
        const { scrollY } = this.state;
        return (
            <NavigationBar
                onPressHeaderRight={this._onPressProfileImage}
                headerStyle={{
                    alignItems: 'flex-end',
                    backgroundColor: scrollY.interpolate({
                        inputRange: [0, 150],
                        outputRange: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)'],
                        extrapolate: 'clamp',
                    }),
                    top: 0
                }}
                headerRight={images.profile}
                headerRightStyle={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'white', overflow: 'hidden' }}
            />
        )
    }
    renderBackgroundImage() {
        const { scrollY } = this.state;
        return (
            <Animated.View style={styles.backgroundImage}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <ImageLoader style={{ flex: 1, height: null, width: null }} thumbnailSource={images.header_bg} source={images.header_bg} />
                </View>
            </Animated.View>
        );
    }
    render() {
        const { scrollY } = this.state;
        const { auth } = this.props;
        let firstName = auth && auth.data.user.first_name;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                {this.renderHeader()}
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                    )}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderBackgroundImage()}
                    <Text style={styles.greetings}>{`Hi, ${this._getFirstName(firstName)}`}</Text>
                    <View style={styles.dashboardContainer}>
                        <Dashboard />
                    </View>
                    <View style={styles.servicesContainer}>
                        <Text style={styles.serviceTitle}>Venteny Services</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, { marginRight: 8 }]}
                                onPress={() => NavigationService.navigate('Merchant')}
                            >
                                <View style={styles.imageContainer}>
                                    <ImageLoader style={styles.image} source={images.perks} />
                                </View>
                                <Text style={styles.buttonTitle}>PERKS & DEALS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this._onPressLoan}
                            >
                                <View style={styles.imageContainer}>
                                    <ImageLoader style={styles.image} source={images.loan} />
                                </View>
                                <Text style={styles.buttonTitle}>LOAN CASH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <RectangleList
                        data={sampleData}
                        title={"New Merchants"}
                        isCollapsible
                    />
                    <SquareList
                        data={RecommendedDealsData}
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

const mapStateToProps = state => {
    return {
        auth: state.auth,
        loan: state.loan
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
