import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { LoginImageData } from '../../utils/Data';

import { images } from '../../resources';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            slideAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.autoPlay();
    }
    autoPlay = (reset = true) => {
        if (reset) this.state.slideAnim.setValue(0);

        requestAnimationFrame(() => {
            Animated.timing(this.state.slideAnim, {
                toValue: 1,
                duration: 5000 * (1 - this.state.slideAnim._value),
            }).start(({ finished }) => {
                if (finished) this.onNextItem();
            });
        });
    }
    onNextItem = () => {
        this.autoPlay();
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex < LoginImageData.length - 1 ? prevState.currentIndex + 1 : 0
        }));
    }
    render() {
        const { currentIndex } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }} >
                    <Image style={styles.image} source={LoginImageData[currentIndex].src} />
                </View>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.login_gradient} />
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
});