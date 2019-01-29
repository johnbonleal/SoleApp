import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import CreateProfileForm from './CreateProfileForm';
import ChangePinForm from './ChangePinForm';
import { Header } from '../../components';
import { Constants } from '../../configs';
import { images, fonts } from '../../resources';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'Create Profile',
            password: {},
            profile: {}
        };
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    _onPress = () => {
        this.setState(prevState => ({ current: prevState.current === 'Create Profile' ? 'Change Password' : 'Create Profile' }));
    }
    render() {
        const { current, password, profile } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header
                    headerStyle={{ position: 'relative' }}
                    headerTitle={current === "Create Profile" ? "Create Profile" : "Change Password"}
                    headerLeft={images.back}
                    withBackground
                />
                <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={current === "Create Profile" ? images.user : images.password_logo} />
                    </View>
                    {current === "Create Profile" ?
                        <CreateProfileForm
                            onChangeProfile={() => this._handleChangeValue("Profile")}
                            profile={profile}
                            parent={this}
                        /> :
                        <ChangePinForm
                            onChangeProfile={() => this._handleChangeValue("Password")}
                            password={password}
                            parent={this}
                        />
                    }
                    <TouchableOpacity style={styles.button} onPress={this._onPress}>
                        <Text style={styles.text}>{current === "Create Profile" ? "Next" : "Submit"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: 169,
        width: 169,
        marginVertical: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    button: {
        height: Constants.BUTTON_HEIGHT,
        width: '75%',
        borderRadius: Constants.BUTTON_HEIGHT / 2,
        backgroundColor: '#FBA624',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.BUTTON_HEIGHT / 2,
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});