import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { CircleList, RectangleList } from '../../components';
import { NavigationService } from '../../configs/NavigationService';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

class ExploreRewards extends Component {
    _onPressItem = () => {

    }
    _onPressViewRewards = () => {
        NavigationService.navigate('ViewRewards');
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 16 }}>
                        <CircleList
                            data={["1", "1", "1", "1", "1"]}
                            onPressItem={this._onPressItem}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', marginTop: 12 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Featured Deals"}
                            isCollapsible
                            withIcon
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', marginTop: 12 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Restaurants and Bars"}
                            isCollapsible
                            withIcon
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', marginTop: 12 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Travel"}
                            isCollapsible
                            withIcon
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', marginTop: 12 }}>
                        <RectangleList
                            data={sampleData}
                            title={"Hotel and Resorts"}
                            isCollapsible
                            withIcon
                            onPressItem={this._onPressItem}
                            onPressAll={this._onPressAllItems}
                        />
                    </View>
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', padding: 16, marginTop: 12, marginBottom: 50 }}>
                        <TouchableOpacity style={{ borderColor: '#DBDBDB', borderWidth: 1, borderRadius: 8, padding: 8 }} onPress={this._onPressViewRewards}>
                            <Text style={{ textAlign: 'center' }}>View All Rewards</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 10, padding: 16 }}>
                    <Text>1,800 Available Points</Text>
                </View>
            </View>
        )
    }
}

export default ExploreRewards;