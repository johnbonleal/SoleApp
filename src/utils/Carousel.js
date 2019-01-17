import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, PanResponder } from 'react-native';

// export const Carousel = (function() {
//     var anim = new Animated.Value(0);
//     var currentIndex = 0;
//     const data = LoginImageData;

//     function autoPlay(reset = true) {
//         if (reset) anim.setValue(0);

//         requestAnimationFrame(() => {
//             Animated.timing(anim, {
//                 toValue: 1,
//                 duration: 5000 * (1 - anim._value),
//             }).start(({ finished }) => {
//                 if (finished) onNextItem();
//             });
//         });
//     }
//     function onNextItem() {
//         autoPlay();
//         currentIndex = currentIndex < data.length - 1 ? currentIndex + 1 : 0;
//     }
//     return {
//         autoPlay,
//         currentIndex
//     };
// })();

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideAnim: new Animated.Value(0),
            currentIndex: 0
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
            currentIndex: prevState.currentIndex < this.props.data.length - 1 ? prevState.currentIndex + 1 : 0
        }));
    }
    render() {
        const { currentIndex } = this.state;
        const { data, style, imageGradient, childComponent } = this.props;
        return (
            <View style={[{ flex: 1 }, style]}>
                <View style={{ ...StyleSheet.absoluteFill }} >
                    <Image style={styles.image} source={data[currentIndex].src} />
                </View>
                {imageGradient && <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image style={styles.image} source={imageGradient} />
                </View>}
                {childComponent}
            </View>
        )
    }
}

export default Carousel;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: null,
        width: null
    }
});