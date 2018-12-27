import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScanQrModal from '../ScanQR/ScanqrModal';

import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';
import { toggleScanQrModal } from '../../actions/CameraActions';
import styles from '../../styles/DashboardStyle';

class Dashboard extends Component {
    state = {
        isScanQrVisible: false
    }
    _onPressEarnedPoints = () => {
        NavigationService.navigate('Points');
    }
    _onPressMyCard = () => {
        NavigationService.navigate('MyCard');
    }
    _onPressScanQR = () => {
        if (this.props.camera.isScanQrVisible) {
            NavigationService.navigate('ScanQR');
        } else {
            this._toggleCameraModal();
        }
    }
    _onPressRewards = () => {
        NavigationService.navigate('Rewards');
    }
    _toggleCameraModal = () => {
        this.setState({ isScanQrVisible: !this.state.isScanQrVisible });
    }
    _onPressScanQrProceed = () => {
        this._toggleCameraModal();
        this.props.toggleScanQrModal(true);
        NavigationService.navigate('ScanQR');
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
                <ScanQrModal isScanQrVisible={this.state.isScanQrVisible} toggleScanQrModal={this._toggleCameraModal} onPressScanQrProceed={this._onPressScanQrProceed} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        camera: state.camera
    }
}

const mapDispatchToProps = dispatch => ({
    toggleScanQrModal: params => dispatch(toggleScanQrModal(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);