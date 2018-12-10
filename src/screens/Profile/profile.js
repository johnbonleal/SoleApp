import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationService } from '../../configs/NavigationService';

import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 200;
const IMAGE_HEIGHT = 100;

import { PROFILE_DATA } from '../Trash';
import { ScrollView } from 'react-native-gesture-handler';

const FormItem = props => {
    console.log('FormItem props: ', props)
    return (
        <View>
            <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 4 }}>{props.item.title}</Text>
            <Text style={{ color: '#4A4A4A', marginVertical: 4 }}>{props.item.description}</Text>
            {props.index !== 4 && <View style={{ height: 1, backgroundColor: '#E6E6E6', marginVertical: 4 }} />}
        </View>
    );
}
export default class Profile extends Component {
    _onPressPasswordSettings = () => {
        NavigationService.navigate("EditProfile");
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: HEADER_MAX_HEIGHT, width: '100%', padding: 16, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FDC053' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: 'white' }}>John Bon Leal</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: fonts.SMALL, color: 'white', marginRight: 5 }}>1,800 Available Points</Text>
                                <Ionicons name={"ios-arrow-forward"} size={13} color={'white'} />
                            </View>
                        </View>
                        <View>
                            <View style={{ height: IMAGE_HEIGHT, width: IMAGE_HEIGHT, borderRadius: IMAGE_HEIGHT / 2, borderWidth: 3, borderColor: '#F5A623', overflow: 'hidden' }} >
                                <Image style={{ height: null, width: null, flex: 1 }} source={images.image2} />
                            </View>
                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, borderColor: 'white', padding: 5, marginTop: 8 }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: fonts.SMALL }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
                        <Text style={{ fontSize: fonts.LARGE, marginBottom: 16 }}>Profile</Text>
                        <View style={{ backgroundColor: 'white', elevation: 3, padding: 16, borderRadius: 8 }}>
                            <FlatList
                                style={{ marginLeft: 8, marginTop: 8 }}
                                data={PROFILE_DATA}
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item, index }) => <FormItem item={item} index={index} {...this.props} />}
                            />
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }} onPress={this._onPressPasswordSettings}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 16, width: 16, overflow: 'hidden' }}>
                                    <Image style={{ flex: 1, height: null, width: null }} source={images.password} />
                                </View>
                                <Text style={{ marginLeft: 12 }}>Password Settings</Text>
                            </View>
                            <Ionicons name={"ios-arrow-forward"} size={16} color={'gray'} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}