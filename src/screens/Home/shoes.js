import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Shoes extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Shoes</Text>
            </View>
        )
    }
}

export default Shoes;