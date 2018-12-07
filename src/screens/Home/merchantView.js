import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { images } from '../../resources';

const sliderWidth = Dimensions.get('window').width;
const horizontalMargin = 20;
const itemWidth = (sliderWidth + horizontalMargin * 2) / 2;
const itemHeight = itemWidth / 2;

const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

export default class MerchantView extends Component {
    _renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity>
                    <Image
                        source={images.sample}
                        style={{ height: itemHeight, width: itemWidth, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Carousel
                    ref={(ref) => { this.carousel = ref; }}
                    data={sampleData}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>
        )
    }
}