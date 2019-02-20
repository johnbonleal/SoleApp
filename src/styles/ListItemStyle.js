import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from '../configs';
import { fonts } from '../resources';

const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: Constants.SCREEN_WIDTH * 0.6
    },
    thumbnailContainer: {
        flex: 4,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 8,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    iconContainer: {
        height: 27,
        width: 27,
        borderRadius: 27 / 2,
        overflow: 'hidden',
        marginRight: fonts.SMALL
    },
    bottomContainer: {
        flex: 1,
        marginHorizontal: 8
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    dealContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    deal: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    merchantName: {
        color: Constants.COLOR_DARK_GRAY,
        fontSize: fonts.SMALL
    },
    subtitle: {
        fontSize: fonts.EXTRA_SMALL,
        color: Constants.COLOR_DARK_GRAY
    }
});

export default styles;