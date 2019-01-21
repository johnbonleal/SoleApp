import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { images } from '../resources';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapBox extends Component {
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
    componentWillReceiveProps(nextProps, prevState) {
        if (this.props.data) {
            if (nextProps.currentIndex !== this.props.currentIndex) {
                const merchant = nextProps.data[nextProps.currentIndex];
                const region = {
                    ...merchant.region,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                };
                this._animateToRegion(region);
            }
        }
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    _animateToRegion = region => {
        this.mapView && this.mapView.animateToCoordinate({ ...region });
        // this.marker && this.marker._component.animateMarkerToCoordinate(region, 500)
    }
    _animateToCurrentUserLocation = () => {
        const { region } = this.state;
        this._animateToRegion(region);
    }
    render() {
        const { region } = this.state;
        const { data, currentIndex } = this.props;
        return (
            <View style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}>
                <MapView
                    ref={(mapView) => { this.mapView = mapView; }}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    onRegionChange={()=>null}
                >
                    <Marker
                        coordinate={region}
                        title='You are here!'
                        image={images.current_location}
                    />
                    {data && data.length > 0 && data.map((item, index) => <Marker.Animated
                        ref={(marker) => { this.marker = marker; }}
                        key={item.id}
                        coordinate={item.region}
                        image={currentIndex === index ? images.location_active : images.location_inactive}
                    />)}
                </MapView>
            </View>
        )
    }
}

export default MapBox;