import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

const LATITUDE_DELTA = 0.8;
const LONGITUDE_DELTA = 0.8;

export default class Nearby extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: "",
            longitude: "",
            region: {
                latitude: 14.6091,
                longitude: 121.0223,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        }
    }
    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(position => {
            const { latitude, longitude } = position.coords;
            this.setState({ latitude, longitude });
        }, error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    }
    onRegionChange = (region) => {
        if (region) {
            // THIS IF BLOCK IS TO MAKE SURE COORDINATES IS WITHIN THE PHILIPPINES
            if (region.latitude < 25 && region.latitude > 0 && region.longitude > 115 && region.longitude < 130) {
                this.setState({ region });
            }
        }
    }
    render() {
        const { region, latitude, longitude } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    region={region}
                    initialRegion={region}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    style={{ flex: 1 }}
                    onRegionChange={this.onRegionChange}
                >
                    <Circle
                        center={{
                            latitude,
                            longitude
                        }}
                        radius={3000}
                        strokeWidth={1}
                        strokeColor={'#f2a65a'}
                        fillColor={'rgba(239,184,129,0.3)'}
                    />
                    <Marker
                        coordinate={{
                            latitude,
                            longitude
                        }}
                        title='You are here!'
                    />
                </MapView>
            </View>
        )
    }
}