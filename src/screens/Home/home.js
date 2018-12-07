import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity, Animated } from 'react-native';

import { Header, List, VerticalSpacer } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';
import Dashboard from './Dashboard';

const { width, height } = Dimensions.get('window');
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueToManipulate: new Animated.Value(0),
            // headerBgColor: new Animated.Value(0)
        }
    }
    _onPressItem = (item) => {
        NavigationService.navigate("MerchantView");
    };
    _onPressAllItems = (item) => {
        NavigationService.navigate("MerchantList");
    }
    _handleScroll(event) {
        console.log(event.nativeEvent.contentOffset.y);

    }
    render() {
        const headerBgColor = this.state.valueToManipulate.interpolate({
            inputRange: [0, 300],
            outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
            extrapolate: 'clamp',
        });
        console.log(this.state.valueToManipulate)
        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{ position: 'absolute', top: 0, width: '100%', height: 56, backgroundColor: headerBgColor, elevation: 3 }}>
                    <View style={{ width: '100%', height: '100%', paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'gray', marginRight: 12 }}></TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}></Text>
                    </View>
                </Animated.View>
                <ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.valueToManipulate } } }],
                    )}
                    scrollEventThrottle={16}
                >
                    <View style={{ width: '100%', height: height / 3 }} >
                        <View style={{ flex: 2 }} >
                            <ImageBackground style={{ width: '100%', height: '100%' }} source={images.image2} >
                                <View style={{ width: '100%', height: 56, justifyContent: 'center', paddingHorizontal: 16 }} >
                                    <Text style={{ color: '#FFF', fontSize: 20, alignSelf: 'center' }}>Good afternoon, <Text style={{ fontWeight: 'bold' }}>John Bon Leal</Text></Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 1 }} >
                            <View style={{ width: '100%', height: 150, position: 'absolute', top: -95, bottom: 0, zIndex: 10, paddingHorizontal: 16 }}>
                                <Dashboard />
                            </View>
                        </View>
                    </View>

                    <List data={sampleData} title={"New Releases"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <VerticalSpacer height={16} />
                    <List data={sampleData} title={"Recommended"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                    <VerticalSpacer height={16} />
                    <List data={sampleData} title={"Top Deals"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
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