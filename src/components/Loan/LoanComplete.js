import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import {
    LoanCashTitle,
    LoanNotification,
    LoanDetail,
    LoanTag,
    BankAccountSummaryDetail,
    Button
} from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

class LoanComplete extends PureComponent {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: Constants.COLOR_BACKGROUND }]}>
                <LoanNotification success />
                <View style={{ padding: 24, backgroundColor: Constants.COLOR_WHITE }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <LoanCashTitle title={"Current Loan"} />
                        <Text style={{ fontSize: 15, color: Constants.COLOR_LIGHT_GRAY }}>12 Jan 2019</Text>
                    </View>
                    <LoanDetail
                        icon={images.status}
                        title={"Status"}
                        value={<LoanTag text={"Pending"} />}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <LoanDetail
                        icon={images.loan_amount}
                        title={"Loan Amount"}
                        value={`₱ 5, 000.00`}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <LoanDetail
                        icon={images.loan_term}
                        title={"Loan Term"}
                        value={"90 days / 6 pay days"}
                        containerStyle={{ marginVertical: 10 }}
                    />
                </View>
                <View style={{ padding: 24, marginVertical: 16, backgroundColor: Constants.COLOR_WHITE }}>
                    <LoanDetail
                        icon={images.total_interest}
                        title={"Total Interest Amount"}
                        value={`₱ 1, 500.00`}
                        containerStyle={{ marginVertical: 10 }}
                        valueTextStyle={{ marginLeft: 24 }}
                    />
                    <LoanDetail
                        icon={images.total_payable}
                        title={"Total Payable Amount"}
                        value={`₱ 6, 500.00`}
                        containerStyle={{ marginVertical: 10 }}
                        valueTextStyle={{ marginLeft: 24 }}
                    />
                </View>
                <View style={{ padding: 24, marginBottom: 24, backgroundColor: Constants.COLOR_WHITE }}>
                    <BankAccountSummaryDetail
                        icon={images.bank_name}
                        title={"Bank Account Name"}
                        value={"Ma Angelica M. Oanes"}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <BankAccountSummaryDetail
                        icon={images.bank_number}
                        title={"Bank Account Number"}
                        value={"3170 3751 1307 1455"}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <BankAccountSummaryDetail
                        icon={images.bank}
                        title={"Bank"}
                        value={"Bank of Commerce"}
                        containerStyle={{ marginVertical: 10 }}
                    />
                </View>
                <View style={{ backgroundColor: Constants.COLOR_WHITE, height: Constants.SCREEN_HEIGHT / 7.5, flexDirection: 'row', alignItems: 'center', padding: 24 }}>
                    <Button
                        title={"Add Documents"}
                        containerStyle={{ borderColor: Constants.COLOR_SUPER_LIGHT_GRAY, backgroundColor: Constants.COLOR_WHITE }}
                        textStyle={{ color: Constants.COLOR_AVAILA_SECONDARY }}
                    />
                    <View style={{ height: Constants.BUTTON_HEIGHT, width: 24 }} />
                    <Button
                        title={"Cancel Loan Application"}
                        containerStyle={[styles.buttonContainer, { flex: 1.5, backgroundColor: Constants.COLOR_ERROR }]}
                        textStyle={{ color: Constants.COLOR_WHITE }}
                    />
                </View>
            </View>
        )
    }
}

export default LoanComplete;