import React, { PureComponent } from 'react';
import { View, Animated } from 'react-native';
import { Constants } from '../../configs';
import PersonalReferenceField from './PersonalReferenceField';

class PersonalReference extends PureComponent {
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
        const { onChangeValue, value } = this.props;
        return (
            <Animated.View style={{ transform: [{ translateX }], opacity }}>
                <PersonalReferenceField
                    data={["Full Name", "Mobile Number"]}
                    title={"Reference 1"}
                    {...this.props}
                />
            </Animated.View>
        )
    }
}

export default PersonalReference;