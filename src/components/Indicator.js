import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import AutoSlideAnimationHelper from '../utils/AutoSlideAnimationHelper';

class Indicator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicatorAnim: new Animated.Value(0),
            width: 0,
        };
    }
    componentDidMount() {
        const { animate } = this.props;
        if (animate) {
            this.animateIndicator();
        }  
    }
    animateIndicator = (reset = true) => {
        if (reset) this.state.indicatorAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(this.state.indicatorAnim, {
                toValue: 1,
                duration: 5000 * (1 - this.state.indicatorAnim._value),
            }).start(({ finished }) => {
                // if (finished) this.onNextItem();
            });
        });
    }
    setWidthFromLayout = event => {
        const { width } = event.nativeEvent.layout;
        this.setState({ width });
    }
    render() {
        const { animate, story, seen, coming, i } = this.props;
        let style = {};

        if (animate) {
            style = {
                width: this.state.indicatorAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, this.state.width],
                    extrapolate: 'clamp'
                })
            };
        }
        // } else if (story.idx > i) { // seen
		// 	style = { flex: 1 };
		// } else if (story.idx <= i) { // coming
		// 	style = { width: 0 };
		// }
        return (
            <View style={styles.line} onLayout={this.setWidthFromLayout}>
                <Animated.View style={[styles.progress, style]} />
            </View>
        );
    }
}

export default Indicator;

const styles = StyleSheet.create({
    line: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 1,
        height: 2,
    },
    progress: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: 2,
    },
});