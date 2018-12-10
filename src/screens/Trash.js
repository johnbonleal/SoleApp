import React, { Component } from 'react';
import { } from 'react-native';

const HEADER_MAX_HEIGHT = 200;

export const PROFILE_DATA = [
    {
        title: 'Full Name',
        description: 'John Bon Leal'
    },
    {
        title: 'Email',
        description: 'john_leal@venteny.com'
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
        title: ' Membership Number',
        description: '430206'
    },
    {
        title: 'Country',
        description: 'PH'
    }
]
export default class Trash extends Component {
    render() {
        // PROFILE
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: HEADER_MAX_HEIGHT, padding: 16, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#FDC053', position: 'absolute', top: 0, left: 0, right: 0 }}>
                    <View>
                        <Text style={{ fontSize: fonts.LARGE, fontWeight: 'bold', color: 'white' }}>John Bon Leal</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: fonts.SMALL, color: 'white', marginRight: 5 }}>1,800 Available Points</Text>
                            <Ionicons name={"ios-arrow-forward"} size={13} color={'white'} />
                        </View>
                    </View>
                </View>
                <View style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 3, borderColor: '#F5A623', overflow: 'hidden', marginTop: HEADER_MAX_HEIGHT - 40, marginRight: 16, alignSelf: 'flex-end' }} >
                    <Image style={{ height: null, width: null, flex: 1 }} source={images.image2} />
                </View>
                </View>
        )
    }
}