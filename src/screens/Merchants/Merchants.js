import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { Header, ImageLoader, RectangleList, SquareList, CircleList, CategoryModal, LocationModal } from '../../components';

import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 186;
const APP_HEADER_HEIGHT = 56;

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const Tag = ({ title, style, onPress }) => (
    <TouchableOpacity style={[{ borderColor: '#FFFFFF', borderRadius: 8, borderWidth: 1, padding: 8 }, style]} onPress={onPress}>
        <Text style={{ color: '#FFFFFF' }}>{title}</Text>
    </TouchableOpacity>
);

class Merchants extends Component {
    state = {
        searchInput: '',
        isCategoryModalVisible: false,
        category: 'Category',
        isLocationModalVisible: false,
        location: 'Location'
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
    render() {
        const { searchInput, isCategoryModalVisible, category, isLocationModalVisible, location } = this.state;
        return (
            <View style={styles.container}>
                <Header
                    headerLeft={images.close}
                    headerTitle={"Perks & Deals"}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={styles.backgroundImage} source={images.header_bg} >
                        <View style={{ padding: 16, marginTop: APP_HEADER_HEIGHT }}>
                            <View style={styles.searchBox}>
                                <View style={styles.imageContainer}>
                                    <ImageLoader style={styles.image} source={images.search} />
                                </View>
                                <TextInput
                                    placeholder={"Try \"Hotels\""}
                                    placeholderTextColor={"#F5A623"}
                                    onChangeText={(searchInput) => this.setState({ searchInput })}
                                    value={searchInput}
                                    inlineImageLeft={images.search}
                                    style={styles.searchInput}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 12 }}>
                                <Tag title={location} onPress={this._toggleLocationModal} style={{ marginRight: 5 }} />
                                <Tag title={category} onPress={this._toggleCategoryModal}/>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Top Categories"}
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Top Deals"}
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <SquareList
                            data={sampleData}
                            title={"Recommended Deals"}
                            onPressCategoryItem={this._onPressCategoryItem}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <RectangleList
                            data={sampleData}
                            title={"New Deals"}
                            isCollapsible
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <RectangleList
                            data={sampleData}
                            title={"All Deals"}
                            isCollapsible
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
                        <CircleList
                            style={{ marginVertical: 16 }}
                            listStyle={{ marginLeft: 8, marginTop: 8 }}
                            data={sampleData}
                            title={"Merchant Partners"}
                            onPressItem={this._onPressMerchantItem}
                        />
                    </View>
                </ScrollView>
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
            </View>
        )
    }
}

export default Merchants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    backgroundImage: {
        height: HEADER_MAX_HEIGHT,
        width: '100%',
        justifyContent: 'flex-end'
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
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    searchInput: {
        color: "#F5A623",
        fontSize: fonts.LARGE,
        fontWeight: 'bold'
    }
});