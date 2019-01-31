import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { images } from '../resources';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const ERROR_BOX_HEIGHT = SCREEN_HEIGHT / 7;

class ErrorBox extends PureComponent {
    state = {
        transLateY: new Animated.Value(-ERROR_BOX_HEIGHT)
    }
    componentDidMount() {
        this._startAnimation();
    }
    componentWillUnmount() {
        this._dismissAnimation();
    }
    _startAnimation = () => {
        Animated.timing(this.state.transLateY, {
            toValue: 0,
            duration: 1000
        }).start();
    }
    _dismissAnimation = () => {
        Animated.timing(this.state.transLateY, {
            toValue: -ERROR_BOX_HEIGHT,
            duration: 1000
        }).start();
    }
    render() {
        const { transLateY } = this.state;
        const { errorMessage } = this.props;
        return (
            <Animated.View style={[styles.container, { transform: [{ translateY: transLateY }] }]}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={images.banner_error} resizeMode={"cover"} />
                </View>
                <Text style={styles.text}>Invalid username or password</Text>
            </Animated.View>
        )
    }
}

export default ErrorBox;

const styles = StyleSheet.create({
    container: {
        height: ERROR_BOX_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});