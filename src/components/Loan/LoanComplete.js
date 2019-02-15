import React, { Component } from 'react';
import { View, StatusBar, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { LoanCashTitle, LoanNotification } from '../../components/Loan';
import { Constants } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

var _ = require('lodash');

const LoanDetail = ({ icon, title, value, containerStyle, valueTextStyle }) => (
    <View style={[{ flexDirection: 'row' }, containerStyle]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ height: 20, width: 20, marginRight: 8 }}>
                <Image style={styles.image} source={icon} resizeMode={"contain"} />
            </View>
            <Text style={{ fontSize: 15, color: Constants.COLOR_LIGHT_GRAY }}>{title}: </Text>
        </View>
        <View style={{ flex: 1 }}>
            {!_.isString(value) ? value :
                <Text style={[{ fontSize: 15, fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }, valueTextStyle]}>{value}</Text>
            }
        </View>
    </View>
);

const BankAccountDetail = ({ icon, title, value, containerStyle }) => (
    <View style={[{ flexDirection: 'row' }, containerStyle]}>
        <View style={{ height: 20, width: 20, marginRight: 8 }}>
            <Image style={styles.image} source={icon} resizeMode={"contain"} />
        </View>
        <View>
            <Text style={{ fontSize: 15, color: Constants.COLOR_LIGHT_GRAY }}>{title}: </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}>{value}</Text>
        </View>
    </View>
);

const Button = ({ title, containerStyle, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.personalDetailButtonContainer, containerStyle]} onPress={onPress}>
        <Text style={[styles.personalDetailButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

class LoanComplete extends Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: Constants.COLOR_BACKGROUND }]}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                    headerLeftImageStyle={{ tintColor: Constants.COLOR_AVAILA_SECONDARY }}
                    headerStyle={{ position: 'relative', backgroundColor: Constants.COLOR_WHITE }}
                    headerTitle={<AvailaImage />}
                />
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                    <LoanNotification success />
                    <View style={{ padding: 24, backgroundColor: Constants.COLOR_WHITE }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <LoanCashTitle title={"Current Loan"} />
                            <Text style={{ fontSize: 15, color: Constants.COLOR_LIGHT_GRAY }}>12 Jan 2019</Text>
                        </View>
                        <LoanDetail
                            icon={images.status}
                            title={"Status"}
                            value={
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        backgroundColor: Constants.COLOR_ERROR,
                                        borderRadius: 12,
                                        paddingHorizontal: 12
                                    }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: Constants.COLOR_WHITE }}>Pending</Text>
                                    </View>
                                </View>
                            }
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
                        <BankAccountDetail
                            icon={images.bank_name}
                            title={"Bank Account Name"}
                            value={"Ma Angelica M. Oanes"}
                            containerStyle={{ marginVertical: 10 }}
                        />
                        <BankAccountDetail
                            icon={images.bank_number}
                            title={"Bank Account Number"}
                            value={"3170 3751 1307 1455"}
                            containerStyle={{ marginVertical: 10 }}
                        />
                        <BankAccountDetail
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
                </ScrollView>
            </View>
        )
    }
}

export default LoanComplete;