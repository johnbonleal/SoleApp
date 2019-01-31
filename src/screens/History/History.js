import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { NavigationBar } from '../../components';

import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

const Stub = ({ }) => (
    <View style={styles.stubContainer}>
        <View style={styles.info}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.claimContainer}>
                    <Text style={{ color: '#FFFFFF' }}>CLAIMED</Text>
                </View>
                <Text style={styles.date}>November 16, 2018</Text>
            </View>
            <View style={styles.store}>
                <View style={styles.storeImageContainer}>
                    <Image style={[styles.image, { tintColor: '#F5A623' }]} source={images.store} resizeMode={"contain"} />
                </View>
                <Text style={styles.storeName}>Granny Smith's Fries</Text>
            </View>
            <Text style={styles.location}>Greenbelt 3</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>₱120</Text>
            <Text style={styles.status}>SAVED</Text>
        </View>
    </View>
);

class History extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar headerStyle={{ position: 'relative' }} headerTitle={"History"} headerLeft={images.close} withBackground />
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F3F2F2', paddingHorizontal: 16, paddingVertical: 8 }}
                    scrollEventThrottle={16}
                >
                    <Stub />
                    <Stub />
                    <Stub />
                </ScrollView>
            </View>
        )
    }
}

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    // Stub
    stubContainer: {
        height: height / 7, 
        backgroundColor: '#FFFFFF', 
        flexDirection: 'row', 
        borderRadius: 12, 
        overflow: 'hidden', 
        elevation: 1, 
        marginVertical: 8
    },
    info: {
        flex: 3, 
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    claimContainer: {
        backgroundColor: '#F5A623', 
        borderRadius: 4, 
        paddingHorizontal: 16, 
        marginRight: 8
    },
    date: {
        fontSize: 15, 
        color: '#9B9B9B'
    },
    store: {
        flexDirection: 'row', 
        marginVertical: 5
    },
    storeImageContainer: {
        height: 18, 
        width: 18, 
        marginRight: 8
    },
    storeName: {
        fontSize: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    location: {
        fontSize: 15, 
        color: '#9B9B9B'
    },
    amountContainer: {
        flex: 1, 
        backgroundColor: '#F5A623',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    amount: {
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    status: {
        fontSize: 15, 
        color: '#FFFFFF'
    }
});