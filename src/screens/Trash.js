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

                        <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: 'bold' }}>Prepaid Visa Card</Text>

                        <View style={{ height: '70%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato' }}>
                                <View style={{ height: 240, width: 240 }}>
                                    <Image style={{ flex: 1, height: null, width: null }} source={images.mobile} resizeMode={'contain'} />
                                </View>
                                <Text style={{fontSize: 20, color: '#FFFFFF'}}>Scan QR at partner stores to view offers</Text>
                                <View style={{paddingVertical: 8, backgroundColor: '#FFFFFF'}}>
                                    <Text style={{fontSize: 16, color: '#FFAA00'}}>Continue</Text>
                                </View>
                            </View>


                            <View style={{ height: '75%', width: '90%', marginTop: 16 }}>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 12 }}>Membership ID</Text>
                                <Text style={{ fontSize: 23, color: '#FFFFFF' }}>123456</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 16 }}>
                                <Text style={{ fontSize: 28, color: '#FFFFFF' }}>4162 0001 0045 9920</Text>
                                <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>JOHN BON JOVIRICK R LEAL</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{marginRight: 8}}>
                                        <Text style={{ fontSize: 7, color: '#FFFFFF' }}>VALID</Text>
                                        <Text style={{ fontSize: 7, color: '#FFFFFF' }}>THRU</Text>
                                    </View>
                                    <Text style={{ fontSize: 19, color: '#FFFFFF' }}>11/23</Text>
                                </View>
                            </View>
                        </View>

                        

                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#EAA339', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity */}
            </View>
        )
    }
}