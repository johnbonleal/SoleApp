import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../resources';

// TODO: Fix camera border to center

export default class Camera extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldRenderCamera: false
        };
    }
    render() {
        const { shouldRenderCamera } = this.state;
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidBlur={() => this.setState({ shouldRenderCamera: false })}
                    onDidFocus={() => this.setState({ shouldRenderCamera: true })}
                />
                {shouldRenderCamera && <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ flex: 0, backgroundColor: '#FFF', zIndex: 2, right: 20, top: 30, width: 30, height: 30, borderRadius: 15, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name={"ios-close"} size={30} color={"#000"} />
                    </TouchableOpacity>
                    <RNCamera
                        ref={ref => this.camera = ref}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={(qrCodeData) => this.props.onQrCodeDetected(qrCodeData)}
                    />
                    <View style={{
                        flex: 0,
                        position: 'absolute',
                        }}>
                        <Image 
                            source={images.camera_border} 
                            style={{
                                height: 100, 
                                width: 100, 
                                tintColor: '#FFF', 
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0, 
                                backgroundColor: 'red', 
                                justifyContent: 'center'
                            }} 
                        />
                    </View>
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})