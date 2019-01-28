import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import { Header, InputField } from '../../components';
import { Constants } from '../../configs';
import { images, fonts } from '../../resources';

const FormField = ({ name, placeholder, onChangeText, value, style }) => (
    <View style={[{ marginVertical: 3 }, style]}>
        <Text style={{ fontSize: 15, color: '#9B9B9B', marginVertical: 3 }}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
        </View>
        <TextInput secureTextEntry placeholder={placeholder} style={{ color: '#4A4A4A', fontSize: fonts.SMALL, borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingHorizontal: 12, paddingVertical: 5 }} onChangeText={onChangeText} value={value}></TextInput>
    </View>
);

class ChangePin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmPassword: ''
        };
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    render() {
        const { password, confirmPassword } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header headerStyle={{ position: 'relative' }} title={"Change Password"} headerLeft={images.back} withBackground />
                <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={images.password_logo} />
                    </View>
                    <View style={{ marginVertical: 16, alignItems: 'center' }}>
                        <Text>Please change your password for your protection</Text>
                        <Text>(minimum of 6 alphanumeric characters)</Text>
                    </View>
                    <View style={{ flex: 1, width: '100%', paddingHorizontal: 16 }}>
                        {/* <Form
                            ref={(ref) => ChangePinForm = ref}
                            // style={styles.inputFieldContainer}
                            validate
                        // submit={submit}
                        // errors={errors}
                        >
                            <Field
                                required
                                validations={required}
                                component={InputField}
                                name="first_name"
                                placeholder="First Name"
                                onChangeText={onChangeValuePersonal}
                                // customStyle={styles.inputField}
                                value={password}
                            />
                        </Form> */}
                        <FormField title={"Enter your new password"} onChangeText={(password) => this.setState({ password })} value={password} />
                        <FormField title={"Confirm your password"} onChangeText={(confirmPassword) => this.setState({ confirmPassword })} value={confirmPassword} />
                        <TouchableOpacity style={{ height: Constants.BUTTON_HEIGHT, width: '75%', borderRadius: Constants.BUTTON_HEIGHT / 2, backgroundColor: '#FBA624', justifyContent: 'center', alignItems: 'center', marginTop: Constants.BUTTON_HEIGHT / 2, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
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
    }
});