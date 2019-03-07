import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Constants } from '../../configs';

import { images, fonts } from '../../resources';

const FormItem = props => (
    <View>
        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>{props.item.title}</Text>
        <Text style={{ color: '#4A4A4A', marginVertical: 3 }}>{props.item.description}</Text>
        {props.index !== 6 && <View style={{ height: 1, backgroundColor: '#E6E6E6', marginVertical: 3 }} />}
    </View>
);

class ProfileInfo extends Component {
    _onPressPassword = () => {
        this.props.onPressPasswordSettings();
    }
    render() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: fonts.LARGE, marginBottom: 16 }}>Profile</Text>
                    <View style={{ backgroundColor: 'white', elevation: 3, padding: 12, borderRadius: 8 }}>
                        <FlatList
                            style={{ marginLeft: 8, marginTop: 8 }}
                            data={this.props.profileData}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => <FormItem item={item} index={index} {...this.props} />}
                        />
                    </View>
                    <View style={{ height: 1, backgroundColor: '#E6E6E6', marginTop: 20 }} />
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 16 }} onPress={this._onPressPassword}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 16, width: 16, overflow: 'hidden' }}>
                                <Image style={{ flex: 1, height: null, width: null }} source={images.password} />
                            </View>
                            <Text style={{ marginLeft: 12 }}>Password Settings</Text>
                        </View>
                        <Ionicons name={"ios-arrow-forward"} size={16} color={'gray'} />
                    </TouchableOpacity>
            </View>
        )
    }
}

export default ProfileInfo;