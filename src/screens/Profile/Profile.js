import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components';

import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 200;
const IMAGE_HEIGHT = 115;

import { PROFILE_DATA } from '../Trash';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '',
            action: 'Edit'
        }
    }
    _onPressPasswordSettings = () => {
        this.setState({ current: 'change password' });
    }
    _onPressBack = () => {
        NavigationService.back();
    }
    _resetState = () => {
        this.setState({ current: '', action: 'Edit' });
    }
    _updateAccount = () => {
        if (this.state.current === 'edit profile') {
            this._resetState();
        } else {
            this.setState({ current: 'edit profile', action: 'Cancel' });
        }
    }
    render() {
        const { current, action } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    headerLeft={images.back}
                    headerRight={action}
                    onPressHeaderLeft={this._onPressBack}
                    onPressHeaderRight={this._updateAccount}
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={{ height: HEADER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 24 }}>
                            <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: 'white' }}>John Leal</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: fonts.SMALL, color: 'white', marginRight: 5 }}>1,800 Available Points</Text>
                                <Ionicons name={"ios-arrow-forward"} size={13} color={'white'} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View style={{ height: IMAGE_HEIGHT, width: IMAGE_HEIGHT, borderRadius: IMAGE_HEIGHT / 2, marginTop: HEADER_MAX_HEIGHT - (IMAGE_HEIGHT / 1.25), marginRight: 16, alignSelf: 'flex-end', overflow: 'hidden' }} >
                            <Image style={{ height: null, width: null, flex: 1 }} source={images.profile} />
                        </View>
                        {current === 'edit profile' && <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', bottom: 0, right: 16, height: 30, width: 30, backgroundColor: '#F5A623', borderRadius: 15, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 15, width: 15, overflow: 'hidden' }}>
                                <Image style={{ flex: 1, width: null, height: null, tintColor: 'white' }} source={images.add} />
                            </View>
                        </TouchableOpacity>}
                    </View>
                    {(() => {
                        switch (current) {
                            case 'edit profile':
                                return <EditProfile profileData={PROFILE_DATA} />;
                            case 'change password':
                                return <ChangePassword profileData={PROFILE_DATA} />;
                            default:
                                return <ProfileInfo profileData={PROFILE_DATA} onPressPasswordSettings={this._onPressPasswordSettings} />;
                        }
                    })()}

                </ScrollView>
            </View>
        )
    }
}

export default Profile;