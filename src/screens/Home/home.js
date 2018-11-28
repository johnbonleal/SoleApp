import React, {Component} from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {List, VerticalSpacer} from '../../components';

import {NavigationService} from '../../configs/NavigationService';

class Shoes extends Component {
    _onPressItem = (item) => {
        NavigationService.navigate("MerchantView");
    };
    _onPressAllItems = (item) => {
        NavigationService.navigate("MerchantList");
    }
    render() {
        return (
            <ScrollView>
                <View style={{ padding: 16, marginTop: 16 }} >
                    <View style={styles.searchContainer}>
                        <View style={{ flex: 0, justifyContent: 'center' }}>
                            <Ionicons name={"ios-search"} size={20} color={"gray"} />
                        </View>
                        <TextInput
                            style={{ flex: 1, marginLeft: 8 }}
                            placeholder={"What do you want to do today?"}
                            returnKeyLabel={"Done"}
                        />
                    </View>
                </View>
                <List data={["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"]} title={"New Releases"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                <VerticalSpacer height={16} />
                <List data={["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"]} title={"Recommended"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
                <VerticalSpacer height={16} />
                <List data={["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"]} title={"Top Deals"} onPressItem={this._onPressItem} onPressAllItems={this._onPressAllItems} />
            </ScrollView>
        )
    }
}

export default Shoes;

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