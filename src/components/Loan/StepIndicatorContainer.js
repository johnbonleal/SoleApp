import React, { PureComponent } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import LoanCashTitle from './LoanCashTitle';
import StepIndicator from 'react-native-step-indicator';
import StepIndicatorStyles from '../../styles/StepIndicatorStyle';
import { Constants } from '../../configs';

class StepIndicatorContainer extends PureComponent {
        _renderCashTitle = () => {
            let title = "";
            switch (this.props.step) {
                case 0:
                    title = "Personal Details";
                    break;
                case 1:
                    title = "Employment Details";
                    break;
                case 2:
                    title = "Documentary Requirements";
                    break;
                case 3:
                    title = "Personal References";
                    break;
                case 4:
                    title = "Bank Account";
                    break;
                case 5:
                    title = "Submit Loan Application";
                    break;
                default:
                    title = "";
                    break;
            }
            return <LoanCashTitle title={title} />;
        }
        render() {
            const { step, scrollY, containerStyle } = this.props;
            const stepIndicatorTranslateY = scrollY.interpolate({
                inputRange: [0, 25],
                outputRange: [0, -55],
                extrapolate: 'clamp'
            });

            const textOpacity = scrollY.interpolate({
                inputRange: [0, 25],
                outputRange: [1, 0],
                extrapolate: 'clamp'
            })
            return (
                <Animated.View style={[styles.container, { backgroundColor: Constants.COLOR_WHITE, transform: [{ translateY: stepIndicatorTranslateY }] }, containerStyle]}>
                    {this._renderCashTitle()}
                    <View style={{ marginVertical: 16 }}>
                        <StepIndicator
                            customStyles={StepIndicatorStyles}
                            currentPosition={step}
                            stepCount={6}
                        />
                    </View>
                    <Animated.Text style={[styles.instruction, { opacity: textOpacity }]}>
                        <Text style={{ color: 'red' }}>* </Text>
                        Indicates Required Field
                        </Animated.Text>
                </Animated.View>
            )
        }
    }

export default StepIndicatorContainer;

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    instruction: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})