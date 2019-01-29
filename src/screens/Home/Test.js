import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Header } from '../../components';
import { Constants } from '../../configs';
import { images } from '../../resources';
import { NearbyMerchantsData } from '../../utils/Data';

class LoanCalculator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header
                    headerLeft={images.back}
                    headerLeftImageStyle={{ tintColor: '#4BBBAE' }}
                    headerStyle={{ position: 'relative' }}
                />
                <View style={{ backgroundColor: '#F2F2F2', padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4A4A4A' }}>Loan Calculator</Text>
                    <Text style={{ fontSize: 15, color: '#4A4A4A' }}>Calculator your lorem ipsum</Text>
                </View>
                <View style={styles.content}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{width: '47%', fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>HOW MUCH WOULD YOU LIKE TO BORROW?</Text>
                        <View style={{height: 24, backgroundColor: '#9B9B9B', borderRadius: 24, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', paddingHorizontal: 12}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#FFFFFF'}}>9, 000</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoanCalculator;

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
        padding: 24
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