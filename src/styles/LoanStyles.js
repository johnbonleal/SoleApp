import { StyleSheet } from 'react-native';
import { Constants } from '../configs';
import { fonts } from '../resources';

const styles = StyleSheet.create({

    // OnBoarding

    container: {
        flex: 1
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    content: {
        height: '85%',
        width: '90%',
        paddingVertical: 16,
        justifyContent: 'space-between'
    },
    welcome: {
        height: '60%',
        justifyContent: 'center'
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    text2: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    text3: {
        fontSize: 20,
        color: Constants.COLOR_WHITE,
        marginTop: 12
    },
    button: {
        height: Constants.BUTTON_HEIGHT,
        width: '100%',
        borderRadius: Constants.BUTTON_HEIGHT / 2,
        backgroundColor: Constants.COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Constants.COLOR_AVAILA_SECONDARY
    },

    // LoanCalculatorSliders

    loanCalculatorHeaderContainer: {
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    loanHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    loanHeaderSubtitle: {
        fontSize: 15,
        color: Constants.COLOR_DARK_GRAY
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 24
    },
    dropdown: {
        height: Constants.DROPDOWN_HEIGHT,
        backgroundColor: '#E5E5E5'
    },

    // LoanSlider

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        width: '47%',
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    headerValue: {
        height: 24,
        backgroundColor: Constants.COLOR_LIGHT_GRAY,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingHorizontal: 12
    },
    value: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    sliderFieldText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Constants.COLOR_LIGHT_GRAY
    },
    loanSlider: {
        marginVertical: 12
    },
    track: {
        height: 24,
        backgroundColor: Constants.COLOR_AVAILA_LIGHT,
        borderRadius: 12,
    },
    thumb: {
        width: 36,
        height: 24,
        borderRadius: 12,
        backgroundColor: Constants.COLOR_AVAILA_PRIMARY
    },
    range: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // LoanSummaryModal

    close: {
        height: 14,
        width: 14
    },
    modalContent: {
        height: Constants.SCREEN_HEIGHT * 0.9,
        width: Constants.SCREEN_WIDTH * 0.8,
        backgroundColor: Constants.COLOR_WHITE,
        justifyContent: 'space-around',
        borderRadius: 8,
        padding: 16
    },
    modalHeaderContainer: {
        backgroundColor: Constants.COLOR_AVAILA_LIGHT,
        borderRadius: 24,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    modalHeaderText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 3
    },
    paymentBreakdownContainer: {
        height: Constants.SCREEN_HEIGHT / 10,
        borderRadius: 5,
        backgroundColor: Constants.COLOR_AVAILA_LIGHT,
        marginVertical: 12
    },

    // personal detail

    instruction: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    personalDetailButtonContainer: {
        flex: 1,
        height: Constants.BUTTON_HEIGHT,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Constants.COLOR_SUPER_LIGHT_GRAY,
        backgroundColor: Constants.COLOR_LIGHT_GRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    personalDetailButtonText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;