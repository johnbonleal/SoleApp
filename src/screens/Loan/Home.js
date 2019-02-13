import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Animated, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { NavigationBar, AvailaImage } from '../../components';
import { Constants, NavigationService } from '../../configs';
import { ServiceOption } from '../../components/Loan';
import { images } from '../../resources';
import { NearbyMerchantsData } from '../../utils/Data';

class HomeAvaila extends Component {
    _renderItem = ({ item, index }) => {
        return (
            <View key={item.id} style={styles.carouselContainer}>
                <View style={styles.carouselItemImage}>
                    <Image style={styles.image} source={item.src} />
                </View>
                <View style={styles.carouselItemDescription}>
                    <Text style={styles.title}>Budget Friendly Ideas</Text>
                    <Text style={styles.subtitle}>Small business Ideas na swak sa budget mo!</Text>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                    headerLeftImageStyle={{ tintColor: '#4BBBAE' }}
                    headerTitle={<AvailaImage />}
                    headerStyle={{ position: 'relative', elevation: 1 }}
                />
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image
                        style={styles.image}
                        source={images.availa_home_bg}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={[styles.header, { marginBottom: 24 }]}>What's New</Text>
                    <Animated.View style={{ height: Constants.CAROUSEL_HEIGHT - 30 }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={NearbyMerchantsData}
                            renderItem={this._renderItem}
                            sliderWidth={Constants.SLIDER_WIDTH}
                            itemWidth={Constants.ITEM_WIDTH}
                        />
                    </Animated.View>
                    <Text style={[styles.header, { marginVertical: 12 }]}>Services</Text>
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <ServiceOption
                            icon={images.availa_calculator}
                            title={"Loan Calculator"}
                            subtitle={"Calculate your lorem ipsum"}
                            onPress={() => NavigationService.navigate('LoanCalculator')}
                        />
                        <ServiceOption
                            icon={images.availa_loan}
                            title={"Loan Cash"}
                            subtitle={"Borrow money at lorem ipsum rate"}
                            onPress={() => NavigationService.navigate('LoanCash')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default HomeAvaila;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    content: {
        flex: 1,
        paddingVertical: 24
    },
    carouselContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden'
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9B9B9B',
        marginLeft: 24
    },
    carouselItemImage: {
        height: '70%',
        borderRadius: 12,
        overflow: 'hidden'
    },
    carouselItemDescription: {
        height: '30%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A4A4A'
    },
    subtitle: {
        fontSize: 15,
        color: '#9B9B9B'
    }
})