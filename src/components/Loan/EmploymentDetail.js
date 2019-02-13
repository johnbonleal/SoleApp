import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { RoundedFields } from '.';

class EmploymentDetail extends PureComponent {
    render() {
        const {
            onChangeValueEmployment,
            employmentDetails
        } = this.props;
        return (
            <View>
                <RoundedFields
                    data={["Company Name", "Employee ID Number", "Work Email Address", "Hire Date"]}
                    value={employmentDetails}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValueEmployment}
                />
                <RoundedFields
                    data={["Referrer's Name", "Referrer's Mobile Number"]}
                    value={employmentDetails}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValueEmployment}
                />
            </View>
        );
    }
}

export default EmploymentDetail;