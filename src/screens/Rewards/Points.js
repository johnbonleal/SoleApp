import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationService } from '../../configs/NavigationService';
import EarnPointsModal from './EarnPointsModal';

import { NavigationBar, CircleList, TabularList } from '../../components';
import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 198;
const sampleData = ["shoe1", "shoe2", "shoe3", "shoe4", "shoe5"];

class Points extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pointsModalIsVisible: false
        }
    }
    _togglePointsModal = () => {
        this.setState(prevState => ({
            pointsModalIsVisible: !prevState.pointsModalIsVisible
        }));
    }
    _onPressClose = () => {
        NavigationService.back();
    }
    _onPressItem = (item) => {
        let routeName;
        switch (item) {
            case "Point History":
                routeName = "PointHistory";
                break;
            case "How do I earn points?":
                this._togglePointsModal();
                break;
            case "Venteny Rewards":
                routeName = "Rewards";
                break;
            default:
                break;
        }
        NavigationService.navigate(routeName);
    }
    render() {
        const { pointsModalIsVisible } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.close}
                    onPressHeaderLeft={this._onPressClose}
                />
                <ScrollView>
                    <ImageBackground style={{ height: HEADER_MAX_HEIGHT, width: '100%' }} source={images.header_bg}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                                <Text style={{ fontSize: fonts.REGULAR, color: 'white', marginRight: 8 }}>Earned Points</Text>
                                <Ionicons name={"ios-information-circle-outline"} size={fonts.REGULAR} color={'white'} />
                            </View>
                            <Text includeFontPadding={false} style={{ fontSize: 80, color: 'white', lineHeight: 80 }}>1,800</Text>
                            <Text style={{ fontSize: fonts.EXTRA_SMALL, color: 'white', fontStyle: 'italic' }}>200 points will expire on 31 Dec 2018</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ paddingHorizontal: 16, paddingTop: 24 }}>
                        <TabularList
                            collapsible
                            data={[{title: "Point History"}, {title: "How do I earn points?"}, {title: "Venteny Rewards"}]}
                            onPressItem={this._onPressItem}
                        />
                    </View>
                    <CircleList
                        style={{ marginLeft: 24 }}
                        titleStyle={{ fontSize: fonts.REGULAR, marginBottom: 12 }}
                        data={sampleData}
                        title={"Latest Rewards"}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#9B9B9B', marginRight: 8 }}>Browse Rewards</Text>
                        <Ionicons name={"ios-arrow-forward"} size={12} color={'#9B9B9B'} />
                    </View>
                </ScrollView>
                <EarnPointsModal isVisible={pointsModalIsVisible} toggleIsVisible={this._togglePointsModal} />
            </View >
        )
    }
}

export default Points;