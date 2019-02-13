import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Logo, Tag } from '..';
import { Constants } from '../../configs';
import { images } from '../../resources';
import { numberFormat } from '../../utils/DataFormatter';
import styles from '../../styles/LoanStyles';

const ContentRow = ({ title, value, isAmount }) => (
    <View style={styles.rowContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Tag
            title={isAmount ? `₱ ${numberFormat(value)}` : `${value} days`}
            textStyle={styles.modalHeaderText}
            style={styles.modalHeaderContainer}
        />
    </View>
);

class LoanCalculatorSummaryModal extends Component {
    render() {
        const { isVisible, toggleIsVisible, onPress } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                <View
                    style={[
                        styles.container,
                        styles.centered,
                        { backgroundColor: 'rgba(0,0,0,0.7)' }
                    ]}
                >
                    <View style={styles.modalContent}>
                        <View>
                            <TouchableOpacity style={styles.close} onPress={toggleIsVisible}>
                                <Image
                                    style={[styles.image, { tintColor: Constants.COLOR_AVAILA_SECONDARY }]}
                                    source={images.close}
                                />
                            </TouchableOpacity>
                            <Logo
                                image={images.availa_contact}
                                text={"Loan Summary"}
                                textContainerStyle={{ backgroundColor: '#6ED2C0' }}
                            />
                        </View>
                        <View
                            style={{ marginTop: 24 }}
                        >
                            <ContentRow
                                isAmount
                                title={'Loan Amount'}
                                value={5000}
                            />
                            <ContentRow
                                isAmount
                                title={'Interest'}
                                value={15000}
                            />
                            <ContentRow
                                isAmount
                                title={'Total Repayment'}
                                value={6500} />
                            <ContentRow
                                title={'Repayment Terms'}
                                value={16} />
                            <Text
                                style={[styles.modalHeaderText, { marginTop: 3 }]}
                            >
                                Payment Schedule
                            </Text>
                            <View
                                style={styles.paymentBreakdownContainer}
                            >
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                {
                                    backgroundColor: Constants.COLOR_AVAILA_SECONDARY,
                                    borderRadius: 8
                                }
                            ]}
                            onPress={onPress}
                        >
                            <Text style={[styles.buttonText, { color: Constants.COLOR_WHITE }]}>Loan Now!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default LoanCalculatorSummaryModal;