import React, { PureComponent } from 'react';
import { View, Text, Animated } from 'react-native';
import { Constants } from '../../configs';
import LoanTerm from './LoanTerm';

class SubmitLoan extends PureComponent {
    state = {
        translateX: new Animated.Value(Constants.SCREEN_WIDTH * 2),
        opacity: new Animated.Value(0)
    }
    componentDidMount() {
        this._startAnimation();
    }
    componentWillUnmount() {
        this._dismissAnimation();
    }
    _startAnimation = () => {
        const { translateX, opacity } = this.state;
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: 0,
                friction: 5,
                tension: 5
            }),
            Animated.timing(opacity, {
                toValue: 1
            })
        ]).start();
    }
    _dismissAnimation = () => {
        const { translateX, opacity } = this.state;
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: -100
            }),
            Animated.timing(opacity, {
                toValue: 0
            })
        ]).start();
    }
    render() {
        const { translateX, opacity } = this.state;
        const { handleChangeValue } = this.props;
        return (
            <Animated.View style={{ padding: 16, transform: [{ translateX }], opacity }}>
                <LoanTerm name={"checkbox1"} text={"I hereby declare that all the information provided are complete, valid and truthful."} handleChangeValue={handleChangeValue} />
                <LoanTerm name={"checkbox2"} text={"I hereby agree with the privacy policy of DELTAPEAK Lending Inc."} handleChangeValue={handleChangeValue} />
            </Animated.View>
        )
    }
}

export default SubmitLoan;