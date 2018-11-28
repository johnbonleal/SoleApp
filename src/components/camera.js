import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../resources';
import CameraStyles from '../styles/cameraStyle';

export default class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRenderCamera: false
        };
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
                    {!isQrEnabled && <TouchableOpacity style={CameraStyles.close}>
                        <Ionicons name={"ios-close"} size={30} color={"#000"} />
                    </TouchableOpacity>}
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
                        {isQrEnabled && <Text style={CameraStyles.instructions}>Align QR code to scan</Text>}
                        <View style={CameraStyles.cameraBorderContainer} >
                            <Image
                                style={CameraStyles.cameraBorder}
                                source={images.camera_border}
                            />
                        </View>
                    </View>
                </View>}
            </View>
        );
    }
}