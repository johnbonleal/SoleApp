import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabularList } from '../../components';

import { fonts } from '../../resources';

class CallUs extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: '#4A4A4A' }}>Call us</Text>
                <View style={{marginTop: 16}}>
                    <TabularList
                        data={[{ title: "General Inquiry" }, { title: "Administration" }, { title: "Financial Services" }, { title: "Corporate Sales" }, { title: "Marketing and Relations" }]}
                        onPressItem={this._onPressItem}
                    />
                </View>
            </View>
        )
    }
}

export default CallUs;