import React, { PureComponent } from 'react';
import { View, Dimensions, StyleSheet, Image, Text, Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { Constants } from '../configs';
import { images } from '../resources';

class MapBox extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: Constants.LATITUDE,
                longitude: Constants.LONGITUDE,
                latitudeDelta: Constants.LATITUDE_DELTA,
                longitudeDelta: Constants.LONGITUDE_DELTA,
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
                        latitudeDelta: Constants.LATITUDE_DELTA,
                        longitudeDelta: Constants.LONGITUDE_DELTA,
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
                        latitudeDelta: Constants.LATITUDE_DELTA,
                        longitudeDelta: Constants.LONGITUDE_DELTA,
                    }
                });
            }
        );
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (this.props.data.length > 0) {
            if (nextProps.currentIndex !== this.props.currentIndex) {
                const merchant = nextProps.data[nextProps.currentIndex];
                const region = {
                    latitude: merchant.attributes.latitude,
                    longitude: merchant.attributes.longitude,
                    latitudeDelta: Constants.LATITUDE_DELTA,
                    longitudeDelta: Constants.LONGITUDE_DELTA
                };
                this._animateToRegion(region);
            }
            if (nextProps.animateToUser) {
                this._animateToRegion(this.state.region);
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
                (index - 1) * Constants.ITEM_WIDTH,
                index * Constants.ITEM_WIDTH,
                (index + 1) * Constants.ITEM_WIDTH,
            ];
            const height = scrollX.interpolate({
                inputRange,
                outputRange: [24, 50, 24],
                extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1, 0.8],
                extrapolate: "clamp",
            });
            return { height, opacity };
        });
        return (
            <View style={{ ...StyleSheet.absoluteFill, flex: 1, alignItems: 'center' }}>
                <MapView
                    ref={(mapView) => { this.mapView = mapView; }}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    onRegionChange={this._onRegionChange}
                >
                    <Marker
                        coordinate={region}
                        title='You are here!'
                    >
                        <View style={{ height: 29, width: 29 }}>
                            <Image style={{ flex: 1, height: null, width: null }} source={images.current_location} />
                        </View>
                    </Marker>
                    {
                        data.length > 0 &&
                        data.map((item, index) => {
                            const dimensStyle = {
                                height: interpolations[index].height,
                                width: interpolations[index].height,
                            };
                            const opacityStyle = {
                                opacity: interpolations[index].opacity,
                            };
                            return (
                                <Marker.Animated
                                    ref={(marker) => { this.marker = marker; }}
                                    key={item.id}
                                    coordinate={{
                                        latitude: item.attributes.latitude,
                                        longitude: item.attributes.longitude
                                    }}
                                >
                                    <Animated.View style={[dimensStyle, opacityStyle]}>
                                        <Image style={{ flex: 1, height: null, width: null }} source={images.location_active} resizeMode={"contain"} />
                                    </Animated.View>
                                </Marker.Animated>
                            )
                        })}
                </MapView>
            </View>
        )
    }
}

export default MapBox;