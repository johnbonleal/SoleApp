import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';
import styles from '../../styles/DashboardStyle';

export default class Dashboard extends Component {
    _onPressEarnedPoints = () => {
        NavigationService.navigate('Points');
    }
    _onPressMyCard = () => {
        NavigationService.navigate('MyCard');
    }
    _onPressScanQR = () => {
        NavigationService.navigate('ScanQR');
    }
    _onPressRewards = () => {
        NavigationService.navigate('Rewards');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topRowContainer}>
                    <Text style={styles.topRowTitle}>Points</Text>
                    <TouchableOpacity style={styles.topRowRightComponent} onPress={this._onPressEarnedPoints}>
                        <Text style={styles.topRowBody}>1,800</Text>
                        <Ionicons name={"ios-arrow-forward"} size={20} color={"#D8D8D8"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lineSeparator} />
                <View style={styles.bottomRowContainer}>
                    <TouchableOpacity style={styles.button} onPress={this._onPressMyCard} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={images.card} />
                        </View>
                        <Text style={styles.buttonTitle}>CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this._onPressScanQR}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={images.scan_qr} />
                        </View>
                        <Text style={styles.buttonTitle}>SCAN QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this._onPressRewards}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={images.rewards} />
                        </View>
                        <Text style={styles.buttonTitle}>REWARDS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}