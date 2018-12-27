import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationEvents } from 'react-navigation';
import { NavigationService } from '../configs/NavigationService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../resources';
import CameraStyles from '../styles/CameraStyle';

export default class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRenderCamera: false
        };
    }
    _onPressClose = () => {
        NavigationService.back();
    }
    render() {
        const { shouldRenderCamera } = this.state;
        const { isQrEnabled } = this.props;
        return (
            <View style={CameraStyles.container}>
                <NavigationEvents
                    onDidBlur={() => this.setState({ shouldRenderCamera: false })}
                    onDidFocus={() => this.setState({ shouldRenderCamera: true })}
                />
                {shouldRenderCamera && <View style={CameraStyles.container}>
                    <RNCamera
                        ref={ref => { this.camera = ref }}
                        style={CameraStyles.container}
                        type={RNCamera.Constants.Type.back}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={(qrCodeData) => this.props.onQrCodeDetected(qrCodeData)}
                    />
                    <View style={CameraStyles.cameraContainer}>
                        <View style={{ flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }} onPress={this._onPressClose}>
                                <Ionicons name={"ios-close"} size={30} color={"#000"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 9, width: '80%', justifyContent: 'center' }}>
                            <View style={{ height: '75%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={CameraStyles.cameraBorderContainer} >
                                    <Image
                                        style={CameraStyles.cameraBorder}
                                        source={images.camera_border}
                                    />
                                </View>
                                {isQrEnabled && <View style={{ height: 56, width: '90%', borderRadius: 28, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontStyle: "italic", color: '#FFFFFF' }}>Hold over a QR code</Text>
                                </View>}
                            </View>
                        </View>
                    </View>
                </View>}
            </View>
        );
    }
}