import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Nearby extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            }
        );
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
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
        const { region } = this.state;
        return (
            <View style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}>
                <MapView
                    region={region}
                    initialRegion={region}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    style={{ ...StyleSheet.absoluteFillObject }}
                    onRegionChange={() => this.onRegionChange.bind(this)}
                >
                    <Circle
                        center={region}
                        radius={3000}
                        strokeWidth={1}
                        strokeColor={'#f2a65a'}
                        fillColor={'rgba(239,184,129,0.3)'}
                    />
                    <Marker
                        coordinate={region}
                        title='You are here!'
                    />
                </MapView>
            </View>
        )
    }
}