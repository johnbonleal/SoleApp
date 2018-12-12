import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { images, fonts } from '../../resources';

const { width, height } = Dimensions.get('window');

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: ''
        }
    }
    render() {
        const { oldPassword, newPassword } = this.state;
        return (
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: fonts.LARGE, marginBottom: 16 }}>Change Password</Text>
                    <View style={{ backgroundColor: 'white', elevation: 3, padding: 12, borderRadius: 8 }}>
                        <View>
                            <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Enter old password</Text>
                            <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingHorizontal: 12, paddingVertical: 5 }}>
                                <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(oldPassword) => this.setState({ oldPassword })} value={oldPassword}></TextInput>
                            </View>
                        </View>
                        <View style={{marginTop: 8}}>
                            <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Enter new password</Text>
                            <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                                <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(newPassword) => this.setState({ newPassword })} value={newPassword}></TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16, marginBottom: 4 }}>
                            <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ color: '#9B9B9B', fontSize: fonts.EXTRA_SMALL }}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#EAA339', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: fonts.EXTRA_SMALL }}>CONFIRM</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 1, width: width * 0.8, backgroundColor: '#E6E6E6', alignSelf: 'center', marginTop: 32, marginBottom: 20 }} />
                    <Text style={{ fontSize: fonts.LARGE, marginBottom: 16 }}>Forgot Password</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={{ backgroundColor: '#EAA339', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: fonts.EXTRA_SMALL }}>SEND PASSWORD RECOVERY LINK</Text>
                            </TouchableOpacity>
                    </View>
            </View >
        )
    }
}

export default ChangePassword;