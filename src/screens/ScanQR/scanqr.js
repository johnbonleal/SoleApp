import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Camera } from '../../components'; 
import { toggleCamera } from '../../actions/cameraActions';
import { NavigationService } from '../../configs/NavigationService';

class ScanQR extends Component {
    _onQrCodeDetected = (qrCodeData) => {
        console.log("QR Code Data: ", qrCodeData)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Camera onQrCodeDetected={this._onQrCodeDetected} isQrEnabled />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        camera: state.camera
    }
};

const mapDispatchToProps = dispatch => ({
    toggleCamera: params => dispatch(toggleCamera(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScanQR);