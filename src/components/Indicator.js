import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

class Indicator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indicatorAnim: new Animated.Value(0),
            width: 0,
            paused: false
        };
    }
    componentDidMount() {
        this.animateIndicator();
    }
    animateIndicator = (reset = true) => {
        const { indicatorAnim } = this.state;
        if (reset) this.state.indicatorAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(indicatorAnim, {
                toValue: 1,
                duration: 5000 * (1 - indicatorAnim._value),
            }).start(({ finished }) => {
                if (finished) this.onNextItem();
            });
        });
    }
    play = () => {
        if (this.state.paused) {
            this.setPaused(false);
            this.animateIndicator(false);
        }
    }
    onNextItem = () => {
        if (this.state.paused) return this.play();

        const story = this.currentStory;

        // if (story.idx >= story.items.length - 1)
        //     return this.onNextDeck();

        this.animateIndicator();
        // this.setStoryIdx(story.idx + 1);
    }
    setPaused = (paused) => {
        this.setState({ paused });
    }
    setWidthFromLayout = event => {
        const { width } = event.nativeEvent.layout;
        this.setState({ width });
    }
    render() {
        const { animate } = this.props;
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