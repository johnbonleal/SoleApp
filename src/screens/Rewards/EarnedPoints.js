import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import { fonts } from '../../resources';

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const PointItem = ({ item }) => (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}>
            <View>
                <Text style={{ fontSize: fonts.MEDIUM, color: '#4A4A4A' }}>Premium Bamboo</Text>
                <Text style={{ fontSize: 15, color: '#9B9B9B' }}>16 Nov 2018, 3:08 AM</Text>
            </View>
            <Text style={{ fontSize: fonts.MEDIUM, fontWeight: 'bold', color: '#FBA624' }}>+57</Text>
        </View>
    </View>
);

class EarnedPoints extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ backgroundColor: '#FFFFFF' }}
                    data={sampleData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => <PointItem key={index} onPressItem={this._showLocation} />}
                />
            </View>
        )
    }
}

export default EarnedPoints;