import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components';
import { images } from '../../resources';

class SignUp extends Component {
    render() {
        <View style={styles.container}>
            <Header headerLeft={images.close} />
        </View>
    }
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});