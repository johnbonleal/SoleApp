import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationService, Constants } from '../configs';
import { logout } from '../actions/AuthActions';

import { images, fonts } from '../resources';

const HEADER_MAX_HEIGHT = 200;

class SideMenu extends Component {
    _onPressProfileImage = () => {
        NavigationService.closeDrawer();
        NavigationService.navigate('Profile');
    }
    _handleLogout = () => {
        const { auth } = this.props;
        if (auth && auth.data && auth.data.access_token) {
            this.props.handleLogout({
                access_token: auth.data.access_token,
                platform: 'Venteny'
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.headerBackground} source={images.header_bg} >
                    <TouchableOpacity style={styles.profilePictureContainer} onPress={this._onPressProfileImage}>
                        <Image style={styles.image} source={images.profile} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.name}>John Leal</Text>
                        <View style={styles.subtitleContainer}>
                            <Text style={styles.subtitleText}>1,800 Available Points</Text>
                            <Ionicons name={"ios-arrow-forward"} size={13} color={Constants.COLOR_WHITE} />
                        </View>
                    </View>
                </ImageBackground>
                <DrawerItems {...this.props} />
                <TouchableOpacity
                    style={styles.logoutContainer}
                    onPress={this._handleLogout}
                >
                    <View style={styles.logoutIcon}>
                        <Image style={styles.image} source={images.logout} />
                    </View>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleLogout: params => dispatch(logout(params))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.COLOR_WHITE
    },
    headerBackground: {
        height: HEADER_MAX_HEIGHT,
        padding: 16,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    profilePictureContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    name: {
        fontSize: fonts.LARGE,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitleText: {
        fontSize: fonts.SMALL,
        color: Constants.COLOR_WHITE,
        marginRight: 5
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    logoutIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 16
    },
    logoutText: {
        color: Constants.COLOR_BLACK,
        marginLeft: 16
    }
});