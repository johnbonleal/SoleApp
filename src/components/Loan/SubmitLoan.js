import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Constants } from '../../configs';
import { CheckBox } from '..';

const LoanTerms = ({ name, text, handleChangeValue }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
        <CheckBox name={name} handleChangeValue={handleChangeValue} />
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'red', marginHorizontal: 8 }}>*</Text>
            <Text style={{ flex: 1, fontSize: 16 }}>{text}</Text>
        </View>
    </View>
);

class SubmitLoan extends PureComponent {
    render() {
        const { handleChangeValue } = this.props;
        return (
            <View style={{ padding: 16 }}>
                <LoanTerms name={"checkbox1"} text={"I hereby declare that all the information provided are complete, valid and truthful."} handleChangeValue={handleChangeValue} />
                <LoanTerms name={"checkbox2"} text={"I hereby agree with the privacy policy of DELTAPEAK Lending Inc."} handleChangeValue={handleChangeValue} />
            </View>
        )
    }
}

export default SubmitLoan;