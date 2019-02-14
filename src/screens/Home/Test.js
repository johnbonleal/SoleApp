import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Animated } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { Header, StepIndicatorContainer } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
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

const HEADER_CONTAINER_MAX_HEIGHT = Constants.SCREEN_HEIGHT / 3.5;
const HEADER_CONTAINER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_CONTAINER_MAX_HEIGHT - HEADER_CONTAINER_MIN_HEIGHT;

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
    _handleScroll = event => {
        const { scrollY } = this.state;
        console.log("Scroll: ", event.nativeEvent.contentOffset.y);
    }
    render() {
        const {
            step,
            scrollY,
            personalDetails,
            contactDetails,
            employmentDetails,
            personalReferences,
            documents,
            bankAccounts
        } = this.state;

        // Container Animation

        const topContainerHeight = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [HEADER_CONTAINER_MAX_HEIGHT, HEADER_CONTAINER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        // Header Animations

        const headerHeight = scrollY.interpolate({
            inputRange: [0, 30],
            outputRange: [Constants.LOAN_HEADER_HEIGHT, 0],
            extrapolate: 'clamp',
        });
        const headerOpacity = scrollY.interpolate({
            inputRange: [0, 10],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
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
                <Animated.View
                    style={{
                        height: topContainerHeight,
                        backgroundColor: Constants.COLOR_WHITE,
                    }}
                >
                    <Header
                        title={"Loan Cash"}
                        subtitle={"Fill out lorem ipsum"}
                        containerStyle={{
                            height: headerHeight,
                            opacity: headerOpacity
                        }}
                    />
                    <StepIndicatorContainer scrollY={scrollY} step={step} />
                </Animated.View>
                <View style={{ padding: 16 }}>
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
                </View>
                {/* <View style={{ flexDirection: 'row', marginTop: 24, zIndex: 1 }}>
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
                    </View> */}
                <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', paddingTop: 16 }}>
                    <TouchableOpacity
                        onPress={this._incrementSteps}
                        style={{
                            height: Constants.BUTTON_HEIGHT,
                            backgroundColor: Constants.COLOR_AVAILA_SECONDARY,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Constants.COLOR_WHITE }}>{step === 5 ? "Submit" : "Next"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoanCash;