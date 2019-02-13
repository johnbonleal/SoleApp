import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { RoundedFields } from '.';

class BankAccount extends PureComponent {
    render() {
        const {
            onChangeValue,
            value
        } = this.props;
        return (
            <View>
                <RoundedFields
                    data={["Bank Name", "Bank Account Type", "Account Name", "Account Number"]}
                    value={value}
                    style={{ marginTop: 16 }}
                    onChangeValue={onChangeValue}
                />
            </View>
        )
    }
}

export default BankAccount;