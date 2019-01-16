import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Terms extends Component {
    static PropTypes = {

    }

    static defaultProps = {

    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Terms</Text>
            </View>
        )
    }
}