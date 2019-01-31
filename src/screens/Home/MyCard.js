import React, { Component } from 'react';
import { Dimensions, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationBar } from '../../components';
import { NavigationService } from '../../configs/NavigationService';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');
class MyCard extends Component {
    _onPressContact = () => {
        NavigationService.navigate('ContactUs', { isAuthenticated: true });
    }
    _onPressTerms = () => {

    }
    render() {
        return (
            <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={images.card_bg} resizeMode={'cover'}>
                <NavigationBar headerLeft={images.close}/>
                <View style={{ height: '70%' }}>
                    <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: 'bold', marginLeft: 20 }}>Prepaid Visa Card</Text>
                    <ImageBackground style={{ height: '79%', paddingHorizontal: 20 }} source={images.prepaid_visa} resizeMode="cover">
                        <View style={{ height: '60%', paddingHorizontal: 20, marginTop: 16 }}>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 13, color: '#FFFFFF', marginTop: 12 }}>Membership ID</Text>
                                <Text style={{ fontSize: 23, color: '#FFFFFF' }}>123456</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 28, color: '#FFFFFF' }}>4162 0001 0045 9920</Text>
                                <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 'bold' }}>JOHN BON JOVIRICK R LEAL</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ marginRight: 8 }}>
                                        <Text style={{ fontSize: 7, color: '#FFFFFF' }}>VALID</Text>
                                        <Text style={{ fontSize: 7, color: '#FFFFFF' }}>THRU</Text>
                                    </View>
                                    <Text style={{ fontSize: 19, color: '#FFFFFF' }}>11/23</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginLeft: 4, marginTop: 16 }}>Present this when asked by our merchant partner.</Text>
                    </ImageBackground>
                </View>
                <View style={{ height: height / 6, backgroundColor: '#FFFFFF', elevation: 10, position: 'absolute', bottom: 0, left: 0, right: 0, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, borderBottomColor: '#D8D8D8', borderBottomWidth: 1 }} onPress={this._onPressContact}>
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#F5A623', justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                            <View style={{ height: 20, width: 20 }}>
                                <Image style={{ flex: 1, height: null, width: null, tintColor: '#FFFFFF' }} source={images.phone} resizeMode={'contain'} />
                            </View>
                        </View>
                        <Text style={{ fontSize: fonts.SMALL, fontWeight: 'bold', color: '#9B9B9B' }}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#F5A623', justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                            <View style={{ height: 20, width: 20 }}>
                                <Image style={{ flex: 1, height: null, width: null, tintColor: '#FFFFFF' }} source={images.book} resizeMode={'contain'} />
                            </View>
                        </View>
                        <Text style={{ fontSize: fonts.SMALL, fontWeight: 'bold', color: '#9B9B9B' }}>Read Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default MyCard;