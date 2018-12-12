import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { fonts } from '../../resources';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'John Bon Leal',
            email: 'johnbon.leal17@gmail.com',
            position: 'Software Engineer',
            company: 'Venteny Inc.',
            birthdate: '07/10/1996',
            membershipNumber: '430206',
            country: 'PH'
        }
    }
    render() {
        const {
            fullName,
            email,
            company,
            birthdate,
            membershipNumber,
            country
        } = this.state;
        return (
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: fonts.LARGE, marginBottom: 16 }}>Edit Profile</Text>
                <View style={{ backgroundColor: 'white', elevation: 3, padding: 12, borderRadius: 8 }}>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Full Name</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingHorizontal: 12, paddingVertical: 5 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(fullName) => this.setState({ fullName })} value={fullName}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Email</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(email) => this.setState({ email })} value={email}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Company</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(company) => this.setState({ company })} value={company}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Birthdate</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(birthdate) => this.setState({ birthdate })} value={birthdate}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Membership Number</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(membershipNumber) => this.setState({ membershipNumber })} value={membershipNumber}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>Country</Text>
                        <View style={{ borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingVertical: 5, paddingHorizontal: 8 }}>
                            <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, padding: 0 }} onChangeText={(country) => this.setState({ country })} value={country}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 4 }}>
                        <TouchableOpacity style={{ backgroundColor: '#EAA339', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: fonts.EXTRA_SMALL }}>SAVE CHANGES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#E6E6E6', marginTop: 20 }} />
            </View>
        )
    }
}

export default EditProfile;