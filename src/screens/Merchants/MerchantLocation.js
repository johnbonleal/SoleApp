import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

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
            />
        </MapView>
    </View>
)

export default MerchantLocation;