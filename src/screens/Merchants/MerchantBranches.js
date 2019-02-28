import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StatusBar, ScrollView, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { NavigationBar, StarRating, Branch, FixedButton  } from '../../components';
import { NavigationService, Constants } from '../../configs';
import ScanQrModal from '../ScanQR/ScanqrModal';
import { toggleScanQrModal } from '../../actions/CameraActions';

import { images, fonts } from '../../resources';

const APP_HEADER_HEIGHT = 200;
const ratingObj = { ratings: 3 };

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
            <NavigationBar
                headerLeft={images.back}
                imageStyle={{ opacity: animatedHeaderOpacity }}
                withBackground
            />
        )
    }
    render() {
        const { scrollY } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
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
                    <View style={styles.header}>
                        <Image 
                            style={styles.image} 
                            source={navigation.state.params.data && {uri: navigation.state.params.data.merchant_banner.medium.url} || images.beach_1} 
                        />
                    </View>
                    <View style={{ padding: 16 }}>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.category}>{navigation.state.params.data && navigation.state.params.data.category.toUpperCase()}</Text>
                            <Text style={styles.deal}>{navigation.state.params.data && navigation.state.params.data.merchant_deals[0].name.toUpperCase()}</Text>
                            <View style={styles.companyContainer}>
                                <View style={styles.logo}>
                                    <Image 
                                        style={styles.image} 
                                        source={navigation.state.params.data && {uri: navigation.state.params.data.logo.medium.url} || images.image2} 
                                    />
                                </View>
                                <Text style={styles.companyName}>{navigation.state.params.data && navigation.state.params.data.name.toUpperCase()}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <StarRating ratingObj={ratingObj} />
                                </View>
                                <Text style={styles.reviewCount}>70</Text>
                            </View>
                        </View>
                        <Branch
                            data={navigation.state.params.data && navigation.state.params.data.merchant_branches}
                            onPressItem={this._showLocation}
                        />
                    </View>
                </ScrollView>
                <FixedButton
                    disabled={navigation.state.params.data && !navigation.state.params.data.is_qr_activated}
                    text={"Scan QR Code"} 
                />
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: APP_HEADER_HEIGHT, 
        width: Constants.SCREEN_WIDTH
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    category: {
        fontSize: 15
    },
    deal: {
        fontSize: 30, 
        fontWeight: 'bold'
    },
    companyContainer: {
        flexDirection: 'row', 
        marginVertical: 8
    },
    logo: {
        height: Constants.MERCHANT_COMPANY_LOGO_HEIGHT, 
        width: Constants.MERCHANT_COMPANY_LOGO_HEIGHT, 
        borderRadius: Constants.MERCHANT_COMPANY_LOGO_HEIGHT / 2, 
        overflow: 'hidden', 
        marginRight: 8
    },
    companyName: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    reviewCount: {
        fontSize: 12, 
        fontWeight: 'bold'
    }
});