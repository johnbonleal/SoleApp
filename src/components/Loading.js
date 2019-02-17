import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';

const Loading = () => (
    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
        <Spinner type="ThreeBounce" size={50} color="#EFB881" />
    </View>
);

export default Loading;