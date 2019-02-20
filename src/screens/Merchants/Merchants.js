import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, ScrollView, Animated, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
    NavigationBar,
    ImageLoader,
    RectangleList,
    SquareList,
    CircleList,
    CategoryModal,
    LocationModal,
    Tag,
    TabularList
} from '../../components';
import MerchantList from './MerchantList';

import { images, fonts } from '../../resources';
import { TopCategoriesData } from '../../utils/Data';
import { NavigationService, Constants } from '../../configs';

const HEADER_MAX_HEIGHT = Constants.SCREEN_HEIGHT / 3.7;
const HEADER_MIN_HEIGHT = Constants.SCREEN_HEIGHT / 7.5;

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];
class Merchants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: '',
            isCategoryModalVisible: false,
            category: 'Category',
            isLocationModalVisible: false,
            location: 'Location',
            isSearching: false,
            scrollY: new Animated.Value(0)
        };
    }
    _onPressCategoryItem = (item) => {
        this.setState({ category: item });
    }
    _onPressLocationItem = (item) => {
        this.setState({ location: item });
    }
    _toggleCategoryModal = () => {
        this.setState({ isCategoryModalVisible: !this.state.isCategoryModalVisible });
    }
    _toggleLocationModal = () => {
        this.setState({ isLocationModalVisible: !this.state.isLocationModalVisible });
    }
    _onPressModalClose = () => {
        this._toggleCategoryModal();
    }
    _onPressLocationModalClose = () => {
        this._toggleLocationModal();
    }
    _toggleIsSearching = () => {
        this.setState({ isSearching: !this.state.isSearching });
    }
    renderSearch = () => {
        const { searchInput, category, location } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}>
                {searchInput !== '' || category !== 'Category' || location !== 'Location' ?
                    <MerchantList data={sampleData} onPressItem={this._onPressMerchantItem} /> :
                    <TabularList
                        style={{ marginTop: 16 }}
                        data={[{ title: "Search Suggestions" }, { title: "New Deals" }, { title: "Fitness & Sports" }, { title: "Beauty & Wellness" }]}
                        onPressItem={this._onPressItem}
                    />}
            </View>
        )
    }
    renderHeaderView = () => {
        const { scrollY, searchInput, category, location, isSearching } = this.state;
        const animatedHeaderHeight = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        });
        const animatedOpacity = animatedHeaderHeight.interpolate({
            inputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        return (
            <Animated.View style={{ height: animatedHeaderHeight }}>
                <NavigationBar
                    headerStyle={{ opacity: animatedOpacity }}
                    headerLeft={images.close}
                    headerTitle={"Perks & Deals"}
                />
                <ImageBackground style={{ flex: 1, justifyContent: 'flex-end' }} source={images.header_bg} >
                    <View style={{ padding: 16 }}>
                        <Animated.View style={[styles.searchBox, {
                            transform: [{
                                translateY: animatedHeaderHeight.interpolate({
                                    inputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
                                    outputRange: [40, 0]
                                })
                            }]
                        }]}>
                            <View style={styles.imageContainer}>
                                <ImageLoader style={styles.image} source={isSearching || category !== 'Category' || location !== 'Location' ? images.back : images.search} />
                            </View>
                            <TextInput
                                placeholder={"Try \"Hotels\""}
                                placeholderTextColor={"#F5A623"}
                                onChangeText={(searchInput) => this.setState({ searchInput })}
                                maxLength={30}
                                value={searchInput}
                                style={styles.searchInput}
                                onFocus={this._toggleIsSearching}
                                onBlur={this._toggleIsSearching}
                            />
                        </Animated.View>
                        <Animated.View style={{ flexDirection: 'row', marginTop: 12, opacity: animatedOpacity }}>
                            <Tag title={location} onPress={this._toggleLocationModal} style={{ marginRight: 5 }} />
                            <Tag title={category} onPress={this._toggleCategoryModal} />
                        </Animated.View>
                    </View>
                </ImageBackground>
            </Animated.View>
        )
    }
    render() {
        const {
            scrollY,
            isCategoryModalVisible,
            isLocationModalVisible,
            isSearching,
            category,
            location
        } = this.state;
        const { merchant } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                {this.renderHeaderView()}
                <Animated.ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    )}
                >
                    {isSearching || category !== 'Category' || location !== 'Location' ?
                        this.renderSearch()
                        :
                        <View>
                            <RectangleList
                                data={TopCategoriesData}
                                title={"Top Categories"}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 6, paddingVertical: 16 }}
                            />
                            <RectangleList
                                data={merchant && merchant.topDeals}
                                title={"Top Deals"}
                                isCollapsible
                                onPressItem={this._onPressItem}
                                onPressAll={this._onPressAllItems}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 6, paddingVertical: 16 }}
                            />
                            <SquareList
                                data={sampleData}
                                title={"Recommended Deals"}
                                onPressCategoryItem={this._onPressCategoryItem}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 4, paddingVertical: 16 }}
                            />
                            <RectangleList
                                data={sampleData}
                                title={"New Deals"}
                                isCollapsible
                                onPressItem={this._onPressItem}
                                onPressAll={this._onPressAllItems}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 6, paddingVertical: 16 }}
                            />
                            <RectangleList
                                data={sampleData}
                                title={"Merchants Nearby"}
                                isCollapsible
                                onPressItem={this._onPressItem}
                                onPressAll={() => NavigationService.navigate('MerchantNearby')}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 6, paddingVertical: 16 }}
                            />
                            <RectangleList
                                data={sampleData}
                                title={"All Deals"}
                                isCollapsible
                                onPressItem={this._onPressItem}
                                onPressAll={this._onPressAllItems}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 4, paddingVertical: 16 }}
                            />
                            <CircleList
                                listStyle={{ marginLeft: 8, marginTop: 8 }}
                                data={sampleData}
                                title={"Merchant Partners"}
                                onPressItem={this._onPressMerchantItem}
                                style={{ backgroundColor: '#FFFFFF', marginVertical: 4, paddingVertical: 16 }}
                            />
                        </View>}
                </Animated.ScrollView>
                <CategoryModal
                    isVisible={isCategoryModalVisible}
                    onPressItem={this._onPressCategoryItem}
                    onPressModalClose={this._onPressModalClose}
                />
                <LocationModal
                    isVisible={isLocationModalVisible}
                    onPressItem={this._onPressLocationItem}
                    onPressModalClose={this._onPressLocationModalClose}
                />
            </View >
        )
    }
}

const mapStateToProps = state => {
    return {
        merchant: state.merchant
    }
}
export default connect(mapStateToProps)(Merchants);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    backgroundImage: {
        height: HEADER_MAX_HEIGHT,
        width: '100%'
    },
    imageContainer: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        tintColor: '#F5A623'
    },
    searchBox: {
        height: 41,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        // paddingVertical: 8,
        zIndex: 100,
        paddingHorizontal: 12
    },
    searchInput: {
        color: "#F5A623",
        fontSize: fonts.LARGE,
        paddingVertical: 0
    }
});