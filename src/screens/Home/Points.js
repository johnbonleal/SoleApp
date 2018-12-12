import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationService } from '../../configs/NavigationService';

import { Header, MerchantList } from '../../components';
import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 200;
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

const RewardsListItem = props => (
    <TouchableOpacity id={props.item.id} key={props.index} style={{flex: 1, paddingHorizontal: 12, alignItems: 'center'}} >
        <View style={{height: 70, width: 70, borderRadius: 35, overflow: 'hidden'}}>
            <Image style={{flex: 1, height: null, width: null}} source={images.image2} />
        </View>
        <Text style={{fontSize: 10, marginVertical: 8, color: '#4A4A4A'}}>The Big Cup</Text>
    </TouchableOpacity>
);

class Points extends Component {
    _onPressClose = () => {
        NavigationService.back();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: 56, position: 'absolute', width: '100%', backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, zIndex: 99 }}>
                    <TouchableOpacity style={{ height: 24, width: 24 }} onPress={this._onPressClose}>
                        <Image style={{ flex: 1, height: null, width: null, tintColor: 'white' }} source={images.close} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground style={{ height: HEADER_MAX_HEIGHT, width: '100%' }} source={images.header_bg}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: fonts.REGULAR, fontWeight: 'bold', color: 'white', marginRight: 8 }}>Earned Points</Text>
                                <Ionicons name={"ios-information-circle-outline"} size={fonts.REGULAR} color={'white'} />
                            </View>
                            <Text includeFontPadding={false} style={{ fontSize: 80, color: 'white' }}>1,800</Text>
                            <Text style={{ fontSize: fonts.EXTRA_SMALL, color: 'white', fontStyle: 'italic' }}>200 points will expire on 31 Dec 2018</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ paddingHorizontal: 32, paddingVertical: 16 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}>
                            <Text>Point History</Text>
                            <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}>
                            <Text>How do I earn points?</Text>
                            <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}>
                            <Text>Venteny Rewards</Text>
                            <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'black'} />
                        </View>
                        <View style={{ paddingVertical: 16 }}>
                            <Text>Latest Rewards</Text>
                            <FlatList
                                style={{ marginTop: 16 }}
                                horizontal
                                data={sampleData}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item, index }) => <RewardsListItem item={item} index={index} {...this.props} />}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#9B9B9B', marginRight: 8}}>Browse Rewards</Text>
                            <Ionicons name={"ios-arrow-forward"} size={12} color={'#9B9B9B'} />
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

export default Points;