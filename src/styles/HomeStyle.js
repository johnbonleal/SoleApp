import { StyleSheet } from 'react-native';
import { fonts } from '../resources';

const TOP_CONTAINER_MAX_HEIGHT = 200;
const DASHBOARD_MAX_HEIGHT = 157;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    backgroundImage: {
        height: TOP_CONTAINER_MAX_HEIGHT,
        ...StyleSheet.absoluteFill,
        backgroundColor: '#F2F2F2'
    },
    greetings: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        left: 16,
        position: 'absolute',
        top: TOP_CONTAINER_MAX_HEIGHT / 3
    },
    dashboardContainer: {
        backgroundColor: 'transparent',
        height: DASHBOARD_MAX_HEIGHT,
        marginTop: TOP_CONTAINER_MAX_HEIGHT - (DASHBOARD_MAX_HEIGHT / 2),
        marginBottom: 16,
        paddingHorizontal: 16
    },
    servicesContainer: {
        paddingHorizontal: 16,
        marginVertical: 16
    },
    serviceTitle: {
        fontSize: fonts.MEDIUM,
        marginBottom: 12
    },
    buttonContainer: {
        height: DASHBOARD_MAX_HEIGHT,
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: fonts.EXTRA_SMALL,
        fontWeight: 'bold',
        color: '#FFB000',
        marginTop: 5
    },
    imageContainer: {
        height: 120,
        width: 120,
        overflow: 'hidden'
    },
    avatar: {
        height: 24,
        width: 24
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
});

export default styles;