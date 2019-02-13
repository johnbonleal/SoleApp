import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import LoanSlider from './LoanSlider';
import { Constants } from '../../configs';
import styles from '../../styles/LoanStyles';

class LoanCalculatorSliders extends PureComponent {
    _onValueChange = (value, isAmount) => {
        const { parent } = this.props;
        if (isAmount) {
            parent.setState({ calculator: { ...parent.state.calculator, amount: value } });
        } else {
            parent.setState({ calculator: { ...parent.state.calculator, days: value } });
        }
    }
    render() {
        const { parent, values, calculateInterest, toggleModal } = this.props;
        return (
            <View style={styles.sliderContainer}>
                <LoanSlider
                    parent={parent}
                    isAmount
                    step={500}
                    title={"HOW MUCH WOULD YOU LIKE TO BORROW?"}
                    value={values && values.amount}
                    minimumRange={parent && parent.state.minAmount}
                    maximumRange={parent && parent.state.maxAmount}
                    calculateInterest={calculateInterest}
                    onValueChange={this._onValueChange}
                />
                <LoanSlider
                    parent={parent}
                    step={15}
                    title={"WHEN ARE YOU GOING TO PAY YOUR LOAN?"}
                    value={values && values.days}
                    minimumRange={parent && parent.state.minDays}
                    maximumRange={parent && parent.state.maxDays}
                    onValueChange={this._onValueChange}
                />
                <View >
                    <Text style={[styles.headerTitle, { width: '100%', marginBottom: 12 }]}>WHERE WILL YOU USE THE LOAN?</Text>
                    <TouchableOpacity style={styles.dropdown} />
                </View>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: Constants.COLOR_AVAILA_SECONDARY, width: '50%' }]}
                    onPress={toggleModal}
                >
                    <Text style={[styles.buttonText, { color: Constants.COLOR_WHITE }]}>Calculate</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoanCalculatorSliders;