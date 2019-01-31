import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import RewardsTabNavigator from '../../routes/RewardsTab';
import { NavigationBar } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images } from '../../resources';

const HEADER_MAX_HEIGHT = 142;

class VRewards extends Component {
    static router = RewardsTabNavigator.router;
    _onPressBack = () => {
        NavigationService.back();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F3F2F2' }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerLeft={images.back}
                    headerTitle={"V-Rewards"}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ImageBackground style={{ height: HEADER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg} />
                <RewardsTabNavigator navigation={this.props.navigation} />
            </View>
        )
    }
}

export default VRewards;