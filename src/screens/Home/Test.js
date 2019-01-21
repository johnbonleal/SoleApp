import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StarRating, MapBox } from '../../components';
import { NearbyMerchantsData } from '../../utils/Data';
import { NavigationService } from '../../configs';

import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

const SLIDER_WIDTH = width;
const ITEM_WIDTH = width * 0.85;
const CAROUSEL_HEIGHT = (height / 3) + 30;
const MARGIN_BOUNDS = (width - ITEM_WIDTH) / 2;

const ContentIcon = ({ icon }) => (
    <View style={styles.contentIcon}>
        <Image style={[styles.image, { tintColor: '#9B9B9B' }]} source={icon} resizeMode={"contain"} />
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
        // StatusBar.setHidden(true);
    }
    _toggleAnimation = () => {
        const { isHidden } = this.state;
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));

        var toValue = CAROUSEL_HEIGHT - 25;
        if (isHidden) {
            toValue = 0;
        }
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: toValue,
                velocity: 1,
                tension: 2,
                friction: 5,
            }
        ).start();
    }
    _onItemChange = index => {
        this.setState({ currentIndex: index });
    }
    _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.carouselContainer}>
                <View style={{ flex: 2 }}>
                    <Image style={styles.image} source={item.src} />
                </View>
                <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
                    <View style={styles.companyRow}>
                        <View style={styles.companyLogo}>
                            <Image style={styles.image} source={images.sample} />
                        </View>
                        <Text style={styles.companyName}>{item.name}</Text>
                    </View>
                    <View style={styles.contentSummary}>
                        <View style={styles.contentRow}>
                            <ContentIcon icon={images.location_light} />
                            <Text numberOfLines={1} style={{ fontSize: 13, flex: 1, flexWrap: 'wrap' }}>{item.address}</Text>
                        </View>
                        <View style={styles.contentRow}>
                            <ContentIcon icon={images.compass} />
                            <Text style={{ fontSize: 13 }}>{`${item.distance} from you`}</Text>
                            <Text style={styles.dot}>•</Text>
                            <StarRating ratingObj={item.rating} style={{ marginRight: 8 }} />
                            <Text style={styles.reviewCount}>{item.reviewCounts}</Text>
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
        const { bounceValue, currentIndex, scrollX } = this.state;
        return (
            <View style={[styles.container, { ...StyleSheet.absoluteFillObject }]}>
                <MapBox data={NearbyMerchantsData} currentIndex={currentIndex} scrollX={scrollX} />
                <View style={[styles.container, { justifyContent: 'flex-end' }]}>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => NavigationService.back()}>
                            <View style={styles.closeButtonIcon}>
                                <Image style={styles.image} source={images.close} resizeMode={"contain"} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.gpsButton}>
                        <View style={styles.gpsIcon}>
                            <Image style={styles.image} source={images.gps} />
                        </View>
                    </TouchableOpacity>
                    <Animated.View style={{ height: CAROUSEL_HEIGHT, transform: [{ translateY: bounceValue }] }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={NearbyMerchantsData}
                            renderItem={this._renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            onSnapToItem={this._onItemChange}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: {
                                                x: this.state.scrollX,
                                            },
                                        },
                                    },
                                ]
                            )}
                        />
                    </Animated.View>
                </View>
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
        backgroundColor: '#FFFFFF',
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
        color: '#4A4A4A'
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
        height: height / 25,
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
        alignSelf: 'flex-end',
        backgroundColor: '#FFFFFF',
        elevation: 2,
        borderRadius: 8,
        padding: 8,
        marginBottom: MARGIN_BOUNDS,
        marginRight: MARGIN_BOUNDS
    },
    gpsIcon: {
        height: 24,
        width: 24
    },
    closeButtonContainer: {
        position: 'absolute',
        right: MARGIN_BOUNDS,
        top: MARGIN_BOUNDS
    },
    closeButton: {
        height: 36,
        width: 36,
        elevation: 2,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    closeButtonIcon: {
        height: 15,
        width: 15
    }
});