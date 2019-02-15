import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationBar, AvailaImage, Tag } from '../../components';
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

const Button = ({ title, containerStyle, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.personalDetailButtonContainer, containerStyle]} onPress={onPress}>
        <Text style={[styles.personalDetailButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

class LoanCancel extends Component {
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
                    <LoanNotification />
                    <View style={{ padding: 24, backgroundColor: Constants.COLOR_WHITE }}>
                        <LoanCashTitle title={"Current Loan"} style={{ color: Constants.COLOR_DARK_GRAY }} />
                        <LoanDetail
                            icon={images.status}
                            title={"Status"}
                            value={
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{
                                        backgroundColor: Constants.COLOR_LIGHT_GRAY,
                                        borderRadius: 12,
                                        paddingHorizontal: 12
                                    }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: Constants.COLOR_WHITE }}>Cancelled</Text>
                                    </View>
                                </View>
                            }
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
                </ScrollView>
            </View>
        )
    }
}

export default LoanCancel;