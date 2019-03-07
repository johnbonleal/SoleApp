import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { NavigationBar } from '../../components';

import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import { NavigationService, Constants } from '../../configs';
import { images, fonts } from '../../resources';
import { getFirstName } from '../../utils/Helper';

const HEADER_MAX_HEIGHT = 200;
const IMAGE_HEIGHT = 115;

import { PROFILE_DATA } from '../Trash';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '',
            action: 'Edit'
        }
    }
    _onPressPasswordSettings = () => {
        this.setState({ current: 'change password' });
    }
    _onPressBack = () => {
        NavigationService.back();
    }
    _resetState = () => {
        this.setState({ current: '', action: 'Edit' });
    }
    _updateAccount = () => {
        if (this.state.current === 'edit profile') {
            this._resetState();
        } else {
            this.setState({ current: 'edit profile', action: 'Cancel' });
        }
    }
    render() {
        const { current, action } = this.state;
        const { auth } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    headerLeft={images.back}
                    headerRight={action}
                    onPressHeaderLeft={this._onPressBack}
                    onPressHeaderRight={this._updateAccount}
                />
                <ScrollView
                    ref={component => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <ImageBackground style={styles.headerContainer} source={images.header_bg}>
                        <View style={styles.headerContent}>
                            <Text style={styles.name}>{auth.data.user && `${getFirstName(auth.data.user.first_name)} ${auth.data.user.last_name}`}</Text>
                            <View style={styles.pointContainer}>
                                <Text style={styles.points}>{auth.data && `${auth.data.points} Available Points`}</Text>
                                <Ionicons name={"ios-arrow-forward"} size={13} color={Constants.COLOR_WHITE} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar} >
                            <Image style={styles.image} source={auth.data.user && { uri: auth.data.user.avatar.medium.url }} />
                        </View>
                        {current === 'edit profile' && <TouchableOpacity style={styles.uploadProfileContainer}>
                            <View style={styles.uploadProfileIcon}>
                                <Image style={[styles.image, { tintColor: Constants.COLOR_WHITE }]} source={images.add} />
                            </View>
                        </TouchableOpacity>}
                    </View>
                    {(() => {
                        switch (current) {
                            case 'edit profile':
                                return <EditProfile profileData={PROFILE_DATA} />;
                            case 'change password':
                                return <ChangePassword profileData={PROFILE_DATA} />;
                            default:
                                return <ProfileInfo profileData={PROFILE_DATA} onPressPasswordSettings={this._onPressPasswordSettings} />;
                        }
                    })()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.COLOR_WHITE
    },
    headerContainer: {
        height: HEADER_MAX_HEIGHT,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    headerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 24
    },
    name: {
        fontSize: fonts.LARGE,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    pointContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    points: {
        fontSize: fonts.SMALL,
        color: Constants.COLOR_WHITE,
        marginRight: 5
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    avatar: {
        height: IMAGE_HEIGHT,
        width: IMAGE_HEIGHT,
        borderRadius: IMAGE_HEIGHT / 2,
        marginTop: HEADER_MAX_HEIGHT - (IMAGE_HEIGHT / 1.25),
        marginRight: 16,
        alignSelf: 'flex-end',
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    uploadProfileContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        right: 16,
        height: 30,
        width: 30,
        backgroundColor: '#F5A623',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Constants.COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadProfileIcon: {
        height: 15,
        width: 15,
        overflow: 'hidden'
    }
});