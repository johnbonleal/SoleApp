import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import { images } from '../../resources';

const MerchantLocation = ({ region }) => (
    <View style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}>
        <MapView
            region={region}
            provider={PROVIDER_GOOGLE}
            loadingEnabled
            style={{ ...StyleSheet.absoluteFillObject }}
        // onRegionChange={() => this.onRegionChange.bind(this)}
        >
            <Marker
                coordinate={region}
                title='You are here!'
                image={images.circle}
            >
                <Callout>
                    <View style={{flexDirection: 'row', padding: 8}}>
                        <View style={{height: 20, width: 20, marginRight: 8}}>
                            <Image style={{flex: 1, height: null, width: null}} source={images.location_dark} />
                        </View>
                        <View>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Beach House</Text>
                            <Text style={{fontSize: 15}}>Unit 2348 Town Center</Text>
                            <Text style={{fontSize: 15}}>Mandaluyong, Metro Manila</Text>
                        </View>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    </View>
)

export default MerchantLocation;