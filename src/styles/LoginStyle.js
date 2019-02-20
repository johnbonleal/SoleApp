import { StyleSheet } from 'react-native';
import { Constants } from '../configs';
import { fonts } from '../resources';

const styles = StyleSheet.create({

    // Login TextField

    loginContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    loginContent: {
        flex: 0.6,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    loginTextFieldContainer: {
        marginVertical: 12
    },
    loginTextInput: {
        height: Constants.BUTTON_HEIGHT,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: Constants.BUTTON_HEIGHT / 2,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    loginTextFieldIcon: {
        height: 24,
        width: 24,
        marginRight: 8
    },
    loginTextField: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    loginButton: {
        backgroundColor: Constants.COLOR_VENTENY_SECONDARY,
        marginVertical: 12
    }
});

export default styles;
