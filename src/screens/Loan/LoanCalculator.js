import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import LoanCalculatorSliders from '../Loan/LoanCalculatorSliders';
import { NavigationBar, AvailaImage } from '../../components';
import { Header } from '../../components/Loan';
import { Constants, NavigationService } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';
import LoanCalculatorSummaryModal from './LoanCalculatorSummaryModal';

var _ = require('lodash');

class LoanCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculator: {
                amount: 5000,
                days: 15,
                interest: 6.25,
                totalAmount: 0,
                interestRate: 0,
                finalRate: 0,
                loanPurpose: ''
            },
            minYear: 1,
            maxYear: 5,
            minAmount: 5000,
            maxAmount: 30000,
            minDays: 15,
            maxDays: 90,

            loanSummaryIsVisible: false,

            errors: []
        };
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    _handleReceive = (data, field) => {
        let state = {};
        state[_.toString(field)] = data;

        return this.setState(state);
    }
    _calculateInterest = (yrs, amnt, dys) => {
        const { auth: { company: { loan_type } }, rates } = this.props;
        const { calculator: { amount, days } } = this.state;

        let interest = 0;

        let dayTotal = dys ? dys : days;
        let amountTotal = amnt ? amnt : amount;

        // NEW COMPUTATION
        if (Object.keys(rates).length !== 0 && rates.constructor === Object) {
            interest = rates[`${dayTotal}`];
        }
        let total_interest = parseFloat(interest * amountTotal / 100);

        this.setState({
            calculator: {
                ...this.state.calculator,
                interest: total_interest,
                total_amount: amountTotal + total_interest,
                final_rate: interest,
                years: yearTotal,
                amount: amountTotal,
                days: dayTotal
            }
        });
    }
    _toggleLoanSummaryModal = () => this.setState({ loanSummaryIsVisible: !this.state.loanSummaryIsVisible });
    _onPressModal = () => {
        this._toggleLoanSummaryModal();
        NavigationService.navigate('LoanCash');
    }
    render() {
        const { calculator, loanSummaryIsVisible } = this.state;
        const { auth } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar translucent />
                <NavigationBar
                    headerLeft={images.back}
                    headerLeftImageStyle={{ tintColor: Constants.COLOR_AVAILA_SECONDARY }}
                    headerStyle={{ position: 'relative' }}
                    headerTitle={<AvailaImage />}
                />
                <Header
                    title={"Loan Calculator"}
                    subtitle={"Calculator your lorem ipsum"}
                />
                <LoanCalculatorSliders
                    loan_type={!_.isEmpty(auth) && auth.company.loan_type}
                    onGetData={this._handleReceive}
                    onChangeValue={() => this._handleChangeValue('calculator')}
                    calculateInterest={this._calculateInterest}
                    parent={this}
                    values={calculator}
                    toggleModal={this._toggleLoanSummaryModal}
                />
                <LoanCalculatorSummaryModal
                    isVisible={loanSummaryIsVisible}
                    toggleIsVisible={this._toggleLoanSummaryModal}
                    onPress={this._onPressModal}
                />
            </View>
        )
    }
}

export default LoanCalculator;