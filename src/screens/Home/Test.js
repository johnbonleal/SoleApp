import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Animated } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { Header, LoanCashTitle } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import StepIndicator from 'react-native-step-indicator';
import StepIndicatorStyles from '../../styles/StepIndicatorStyle';
import styles from '../../styles/LoanStyles';

import PersonalDetail from '../../components/Loan/PersonalDetail';
import EmploymentDetail from '../../components/Loan/EmploymentDetail';
import DocumentaryRequirement from '../../components/Loan/DocumentaryRequirement';
import PersonalReference from '../../components/Loan/PersonalReference';
import BankAccount from '../../components/Loan/BankAccount';
import SubmitLoan from '../../components/Loan/SubmitLoan';

var _ = require('lodash');

const Button = ({ title, containerStyle, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.personalDetailButtonContainer, containerStyle]} onPress={onPress}>
        <Text style={[styles.personalDetailButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

class LoanCash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: {},
            contactDetails: {},
            employmentDetails: {},
            personalReferences: {},
            documents: {},
            bankAccounts: {},
            photos: [],

            step: 0,
            errors: [],
            enableScrollViewScroll: true,
            scrollY: new Animated.Value(0),
            checkBoxes: {},
        };
    }
    _decrementSteps = () => this.setState({ step: this.state.step === 0 ? 0 : this.state.step - 1 });
    _incrementSteps = () => this.setState({ step: this.state.step === 5 ? 5 : this.state.step + 1 });
    _handleReceive = (data, field) => {
        let state = {};
        state[_.toString(field)] = data;

        return this.setState(state);
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    _renderCashTitle = () => {
        let title = "";
        switch (this.state.step) {
            case 0:
                title = "Personal Details";
                break;
            case 1:
                title = "Employment Details";
                break;
            case 2:
                title = "Documentary Requirements";
                break;
            case 3:
                title = "Personal References";
                break;
            case 4:
                title = "Bank Account";
                break;
            case 5:
                title = "Submit Loan Application";
                break;
            default:
                title = "";
                break;
        }
        return <LoanCashTitle title={title} />;
    }
    render() {
        const {
            step,
            enableScrollViewScroll,
            scrollY,
            checkBoxes,
            personalDetails,
            contactDetails,
            employmentDetails,
            personalReferences,
            documents,
            bankAccounts
        } = this.state;
        console.log("CheckBoxes: ", this.state.checkBoxes)
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                    headerLeftImageStyle={{ tintColor: Constants.COLOR_AVAILA_SECONDARY }}
                    headerStyle={{ position: 'relative', backgroundColor: Constants.COLOR_WHITE }}
                    headerTitle={<AvailaImage />}
                />
                <Animated.ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={enableScrollViewScroll}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                    )}
                >
                    <Header
                        title={"Loan Cash"}
                        subtitle={"Fill out lorem ipsum"}
                        containerStyle={{ padding: 16 }}
                    />
                    <View style={{ padding: 24 }}>
                        {this._renderCashTitle()}
                        <Animated.View style={{ marginVertical: 16 }}>
                            <StepIndicator
                                customStyles={StepIndicatorStyles}
                                currentPosition={step}
                                stepCount={6}
                            />
                        </Animated.View>
                        <Animated.Text style={styles.instruction}>
                            <Text style={{ color: 'red' }}>* </Text>
                            Indicates Required Field
                        </Animated.Text>
                        {(() => {
                            switch (step) {
                                case 0:
                                    return <PersonalDetail
                                        onChangeValuePersonal={this._handleChangeValue.bind(this, 'personalDetails')}
                                        onChangeValueContact={this._handleChangeValue.bind(this, 'contactDetails')}
                                        personal={personalDetails}
                                        contact={contactDetails}
                                        parent={this}
                                    />;
                                case 1:
                                    return <EmploymentDetail
                                        onChangeValueEmployment={this._handleChangeValue.bind(this, 'employmentDetails')}
                                        employmentDetails={employmentDetails}
                                        parent={this}
                                    />;
                                case 2:
                                    return <DocumentaryRequirement
                                        onGetData={this._handleReceive}
                                        documents={documents}
                                    />;
                                case 3:
                                    return <PersonalReference
                                        onChangeValue={this._handleChangeValue.bind(this, 'personalReferences')}
                                        value={personalReferences}
                                    />;
                                case 4:
                                    return <BankAccount
                                        onChangeValue={this._handleChangeValue.bind(this, 'bankAccounts')}
                                        value={bankAccounts}
                                    />;
                                case 5:
                                    return <SubmitLoan
                                        handleChangeValue={this._handleChangeValue.bind(this, 'checkBoxes')}
                                    />;
                                default:
                                    return null;
                            }
                        })()}
                        <View style={{ flexDirection: 'row', marginTop: 24, zIndex: 1 }}>
                            <Button
                                title={"Back"}
                                containerStyle={{ borderColor: Constants.COLOR_SUPER_LIGHT_GRAY, backgroundColor: Constants.COLOR_WHITE }}
                                textStyle={{ color: Constants.COLOR_AVAILA_SECONDARY }}
                                onPress={this._decrementSteps}
                            />
                            <View style={{ height: Constants.BUTTON_HEIGHT, width: 24 }} />
                            <Button
                                title={step === 5 ? "Submit" : "Next"}
                                containerStyle={[styles.buttonContainer, { backgroundColor: Constants.COLOR_LIGHT_GRAY }, (checkBoxes && checkBoxes.checkbox1 === true && checkBoxes.checkbox2 === true) && { backgroundColor: Constants.COLOR_AVAILA_SECONDARY }]}
                                textStyle={{ color: Constants.COLOR_WHITE }}
                                onPress={this._incrementSteps}
                            />
                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        )
    }
}

export default LoanCash;