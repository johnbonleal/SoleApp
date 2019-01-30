import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Logo } from '../../components';
import { Constants } from '../../configs';
import { images, fonts } from '../../resources';
import { numberFormat } from '../../utils/DataFormatter';

const ContentRow = ({ title, value, isAmount }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}>{title}</Text>
        <View style={styles.headerValue}>
            <Text style={styles.value}>{isAmount ? `₱ ${numberFormat(value)}` : `${value} days`}</Text>
        </View>
    </View>
);

class LoanCalculatorSummaryModal extends Component {
    render() {
        const { isVisible, toggleIsVisible } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <TouchableOpacity style={{ height: 14, width: 14 }} onPress={toggleIsVisible}>
                            <Image style={[styles.image, { tintColor: Constants.COLOR_AVAILA_PRIMARY }]} source={images.close} />
                        </TouchableOpacity>
                        <Logo image={images.availa_contact} text={"Loan Summary"} textStyle={{ backgroundColor: Constants.COLOR_AVAILA_SECONDARY }} />
                        <View>
                            <ContentRow isAmount title={'Loan Amount'} value={5000} />
                            <ContentRow isAmount title={'Interest'} value={15000} />
                            <ContentRow isAmount title={'Total Repayment'} value={6500} />
                            <ContentRow title={'Repayment Terms'} value={16} />
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}>Payment Schedule</Text>
                        <View style={{height: Constants.SCREEN_HEIGHT / 10, borderRadius: 8, backgroundColor: Constants.COLOR_AVAILA_LIGHT}}></View>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Loan Now!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default LoanCalculatorSummaryModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    content: {
        height: Constants.SCREEN_HEIGHT * 0.9,
        width: Constants.SCREEN_WIDTH * 0.8,
        backgroundColor: Constants.COLOR_WHITE,
        justifyContent: 'space-around',
        borderRadius: 8,
        padding: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    headerValue: {
        height: 24,
        backgroundColor: Constants.COLOR_AVAILA_LIGHT,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingHorizontal: 12
    },
    value: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    },
    button: {
        height: Constants.BUTTON_HEIGHT,
        backgroundColor: Constants.COLOR_AVAILA_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: fonts.MEDIUM,
        color: Constants.COLOR_WHITE,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});