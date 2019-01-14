import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Dimensions } from 'react-native';
import AutoSlideAnimationHelper from '../../utils/AutoSlideAnimationHelper';
import { Indicator } from '../../components';

const { width, height } = Dimensions.get('window');

class Story extends Component {
    render() {
        const { story } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={AutoSlideAnimationHelper.onNextItem}
                delayPressIn={200}
                onPressIn={AutoSlideAnimationHelper.pause}
            >
                <View style={{ flex: 1 }}>
                    <Image
                        source={story.items[story.idx].src}
                        style={styles.deck}
                    />
                    {this.renderIndicators()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
    renderIndicators() {
        const { story, currentDeck } = this.props;

        return (
            <View style={styles.indicatorWrap}>
                <View style={styles.indicators}>
                    {story.items.map((item, i) => (
                        <Indicator
                            key={i} i={i}
                            animate={currentDeck && story.id == i}
                            story={story}
                        />
                    ))}
                </View>
            </View>
        );
    }
}

export default Story;

const styles = StyleSheet.create({
    deck: {
        width, height,
        backgroundColor: 'white',
    },

    progressIndicator: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

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
    indicatorBg: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 50,
    },

    back: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 90,
    },

    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 70,
        height: 70,
        zIndex: 1,
    },
    closeCross: {
        position: 'absolute',
        top: 32, right: 8,
        width: 20,
        height: 1,
        backgroundColor: '#fff'
    }
});