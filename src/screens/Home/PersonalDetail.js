import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Constants } from '../../configs';
import { LoanCashTitle, FieldCreator } from '../../components/Loan';
import StepIndicator from 'react-native-step-indicator';
import StepIndicatorStyles from '../../styles/StepIndicatorStyle';
import styles from '../../styles/LoanStyles';

class PersonalDetail extends PureComponent {
    render() {
        const { step } = this.props;
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
                <FieldCreator
                    data={["First Name", "Middle Name", "Last Name"]}
                    style={{ marginTop: 16 }}
                />
            </View>
        )
    }
}

export default PersonalDetail;