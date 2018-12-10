import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../resources';

export default class MyCard extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor }} source={images.card} />
        )
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>MyCard</Text>
            </View>
        )
    }
}