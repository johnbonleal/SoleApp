import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, TouchableOpacity } from 'react-native';
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
            bank_accounts: {},
            photos: [],

            step: 0,
            errors: []
        };
    }
    _decrementSteps = () => this.setState({ step: this.state.step - 1 });
    _incrementSteps = () => this.setState({ step: this.state.step + 1 });
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
            personalDetails,
            contactDetails,
            employmentDetails,
            personalReferences,
            documents
        } = this.state;
        const { auth } = this.props;
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
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <Header
                        title={"Loan Cash"}
                        subtitle={"Fill out lorem ipsum"}
                    />
                    <View style={{ padding: 24 }}>
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
                                default:
                                    return null;
                            }
                        })()}
                        <View style={{ flexDirection: 'row', marginTop: 24 }}>
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
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LoanCash;