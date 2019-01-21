import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { images } from '../resources';
import styles from '../styles/CameraStyle';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const ITEM_WIDTH = width * 0.85;

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
        const { data, currentIndex, scrollX } = this.props;
        const interpolations = data.map((marker, index) => {
            const inputRange = [
                (index - 1) * ITEM_WIDTH,
                index * ITEM_WIDTH,
                ((index + 1) * ITEM_WIDTH),
            ];
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 1, 0.7],
                extrapolate: "clamp",
            });
            return { scale, opacity };
        });
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
                    onRegionChange={() => null}
                >
                    <Marker
                        coordinate={region}
                        title='You are here!'
                        image={images.current_location}
                    />
                    {this.props.data && this.props.data.length > 0 && this.props.data.map((item, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };
                        return (
                            <Marker
                                ref={(marker) => { this.marker = marker; }}
                                key={item.id}
                                coordinate={item.region}>
                                <Animated.View style={[{ height: 25, width: 25 }, opacityStyle, scaleStyle]}>
                                    <Image style={{ flex: 1, height: null, width: null }} source={images.location_active} resizeMode={"contain"} />
                                </Animated.View>
                            </Marker>
                        )
                    })}
                </MapView>
            </View>
        )
    }
}

export default MapBox;