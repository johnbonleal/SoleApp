import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import CreateProfileForm from './CreateProfileForm';
import ChangePinForm from './ChangePinForm';
import { NavigationBar } from '../../components';
import { Constants } from '../../configs';
import { images, fonts } from '../../resources';

class ChangePin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: {}
        };
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    _onPress = () => {

    }
    render() {
        const { password } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <NavigationBar
                    headerStyle={{ position: 'relative' }}
                    headerTitle={"Change Password"}
                    headerLeft={images.back}
                    withBackground
                />
                <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={images.password_logo} />
                    </View>
                        <ChangePinForm
                            onChangeProfile={() => this._handleChangeValue("Password")}
                            password={password}
                            parent={this}
                        />
                    <TouchableOpacity style={styles.button} onPress={this._onPress}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ChangePin;

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
        color: Constants.COLOR_WHITE
    }
});