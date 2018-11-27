import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationEvents } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    <RNCamera
                        ref={ref => this.camera = ref}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={(qrCodeData) => this.props.onQrCodeDetected(qrCodeData)}
                    />
                    <TouchableOpacity style={{flex: 0, right: 0, top: 0, width: 100, height: 100, position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name={"ios-close"} size={50} color={"gray"} />
                    </TouchableOpacity>

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