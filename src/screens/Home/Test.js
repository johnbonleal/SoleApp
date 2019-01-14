import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Indicator } from '../../components';
import AutoSlideAnimationHelper from './AutoSlideAnimationHelper';

import { images } from '../../resources';

const { width, height } = Dimensions.get('window');

const data = [
    {
        idx: 1,
        items: [
            { id: 1, src: images.beach_1, type: 'img' },
            { id: 2, src: images.beach_2, type: 'img' },
            { id: 3, src: images.beach_3, type: 'img' },
            { id: 4, src: images.beach_4, type: 'img' }
        ]
    }
];

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        }
    }
    _onPressImage = () => {
        // this.setState(prevState => ({
        //     currentIndex: prevState.currentIndex < data[0].items.length - 1 ? prevState.currentIndex + 1 : 0
        // }));
        AutoSlideAnimationHelper.onNextItem();
    }
    renderIndicators = () => {
        const { currentIndex } = this.state;
        return (
            <TouchableWithoutFeedback
                onPress={AutoSlideAnimationHelper.onNextItem}
                delayPressIn={200}
                onPressIn={AutoSlideAnimationHelper.pause}
            >
                <View style={styles.indicatorWrap}>
                    <View style={styles.indicators}>
                        {data[0].items.map((item, i) => (
                            <Indicator
                                key={i} i={i}
                                animate={currentIndex == i}
                                // story={story}
                            />
                        ))}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )

    }
    render() {
        const { currentIndex } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: 'red' }} onPress={this._onPressImage}>
                    <Image style={{ flex: 1, height: null, width: null }} source={data[0].items[currentIndex].src} />
                </TouchableWithoutFeedback>
                {this.renderIndicators()}
            </View>
        )
    }
}

export default Test;

const styles = StyleSheet.create({
    indicatorWrap: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0
    },
    indicators: {
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 8,
        flexDirection: 'row',
    },
})