import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { LoanCashTitle, LoanNotification, LoanDetail, LoanTag, Button } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

var _ = require('lodash');


class LoanCancel extends PureComponent {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: Constants.COLOR_BACKGROUND }]}>
                <LoanNotification />
                <View style={{ padding: 24, backgroundColor: Constants.COLOR_WHITE }}>
                    <LoanCashTitle title={"Current Loan"} style={{ color: Constants.COLOR_DARK_GRAY }} />
                    <LoanDetail
                        icon={images.status}
                        title={"Status"}
                        value={<LoanTag text={"Cancelled"} />}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <LoanDetail
                        icon={images.calendar}
                        title={"Application Date"}
                        value={"January 12, 2019"}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <LoanDetail
                        icon={images.loan_amount}
                        title={"Loan Amount"}
                        value={`₱ 5, 000.00`}
                        containerStyle={{ marginVertical: 10 }}
                    />
                    <LoanDetail
                        icon={images.total_interest}
                        title={"Interest Amount"}
                        value={`₱ 1, 500.00`}
                        containerStyle={{ marginVertical: 10 }}
                    />
                </View>
                <View style={{ padding: 24, marginVertical: 16, backgroundColor: Constants.COLOR_WHITE }}>
                    <LoanDetail
                        icon={images.total_payable}
                        title={"Total Payable Amount"}
                        value={`₱ 6, 500.00`}
                        containerStyle={{ marginVertical: 10 }}
                        valueTextStyle={{ marginLeft: 24 }}
                    />
                    <LoanDetail
                        icon={images.calendar}
                        title={"Cancellation Date"}
                        value={"January 13, 2019"}
                        containerStyle={{ marginVertical: 10 }}
                        valueTextStyle={{ marginLeft: 24 }}
                    />
                </View>
                <View style={{ backgroundColor: Constants.COLOR_WHITE, height: Constants.SCREEN_HEIGHT / 7.5, flexDirection: 'row', alignItems: 'center', padding: 24 }}>
                    <Button
                        title={"Apply for a new loan"}
                        containerStyle={{ backgroundColor: Constants.COLOR_AVAILA_SECONDARY }}
                        textStyle={{ color: Constants.COLOR_WHITE }}
                    />
                </View>
            </View>
        )
    }
}

export default LoanCancel;