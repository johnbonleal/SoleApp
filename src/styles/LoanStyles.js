import { StyleSheet } from 'react-native';
import { Constants } from '../configs';

const styles = StyleSheet.create({

    // OnBoarding

    container: {
        flex          : 1
    },
    centered: {
        justifyContent: 'center',
        alignItems    : 'center'
    },
    image: {
        flex  : 1,
        height: null,
        width : null
    },
    content: {
        height         : '85%',
        width          : '90%',
        paddingVertical: 16,
        justifyContent : 'space-between'
    },
    welcome: {
        height        : '60%',
        justifyContent: 'center'
    },
    text1: {
        fontSize  : 30,
        fontWeight: 'bold',
        color     : Constants.COLOR_WHITE
    },
    text2: {
        fontSize  : 60,
        fontWeight: 'bold',
        color     : Constants.COLOR_WHITE
    },
    text3: {
        fontSize : 20,
        color    : Constants.COLOR_WHITE,
        marginTop: 12
    },
    button: {
        height         : Constants.BUTTON_HEIGHT,
        width          : '100%',
        borderRadius   : Constants.BUTTON_HEIGHT / 2,
        backgroundColor: Constants.COLOR_WHITE,
        justifyContent : 'center',
        alignItems     : 'center',
        alignSelf      : 'center'
    },
    buttonText: {
        fontSize  : 16,
        fontWeight: 'bold',
        color     : Constants.COLOR_AVAILA_SECONDARY
    },

    // LoanCalculatorSliders

    loanCalculatorHeaderContainer: {
        backgroundColor: '#F2F2F2', 
        padding: 16
    },
    loanCalculatorTitle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: Constants.COLOR_DARK_GRAY
    },
    loanCalculatorSubtitle: {
        fontSize: 15, 
        color: Constants.COLOR_DARK_GRAY
    },
    sliderContainer: {
        flex             : 1,
        justifyContent   : 'space-evenly',
        paddingHorizontal: 24
    },
    dropdown: {
        height         : Constants.DROPDOWN_HEIGHT,
        backgroundColor: '#E5E5E5'
    },

    // LoanSlider

    header: {
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        width     : '47%',
        fontSize  : 15,
        fontWeight: 'bold',
        color     : Constants.COLOR_DARK_GRAY
    },
    headerValue: {
        height           : 24,
        backgroundColor  : Constants.COLOR_LIGHT_GRAY,
        borderRadius     : 24,
        justifyContent   : 'center',
        alignItems       : 'center',
        alignSelf        : 'flex-end',
        paddingHorizontal: 12
    },
    value: {
        fontSize  : 15,
        fontWeight: 'bold',
        color     : Constants.COLOR_WHITE
    },
    sliderFieldText: {
        fontSize  : 12,
        fontWeight: 'bold',
        color     : Constants.COLOR_LIGHT_GRAY
    },
    loanSlider: {
        marginVertical: 12
    },
    track: {
        height         : 24,
        backgroundColor: Constants.COLOR_AVAILA_LIGHT,
        borderRadius   : 12,
    },
    thumb: {
        width          : 36,
        height         : 24,
        borderRadius   : 12,
        backgroundColor: Constants.COLOR_AVAILA_PRIMARY
    },
    range: {
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
});

export default styles;