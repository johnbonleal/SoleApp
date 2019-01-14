import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { images, fonts } from '../resources';

const { width, height } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = 200;

export const PROFILE_DATA = [
    {
        title: 'Full Name',
        description: 'John Leal'
    },
    {
        title: 'Email',
        description: 'john_leal@venteny.com'
    },
    {
        title: 'Position',
        description: 'Software Engineer'
    },
    {
        title: 'Company',
        description: 'Venteny Inc'
    },
    {
        title: 'Birthdate',
        description: '07/10/1996'
    },
    {
        title: 'Membership Number',
        description: '430206'
    },
    {
        title: 'Country',
        description: 'PH'
    }
]
export default class Trash extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                {data[0].items.map((item, index) => (
                        <Image style={{ flex: 1, height: null, width: null }} source={item.src} />)
                        )}
            </View>
        )
    }
}