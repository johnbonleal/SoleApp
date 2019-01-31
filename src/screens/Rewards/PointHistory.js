import React, { Component } from 'react';
import { StatusBar, View, ImageBackground } from 'react-native';
import PointHistoryTab from '../../routes/PointHistoryTab';
import { NavigationBar } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { images, fonts } from '../../resources';

const HEADER_MAX_HEIGHT = 142;
class PointHistory extends Component {
    static router = PointHistoryTab.router;
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
                    headerTitle={"Point History"}
                    onPressHeaderLeft={this._onPressBack}
                />
                <ImageBackground style={{ height: HEADER_MAX_HEIGHT, position: 'absolute', top: 0, left: 0, right: 0 }} source={images.header_bg} />
                <PointHistoryTab navigation={this.props.navigation} />
            </View>
        )
    }
}

export default PointHistory;