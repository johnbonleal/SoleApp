import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import LoginScreen from './Login';
import MainScreen from './Main';

var _ = require('lodash');

class ScreenSwitcher extends Component {
    render() {
        const { auth } = this.props;
        return (
            <View style={styles.container}>
                {auth && !_.isEmpty(auth.data) ?
                    <MainScreen />:
                    <LoginScreen />
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ScreenSwitcher);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});