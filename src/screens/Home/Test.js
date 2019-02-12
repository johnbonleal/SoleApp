import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Animated } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { Header, LoanCashTitle } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import StepIndicator from 'react-native-step-indicator';
import StepIndicatorStyles from '../../styles/StepIndicatorStyle';
import styles from '../../styles/LoanStyles';

import PersonalDetail from './PersonalDetail';
import EmploymentDetail from './EmploymentDetail';
import DocumentaryRequirement from './DocumentaryRequirement';
import PersonalReference from './PersonalReference';
import BankAccount from './BankAccount';

var _ = require('lodash');

const Button = ({ title, containerStyle, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.personalDetailButtonContainer, containerStyle]} onPress={onPress}>
        <Text style={[styles.personalDetailButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

const STEP_CONTAINER_MIN_HEIGHT = 50;
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
            animateHeight: new Animated.Value(64)
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
    _setAnimation = disable => {
        Animated.timing(this.state.animateHeight, {
            duration: 100,
            toValue: disable ? 0 : 64
        }).start();
    };
    _handleScroll = event => {
        this._setAnimation(event.nativeEvent.contentOffset.y > 64);
    }
    render() {
        const {
            step,
            enableScrollViewScroll,
            scrollY,
            personalDetails,
            contactDetails,
            employmentDetails,
            personalReferences,
            documents,
            bankAccounts
        } = this.state;
        const headerAnimated = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        const stepsAnimated = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [STEP_CONTAINER_MIN_HEIGHT, STEP_CONTAINER_MIN_HEIGHT],
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
                    headerStyle={{ position: 'relative' }}
                    headerTitle={<AvailaImage />}
                />
                {/* <Header
                    title={"Loan Cash"}
                    subtitle={"Fill out lorem ipsum"}
                    containerStyle={{ height: 0 }}
                /> */}
                <Animated.View style={{ height: this.state.animateHeight, backgroundColor: 'tomato' }}>
                    <Text>Hey</Text>
                </Animated.View>
                <View style={{ padding: 24 }}>
                    <Animated.View>
                        {this._renderCashTitle()}
                        <View style={{ marginVertical: 16 }}>
                            <StepIndicator
                                customStyles={StepIndicatorStyles}
                                currentPosition={step}
                                stepCount={6}
                            />
                        </View>
                        <Text style={styles.instruction}>
                            <Text style={{ color: 'red' }}>* </Text>
                            Indicates Required Field
                        </Text>
                    </Animated.View>
                    <Animated.ScrollView
                        ref={component => { this.scrollView = component }}
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={enableScrollViewScroll}
                        // onScroll={Animated.event(
                        //     [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                        // )}
                        onScroll={this._handleScroll}
                    >
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
                                title={"Next"}
                                containerStyle={[styles.buttonContainer, { backgroundColor: Constants.COLOR_LIGHT_GRAY }]}
                                textStyle={{ color: Constants.COLOR_WHITE }}
                                onPress={this._incrementSteps}
                            />
                        </View>
                    </Animated.ScrollView>
                </View>
            </View>
        )
    }
}

export default LoanCash;