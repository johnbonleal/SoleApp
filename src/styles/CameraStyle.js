import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
        alignItems: 'center'
    },
    instructions: {
        color: '#FFF', 
        fontSize: 18, 
        marginBottom: 12
    },
    cameraBorderContainer: {
        width: '100%', 
        height: '65%'
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