import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';

const Loading = () => (
    <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center'}}>
        <Spinner type="ThreeBounce" size={50} color="#EFB881" />
    </View>
);

export default Loading;