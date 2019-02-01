import React, { Component } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { Header } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

import PersonalDetail from './PersonalDetail';

var _ = require('lodash');

class LoanCash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalDetails: {},
            contactDetails: {},
            employmentDetails: {},
            step: 0,
            errors: []
        };
    }
    _incrementSteps = () => this.setState({ step: this.state.step + 1 });
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    render() {
        const { step, personalDetails } = this.state;
        const { auth } = this.props;
        console.log("State: ", this.state);
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
                <Header
                    title={"Loan Cash"}
                    subtitle={"Fill out lorem ipsum"}
                />
                {(() => {
                    switch (step) {
                        case 0:
                            return <PersonalDetail
                                onChangeValue={this._handleChangeValue.bind(this, 'personalDetails')}
                                personal={personalDetails}
                                parent={this}
                                step={step}
                            />;
                        case 1:
                            return null;
                        default:
                            return null;
                    }
                })()}
            </View>
        )
    }
}

export default LoanCash;