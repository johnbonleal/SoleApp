import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, Alert } from 'react-native';

class Indicator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { width: 0 };
    }
    setWidthFromLayout = event => {
        const { width } = event.nativeEvent.layout;
        this.setState({ width });
    }
    render() {
        const { animate, indicatorAnim, currentIndex, i } = this.props;
        let style = {};
        
        if (animate) {
            style = {
                width: indicatorAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, this.state.width],
                    extrapolate: 'clamp'
                })
            };
        } else if (currentIndex > i) { // seen
            style = { flex: 1 };
        } else if (currentIndex <= i) { // coming
            style = { width: 0 };
        }
        return (
            <View style={styles.line} onLayout={this.setWidthFromLayout}>
                <Animated.View style={[styles.progress, style]} />
            </View>
        )
    }
}

export default Indicator;

const styles = StyleSheet.create({
    line: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 2,
        height: 3,
    },
    progress: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: 3,
    },
});