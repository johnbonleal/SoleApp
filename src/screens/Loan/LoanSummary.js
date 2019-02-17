import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { NavigationBar, AvailaImage } from '../../components';
import { LoanCancel, LoanComplete } from '../../components/Loan'
import { Constants } from '../../configs';
import { images } from '../../resources';
import styles from '../../styles/LoanStyles';

class LoanSummary extends Component {
    render() {
        const { isSuccess } = this.props;
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
                    {isSuccess ? <LoanComplete /> : <LoanCancel />}
                </ScrollView>
            </View>
        )
    }
}

export default LoanSummary;