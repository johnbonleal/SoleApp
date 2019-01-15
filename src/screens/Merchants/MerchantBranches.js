import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StatusBar, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Header, StarRating, Branch } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import ScanQrModal from '../ScanQR/ScanqrModal';
import { toggleScanQrModal } from '../../actions/CameraActions';

import { images, fonts } from '../../resources';

const APP_HEADER_HEIGHT = 200;
const ICON_HEIGHT = 25;
const ratingObj = { ratings: 3 };

const { width, height } = Dimensions.get('window');

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

class MerchantBranches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScanQrVisible: false,
            scrollY: new Animated.Value(0)
        };
    }
    _onPressScanQR = () => {
        if (this.props.camera.isScanQrVisible) {
            NavigationService.navigate('ScanQR');
        } else {
            this._toggleCameraModal();
        }
    }
    _onPressScanQrProceed = () => {
        this._toggleCameraModal();
        this.props.toggleScanQrModal(true);
        NavigationService.navigate('ScanQR');
    }
    _toggleCameraModal = () => {
        this.setState({ isScanQrVisible: !this.state.isScanQrVisible });
    }
    renderHeader = () => {
        const { scrollY } = this.state;
        const animatedHeaderOpacity = scrollY.interpolate({
            inputRange: [APP_HEADER_HEIGHT, APP_HEADER_HEIGHT+1],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        return (
            <Header
                headerLeft={images.back}
                imageStyle={{ opacity: animatedHeaderOpacity }}
                withBackground
            />
        )
    }
    render() {
        const { scrollY } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                {this.renderHeader()}
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    )}
                >
                    <View style={{ height: APP_HEADER_HEIGHT, width }}>
                        <Image style={{ flex: 1, height: null, width: null }} source={images.beach_1} />
                    </View>
                    <View style={{ padding: 16 }}>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={{ fontSize: 15 }}>HOTELS & RESORT</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>One night staycation</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                                <View style={{ height: ICON_HEIGHT, width: ICON_HEIGHT, borderRadius: ICON_HEIGHT / 2, overflow: 'hidden', marginRight: 8 }}>
                                    <Image style={{ flex: 1, height: null, width: null }} source={images.image2} />
                                </View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>BEACH HOUSE</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <StarRating ratingObj={ratingObj} />
                                </View>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>70</Text>
                            </View>
                        </View>
                        <Branch
                            data={sampleData}
                            onPressItem={this._showLocation}
                        />
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', elevation: 10, padding: 16, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: 'black', shadowOpacity: 0.5 }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFA701', alignItems: 'center', borderRadius: 8, paddingVertical: 16 }} onPress={this._onPressScanQR}>
                        <Text style={{ fontSize: fonts.MEDIUM, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Scan QR Code</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MerchantBranches);