import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../resources';

export default class MyCard extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>MyCard</Text>
            </View>
        )
    }
}