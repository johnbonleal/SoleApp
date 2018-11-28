import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    close: {
        backgroundColor: '#FFF',
        position: 'absolute',
        right: 20,
        top: 30,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    cameraContainer: {
        ...StyleSheet.absoluteFill,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraBorderContainer: {
        width: 200, 
        height: 200
    },
    cameraBorder: {
        flex: 1,
        height: undefined,
        width: undefined,
        tintColor: '#FFF',
        resizeMode: 'contain'
    }
});

export default styles;