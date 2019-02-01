import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from '../../components';
import { LoanCashTitle, RoundedFields } from '../../components/Loan';
import StepIndicator from 'react-native-step-indicator';
import StepIndicatorStyles from '../../styles/StepIndicatorStyle';
import styles from '../../styles/LoanStyles';
import { Constants } from '../../configs';

class PersonalDetail extends PureComponent {
    render() {
        const { step, onChangeValue, personal } = this.props;
        return (
            <View style={[styles.container, { padding: 24 }]}>
                <LoanCashTitle title={"Personal Details"} />
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
                <RoundedFields
                    data={["First Name", "Middle Name", "Last Name"]}
                    value={personal}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValue}
                />
                <View style={{ height: Constants.BUTTON_HEIGHT }}>
                    <Dropdown
                        onChangeValue={onChangeValue}
                        data={["Male", "Female"]}
                        name={"gender"}
                        value={personal}
                    />
                </View>
            </View>
        )
    }
}

export default PersonalDetail;