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
                <View style={{ height: 56, flexDirection: 'row', position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'skyblue', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 }}>
                    <Ionicons name={"md-arrow-back"} size={20} color={'white'} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>GoodWork.ph</Text>
                    <Ionicons name={"md-menu"} size={20} color={'white'} />
                </View>
                <View style={{ height: height / 8, width: '100%', flexDirection: 'row', paddingHorizontal: 8, marginTop: 56 }}>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', elevation: 2, borderRadius: 8, marginHorizontal: 8 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50 }}>
                                <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                            </View>
                            <Text style={{ textAlign: 'center' }}>Aircon & Fridge</Text>
                        </View>
                        {/* <TouchableOpacity style={{ height: 24, width: 24, borderRadius: 12, overflow: 'hidden', marginTop: 16 }}>
                                            <Image style={{ flex: 1, height: null, width: null, tintColor: '#FFFFFF' }} source={images.back} />
                                        </TouchableOpacity> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#EAA339', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity */}
            </View>
        )
    }
}