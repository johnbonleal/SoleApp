import React, { Component } from 'react';
import { View, Text, Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StarRating, MapBox } from '../../components';
import { NearbyMerchantsData } from '../../utils/Data';
import { Constants, NavigationService } from '../../configs';
import { images } from '../../resources';

const ContentIcon = ({ icon }) => (
    <View style={styles.contentIcon}>
        <Image style={[styles.image, { tintColor: Constants.COLOR_LIGHT_GRAY }]} source={icon} resizeMode={"contain"} />
    </View>
);

class MerchantNearby extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bounceValue: new Animated.Value(0),
            scrollX: new Animated.Value(0),
            isHidden: false,
            currentIndex: 0
        };
    }
    componentDidMount() {
        console.log("Nearby merchants: ", this.props);
    }
    _toggleAnimation = () => {
        const { isHidden, bounceValue } = this.state;
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));

        var toValue = Constants.CAROUSEL_HEIGHT - 25;
        if (isHidden) {
            toValue = 0;
        }
        Animated.spring(
            bounceValue,
            {
                toValue: toValue,
                velocity: 1,
                tension: 2,
                friction: 5,
            }
        ).start();
    }
    _onItemChange = index => {
        this.setState({ currentIndex: index, animateToUser: false });
    }
    _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.carouselContainer}>
                <View style={{ flex: 2 }}>
                    <Image style={styles.image} source={item.attributes && { uri: item.attributes.merchant.merchant_banner.medium.url } || item.src} />
                </View>
                <View style={[styles.container, { backgroundColor: Constants.COLOR_WHITE }]}>
                    <View style={styles.companyRow}>
                        <View style={styles.companyLogo}>
                            <Image style={styles.image} source={item.attributes && { uri: item.attributes.merchant.logo.medium.url } || images.sample} />
                        </View>
                        <Text style={styles.companyName}>{item.attributes && item.attributes.name || item.name}</Text>
                    </View>
                    <View style={styles.contentSummary}>
                        <View style={styles.contentRow}>
                            <ContentIcon icon={images.location_light} />
                            <Text numberOfLines={1} style={{ fontSize: 13, flex: 1, flexWrap: 'wrap' }}>{item.attributes && item.attributes.address}</Text>
                        </View>
                        <View style={styles.contentRow}>
                            <ContentIcon icon={images.compass} />
                            <Text style={{ fontSize: 13 }}>{`${item.attributes && item.attributes.distance_from ? item.attributes.distance_from.toFixed(2) : 0} km from you`}</Text>
                            <Text style={styles.dot}>•</Text>
                            <StarRating ratingObj={{ ratings: 4 }} style={{ marginRight: 8 }} />
                            <Text style={styles.reviewCount}>{40}</Text>
                        </View>
                    </View>
                </View>
                <Animated.View
                    style={styles.drawerContainer}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={this._toggleAnimation}>
                        <View style={styles.drawerToggler} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
    render() {
        const { bounceValue, currentIndex, scrollX, animateToUser } = this.state;
        const { navigation } = this.props;
        return (
            <View style={[styles.container, { ...StyleSheet.absoluteFillObject }]}>
                <MapBox data={navigation && navigation.state.params} currentIndex={currentIndex} scrollX={scrollX} animateToUser={animateToUser} />
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => NavigationService.back()}>
                        <View style={styles.closeButtonIcon}>
                            <Image style={styles.image} source={images.close} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.gpsButton} onPress={() => this.setState({ animateToUser: true })}>
                    <View style={styles.gpsIcon}>
                        <Image style={styles.image} source={images.gps} />
                    </View>
                </TouchableOpacity>
                <Animated.View style={[{ height: Constants.CAROUSEL_HEIGHT, position: 'absolute', left: 0, right: 0, bottom: 0 }, { transform: [{ translateY: bounceValue }] }]}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={navigation && navigation.state.params}
                        renderItem={this._renderItem}
                        sliderWidth={Constants.SLIDER_WIDTH}
                        itemWidth={Constants.ITEM_WIDTH}
                        onSnapToItem={this._onItemChange}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: {
                                            x: scrollX,
                                        },
                                    },
                                },
                            ]
                        )}
                    />
                </Animated.View>
            </View>
        );
    }
}

export default MerchantNearby;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carouselContainer: {
        flex: 1,
        backgroundColor: Constants.COLOR_WHITE,
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    companyRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 12
    },
    companyLogo: {
        height: 24,
        width: 24,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 12
    },
    companyName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    contentSummary: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    contentIcon: {
        height: 14,
        width: 14,
        marginRight: 8
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    dot: {
        fontSize: 13,
        marginHorizontal: 8
    },
    reviewCount: {
        fontSize: 8,
        fontWeight: 'bold'
    },
    drawerContainer: {
        height: Constants.SCREEN_HEIGHT / 25,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
    },
    drawerToggler: {
        height: 5,
        width: '12%',
        borderRadius: 2.5,
        backgroundColor: 'rgba(255,255,255,0.7)'
    },
    gpsButton: {
        position: 'absolute',
        backgroundColor: Constants.COLOR_WHITE,
        elevation: 2,
        borderRadius: 8,
        padding: 8,
        bottom: Constants.CAROUSEL_HEIGHT + Constants.MARGIN_BOUNDS,
        right: Constants.MARGIN_BOUNDS,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    gpsIcon: {
        height: 24,
        width: 24
    },
    closeButtonContainer: {
        position: 'absolute',
        right: Constants.MARGIN_BOUNDS,
        top: Constants.MARGIN_BOUNDS,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    closeButton: {
        height: 36,
        width: 36,
        elevation: 2,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.COLOR_WHITE
    },
    closeButtonIcon: {
        height: 15,
        width: 15
    }
});