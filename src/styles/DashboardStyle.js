import { StyleSheet } from 'react-native';
import { fonts } from '../resources';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        elevation: 2, 
        padding: 16, 
        borderRadius: 10,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    topRowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    topRowTitle: {
        fontSize: fonts.LARGE
    },
    topRowRightComponent: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    topRowBody: {
        fontSize: fonts.LARGE, 
        marginRight: 16
    },
    lineSeparator: {
        width: '100%', 
        height: 1, 
        backgroundColor: '#D8D8D8', 
        alignSelf: 'center', 
        marginVertical: 12
    },
    bottomRowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: fonts.EXTRA_SMALL,
        fontWeight: 'bold',
        color: '#FFB000'
    },
    imageContainer: {
        height: 54, 
        width: 54, 
        marginBottom: 8
    },
    image: {
        flex: 1, 
        height: null, 
        width: null,
        resizeMode: 'contain'
    }
});

export default styles;