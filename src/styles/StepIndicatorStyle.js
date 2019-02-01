import { Constants } from '../configs';

const StepIndicatorStyles = {

    // container

    stepIndicatorSize         : 37,
    currentStepIndicatorSize  : 40,
    separatorStrokeWidth      : 2,
    stepStrokeWidth           : 2,
    stepIndicatorLabelFontSize: 18,

    // unfinished

    stepStrokeUnFinishedColor   : '#D8D8D8',
    separatorUnFinishedColor    : '#D8D8D8',
    stepIndicatorUnFinishedColor: Constants.COLOR_WHITE,

    // current step

    currentStepStrokeWidth           : 3,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorCurrentColor        : Constants.COLOR_AVAILA_SECONDARY,
    stepIndicatorLabelCurrentColor   : Constants.COLOR_WHITE,
    stepStrokeCurrentColor           : Constants.COLOR_AVAILA_SECONDARY,

    // finished

    stepIndicatorFinishedColor     : Constants.COLOR_WHITE,
    stepStrokeFinishedColor        : Constants.COLOR_AVAILA_SECONDARY,
    separatorFinishedColor         : Constants.COLOR_AVAILA_SECONDARY,
    stepIndicatorLabelFinishedColor: Constants.COLOR_AVAILA_SECONDARY

}

export default StepIndicatorStyles;