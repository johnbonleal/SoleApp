import React, { Component } from 'react';
import { Platform, View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import RewardsTabNavigator from '../../routes/RewardsTab';
import { Header } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : 0;
const HEADER_MAX_HEIGHT = 142;

class Rewards extends Component {
    static router = RewardsTabNavigator.router;
    _onPressBack = () => {
        NavigationService.navigate("Points");
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F3F2F2' }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header
                    headerLeft={images.back}
                    headerTitle={"V-Rewards"}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground style={{ height: HEADER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg} />
                    <RewardsTabNavigator navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}

export default Rewards;